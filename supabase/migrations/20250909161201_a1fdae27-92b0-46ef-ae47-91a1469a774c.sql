-- Create storage buckets for file processing
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('uploads', 'uploads', false),
  ('processed', 'processed', true);

-- Create policies for file uploads (authenticated users can upload)
CREATE POLICY "Users can upload files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'uploads');

CREATE POLICY "Users can view their uploads" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'uploads');

CREATE POLICY "Users can delete their uploads" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'uploads');

-- Create policies for processed files (public read access)
CREATE POLICY "Anyone can view processed files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'processed');

CREATE POLICY "Service can manage processed files" 
ON storage.objects 
FOR ALL 
USING (bucket_id = 'processed');