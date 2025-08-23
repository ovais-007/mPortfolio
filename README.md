# Mohammad Ovais's Portfolio - macOS Desktop Experience

A stunning portfolio website that recreates the macOS desktop experience with Tailwind CSS and Next.js.

## 🌟 Features

- **Authentic macOS Desktop**: Pixel-perfect recreation of macOS Big Sur/Monterey interface
- **Drag & Drop Functionality**: All desktop icons are draggable and maintain their positions
- **Interactive Dock**: Hover effects and click interactions on all dock applications
- **Live Menu Bar**: Real-time clock and authentic macOS menu bar elements
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Project Showcases**: Individual folders for different software engineering projects
- **Modal Windows**: macOS-style windows for project details

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and macOS theming
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main desktop interface
├── components/
│   ├── DesktopIcon.tsx      # Draggable desktop items
│   ├── Dock.tsx             # Bottom dock with applications
│   └── MenuBar.tsx          # Top menu bar with live clock
├── lib/
│   └── useDraggable.ts      # Custom hook for drag functionality
└── public/
    ├── images/              # Desktop backgrounds and icons
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ovais007/portfolio-mac.git
   cd portfolio-mac
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`




## 🎨 Styling Architecture

### Tailwind Configuration
- Custom color palette matching macOS
- Backdrop blur utilities for glass morphism
- Custom shadows and border radius
- Responsive breakpoints

### CSS Custom Properties
- macOS-specific styling variables
- Dynamic scaling for different screen sizes
- Animation timing and easing functions

## 🔗 External Integrations

- **Google Fonts**: Instrument Serif typography
- **Google Drive**: Resume PDF hosting
- **Email**: Direct contact integration
- **Image Optimization**: Next.js Image component for performance

## 🚀 Performance Optimizations

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Automatic WebP conversion and sizing
- **Font Loading**: Optimized Google Fonts integration
- **Code Splitting**: Automatic JavaScript bundling optimization


## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

- **Email**: [mohammadovais789@gmail.com](mailto:mohammadovais789@gmail.com)
- **GitHub**: [github.com/ovais007](https://github.com/ovais007)

## 📜 License

This project is for portfolio purposes. All macOS design elements are property of Apple Inc.

---

Built with ❤️ by Mohammad Ovais using Next.js and Tailwind CSS
