# Bulks Tool Pro - Professional Web Tools

A comprehensive suite of 80+ professional web tools for file processing, conversion, and editing. Built with React, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

### PDF Tools (25+ tools)
- **Convert**: PDF ↔ Word/Excel/PPT/JPG/PNG/HTML
- **Edit**: Split, Merge, Compress, Unlock, Protect
- **Optimize**: Rotate, Add Page Numbers, Extract Images

### Image Tools (20+ tools)  
- **Convert**: Between all major formats (JPG, PNG, WebP, etc.)
- **Edit**: Resize, Crop, Rotate, Compress
- **Enhance**: Background removal, filters, optimization

### Video Tools (15+ tools)
- **Convert**: MP4, AVI, MOV, WebM and more
- **Edit**: Merge, crop, add audio/text/images
- **Optimize**: Compress, screen recorder

### Audio Tools (10+ tools)
- **Convert**: MP3, WAV, FLAC, AAC and more  
- **Edit**: Trim, volume/speed/pitch control
- **Enhance**: Equalizer, reverse, joiner

### File Converters (15+ tools)
- Universal document converter
- Archive extractor and creator
- Font converter and eBook tools

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI components
- **Backend**: Supabase (Database, Storage, Edge Functions)
- **AI Services**: ElevenLabs (Text-to-Speech), OpenAI Whisper (Speech-to-Text)
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hamxatech/bulks-tool-pro.git
   cd bulks-tool-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure your Supabase credentials in `.env`:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── FileUpload.tsx  # File upload component
│   ├── Header.tsx      # Main navigation
│   ├── Footer.tsx      # Site footer
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── ToolPage.tsx    # Individual tool pages
│   ├── CategoryPage.tsx # Tool category pages
│   └── ...
├── data/
│   └── tools.ts        # Tool definitions and metadata
├── hooks/
│   └── useFileProcessor.ts # File processing logic
├── integrations/
│   └── supabase/       # Supabase client and types
└── lib/
    └── utils.ts        # Utility functions
```

## 🔒 Security Features

- **Client-side Processing**: Most tools process files in the browser
- **Automatic Deletion**: Server-processed files deleted within 24 hours
- **SSL Encryption**: All data transmission encrypted
- **Privacy-first**: No account required, minimal data collection

## 🌟 Key Features

- **80+ Professional Tools**: Comprehensive file processing suite
- **No Registration Required**: Use all tools without creating accounts
- **Mobile Responsive**: Works perfectly on all devices  
- **High Performance**: Optimized for speed and reliability
- **SEO Optimized**: Complete meta tags and structured data
- **PWA Ready**: Progressive Web App capabilities
- **Dark/Light Mode**: Automatic theme detection

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent ratings
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Sub-second initial load times

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ contents to your web server
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ameer Hamza** - Founder & CEO of Hamxa Tech
- Email: hamxatechofficial@gmail.com
- Telegram: [@hamxatech](https://t.me/hamxatech)
- Website: [hamxatech.com](https://hamxatech.com)

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Supabase](https://supabase.com/) for backend infrastructure
- [ElevenLabs](https://elevenlabs.io/) for AI voice generation
- [Tailwind CSS](https://tailwindcss.com/) for styling system

## 📈 Roadmap

- [ ] Advanced PDF editing capabilities
- [ ] Real-time collaboration features
- [ ] API for developers
- [ ] Mobile app versions
- [ ] Enterprise features

---

Made with ❤️ by [Hamxa Tech](https://hamxatech.com)