# Drew Wan Portfolio Website

Modern portfolio website built with React, Tailwind CSS, and Vite.

## Features

- **Home Page**: Hero section with introduction and featured projects
- **About Page**: Personal bio, profile photo, resume download, and social links
- **Projects**: Blog-style project pages with YouTube embeds
  - NAS Build project with video walkthrough
- **Photography**: Filterable gallery with Portraits and Seattle collections
- **Hobbies**: Sections for rock climbing and snowboarding

## Tech Stack

- React 18
- Tailwind CSS 3
- React Router v6
- Vite

## Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Visit `http://localhost:5173/`

## Build for Production

Build the project:
```bash
npm run build
```

The build output will be in the `dist/` folder.

## Deployment to Hostinger

1. Build the project: `npm run build`
2. Upload the contents of the `dist/` folder to your Hostinger public_html directory via FTP/SFTP
3. The `.htaccess` file is already included to handle React Router client-side routing
4. Your site will be live at Drewwan.com

## Project Structure

```
src/
├── components/
│   ├── layout/         # Header, Footer, Layout
│   └── common/         # Reusable components
├── pages/              # Page components
├── data/               # Project data
└── index.css           # Global styles

public/
└── assets/             # Images, logos, resume
```

## Adding New Projects

Edit `src/data/projects.js` to add new projects with the following structure:

```javascript
{
  id: 2,
  slug: 'project-slug',
  title: 'Project Title',
  excerpt: 'Short description',
  thumbnail: '/assets/Projects/folder/image.png',
  youtubeId: 'video_id', // optional
  date: 'Month Year',
  category: 'Category',
  techStack: ['Tech1', 'Tech2'],
  description: `HTML content here`
}
```

