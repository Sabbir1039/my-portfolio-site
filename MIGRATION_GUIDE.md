## Installation Instructions

After pulling these changes, run the following command to install the new dependency:

```bash
npm install prop-types
```

This package is required for runtime type-checking of React props in the new UI components.

## Environment Setup

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Web3Forms API key to the `.env` file:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

## What's Changed

### New Structure
- ✨ Created reusable UI components (Button, Card, Badge, Input, Textarea, Section)
- 📁 Added constants file for better code organization
- 🛠️ Added utility functions for class names and validation
- 🎣 Created custom hooks for scroll handling
- 🔒 Improved security with environment variables

### Refactored Components
- 🎨 Hero - Cleaner code with constants
- 📦 Projects - Modularized with ProjectCard component
- 💼 Skills - Simplified with SkillCard component
- 📧 Contact - Better form handling with validation
- 🔗 Footer - Improved structure and links
- 🧭 Navbar - Cleaner code with better organization

### Code Quality Improvements
- ✅ PropTypes validation for all components
- 🎯 Better TypeScript-like type safety
- 📝 JSDoc comments for documentation
- 🔄 Consistent code formatting
- ♻️ DRY principles applied throughout

### Design Improvements
- 🎨 More consistent styling
- ✨ Better hover effects and transitions
- 📱 Improved responsive design
- 🌓 Better dark mode support
- 🎯 Modern UI patterns

## Running the Project

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```
