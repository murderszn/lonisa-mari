# Lonisa Mari - Bento Box Profile & Link Tree

A modern, interactive profile page designed as a bento box style link tree showcasing Lonisa Mari's services as an artist, entertainer, and content creator. Built with React and Vite.

## Features

- **Bento Box Layout**: Modern grid-based design with varying card sizes
- **Interactive Cards**: Smooth hover animations and visual feedback
- **Responsive Design**: Mobile-first approach that adapts to all screens
- **Vibrant Colors**: Orange and yellow gradients for energy and warmth
- **Social Links**: Quick access to YouTube, Instagram, TikTok, and Twitter
- **Service Showcase**: 8 interactive cards for different offerings
- **Modern React**: Built with React 18 and Vite for optimal performance
- **Accessibility**: Screen reader friendly with proper semantic HTML

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS Modules** - Scoped styling for each component
- **ESLint** - Code linting for quality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lonisa-mari
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Deployment

This React app can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Traditional hosting**: Upload the `dist` contents to your web server

## Project Structure

```
src/
├── components/
│   ├── ProfileHeader.jsx    # Profile photo, name, bio
│   ├── SocialLinks.jsx      # Social media buttons
│   ├── BentoGrid.jsx        # Main bento box grid layout
│   └── Footer.jsx           # Site footer
├── App.jsx                  # Main app component
├── App.css                  # Global styles and animations
└── main.jsx                 # App entry point
```

## Services Showcased

1. **Shop Art & Journals** (Large Card) - Christian-themed illustrations and products
2. **YouTube Channel** (Medium Card) - Comedy, faith, and creative content
3. **Comedy Shows** (Medium Card) - Live performances and entertainment
4. **Commission Work** (Small Card) - Custom illustrations and designs
5. **Speaking Events** (Small Card) - Workshops and presentations
6. **Blog** (Small Card) - Stories, faith, and inspiration
7. **Contact Me** (Medium Card) - Collaboration inquiries
8. **Portfolio** (Small Card) - Work showcase

## Customization

### Adding/Editing Services
Edit the `services` array in `src/components/BentoGrid.jsx`:
```javascript
{
  id: 9,
  title: "New Service",
  description: "Your description",
  icon: "🎯", // Emoji icon
  link: "#your-link",
  size: "medium", // large, medium, or small
  color: "orange" // orange or yellow
}
```

### Updating Profile
Edit `src/components/ProfileHeader.jsx`:
- Change name, tagline, and bio
- Update avatar (replace placeholder with image)

### Modifying Colors
Update CSS variables in `src/index.css`:
```css
--color-orange: rgb(255, 100, 55);
--color-yellow: rgb(255, 215, 97);
```

### Connecting Social Links
Edit `src/components/SocialLinks.jsx` to add your actual social media URLs.

## Design Philosophy

This bento box style link tree combines:
- **Modern aesthetics** with gradient colors and smooth animations
- **Clear hierarchy** through card sizing (large = most important)
- **Easy navigation** with visual feedback on every interaction
- **Mobile-first** approach for optimal viewing on all devices
- **Brand consistency** using Lonisa Mari's signature orange and yellow palette

For detailed design documentation, see `BENTO-DESIGN.md`.
