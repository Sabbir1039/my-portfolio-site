# Portfolio Site

A modern, clean, and responsive portfolio website built with React and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 🌓 Light/Dark theme support
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎯 Type-safe with PropTypes
- 🔒 Environment variable support for API keys
- 📧 Contact form with Web3Forms integration
- 🎭 Smooth animations and transitions

## Tech Stack

- **Frontend:** React 18, Tailwind CSS
- **Build Tool:** Vite
- **Icons:** React Icons
- **Forms:** Web3Forms API
- **Notifications:** React Toastify

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── hero/            # Hero section
│   ├── projects/        # Projects section
│   ├── skills/          # Skills section
│   ├── contact/         # Contact section
│   ├── footer/          # Footer section
│   └── navbar/          # Navigation bar
├── constants/           # App constants
├── contexts/            # React contexts
├── data/                # Data files
├── hooks/               # Custom hooks
└── utils/               # Utility functions
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (use `.env.example` as template):
   ```bash
   cp .env.example .env
   ```

4. Add your Web3Forms API key to `.env`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

- `VITE_WEB3FORMS_ACCESS_KEY`: Your Web3Forms access key for the contact form

Get your free API key at [web3forms.com](https://web3forms.com/)

## Code Quality

This project follows modern React best practices:
- Functional components with hooks
- PropTypes for type checking
- Modular and reusable components
- Clean code architecture
- Proper separation of concerns

## License

MIT License - feel free to use this portfolio as a template for your own!
