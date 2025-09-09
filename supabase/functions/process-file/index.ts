import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const formData = await req.formData()
    const file = formData.get('file') as File
    const toolType = formData.get('toolType') as string
    const options = formData.get('options') ? JSON.parse(formData.get('options') as string) : {}

    if (!file || !toolType) {
      return new Response(
        JSON.stringify({ error: 'File and toolType are required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    console.log(`Processing ${toolType} for file: ${file.name}`)

    // Generate unique filename for processed file
    const timestamp = Date.now()
    const processedFileName = `processed_${timestamp}_${file.name}`
    
    let processedFileBuffer: ArrayBuffer
    let processedMimeType: string = file.type

    // Basic file processing based on tool type
    switch (toolType) {
      case 'compress-pdf':
      case 'compress-image':
      case 'compress-video':
      case 'compress-audio':
        // Simulate compression by reducing file size (in real implementation, use actual compression libraries)
        processedFileBuffer = await file.arrayBuffer()
        break
        
      case 'convert-image':
        // Basic image conversion simulation
        processedFileBuffer = await file.arrayBuffer()
        if (options.outputFormat) {
          processedMimeType = `image/${options.outputFormat}`
        }
        break
        
      case 'convert-video':
        processedFileBuffer = await file.arrayBuffer()
        if (options.outputFormat) {
          processedMimeType = `video/${options.outputFormat}`
        }
        break
        
      case 'convert-audio':
        processedFileBuffer = await file.arrayBuffer()
        if (options.outputFormat) {
          processedMimeType = `audio/${options.outputFormat}`
        }
        break
        
      case 'merge-pdf':
      case 'merge-video':
      case 'audio-joiner':
        // For merge operations, we'd need multiple files
        processedFileBuffer = await file.arrayBuffer()
        break
        
      case 'split-pdf':
        // PDF splitting would generate multiple files
        processedFileBuffer = await file.arrayBuffer()
        break
        
      default:
        // Default processing - pass through
        processedFileBuffer = await file.arrayBuffer()
    }

    // Upload processed file to storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('processed')
      .upload(processedFileName, processedFileBuffer, {
        contentType: processedMimeType,
        cacheControl: '3600'
      })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return new Response(
        JSON.stringify({ error: 'Failed to upload processed file' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    // Get public URL for download
    const { data: urlData } = supabase.storage
      .from('processed')
      .getPublicUrl(processedFileName)

    return new Response(
      JSON.stringify({ 
        success: true,
        downloadUrl: urlData.publicUrl,
        fileName: processedFileName,
        originalFileName: file.name,
        toolType
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Processing error:', error)
    return new Response(
      JSON.stringify({ error: 'Processing failed', details: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})