# Public Assets Directory

This directory contains static assets that will be served directly by the web server.

## What to Put Here

### Images
- Project screenshots
- Profile pictures
- Favicon and app icons
- Any other images used in the portfolio

### How to Use

1. Place your image files in this directory (e.g., `screenshot.png`, `profile.jpg`)
2. Reference them in your components using absolute paths starting with `/`:
   ```jsx
   <img src="/screenshot.png" alt="Project screenshot" />
   ```
3. Vite will automatically copy these files to the `dist/` folder during build

### Favicon

To add a custom favicon:
1. Place your favicon file in this directory (e.g., `favicon.ico` or `favicon.png`)
2. Update the `<link>` tag in `index.html`:
   ```html
   <link rel="icon" type="image/png" href="/favicon.png" />
   ```

### Example Structure

```
public/
├── favicon.ico
├── profile.jpg
├── project-screenshot-1.png
├── project-screenshot-2.png
└── README.md (this file)
```

