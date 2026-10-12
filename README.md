# KAFF Solutions — Website

Marketing website for **KAFF Solutions** (kaffsolutions.in), an IT services and consulting company.

Built with React 18, React Router and Vite. Styling is plain CSS (`src/index.css`).

## Pages

- `/` Home: hero, services overview, why us, process, industries
- `/about` About: company, mission, vision and values
- `/services` Services: detailed description of each service
- `/expertise` Expertise: technology stack and industries
- `/contact` Contact: enquiry form (submits to Firebase Realtime Database)

## Editing content

Company details (email, phone, address), services, values, process steps, industries and tech stack
all live in `src/data/site.js`.

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build in dist/
npm run lint
```

When deploying, configure the host to serve `index.html` for all routes (SPA fallback).
