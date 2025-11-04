# Portfolio Website - AKASH S NAIR

A responsive portfolio website built with React and Vite, showcasing professional experience, projects, and skills.

## Quick Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Python 3 (for local server)

### Installation

#### Linux/macOS

```bash
# Clone or navigate to the project directory
cd portfolio-site

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

#### Windows

```powershell
# Navigate to the project directory
cd portfolio-site

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Python Virtual Environment Setup

### Why use a virtual environment?
A virtual environment (venv) isolates Python dependencies for your project, preventing conflicts between different projects and keeping your system Python clean. This is especially useful when working with multiple projects that may require different versions of the same package.

### Setup (Linux/macOS)

```bash
# Create virtual environment
python3 -m venv .venv

# Activate virtual environment
source .venv/bin/activate

# Run the Python server to serve dist/ folder
python serve.py
```

### Setup (Windows - PowerShell)

```powershell
# Create virtual environment
python -m venv .venv

# Activate virtual environment
.venv\Scripts\Activate.ps1

# Run the Python server to serve dist/ folder
python serve.py
```

The server will start on `http://localhost:8000` and serve the built files from the `dist/` directory.

## Project Structure

```
portfolio-site/
├── public/          # Static assets (images, favicon)
├── src/
│   ├── components/  # React components
│   ├── styles/      # CSS files
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
├── dist/            # Production build output
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── vite.config.js   # Vite configuration
└── serve.py         # Python server for dist/ folder
```

## Editing Projects

To edit the projects displayed on the website:

1. Open `src/components/Projects.jsx`
2. Modify the `projects` array
3. Each project object should have:
   - `id`: Unique identifier
   - `title`: Project name
   - `description`: Brief description
   - `techStack`: Array of technologies used
   - `features`: Array of key features
   - `githubLink`: GitHub repository URL
   - `projectType`: Type of project (e.g., "Personal Project", "Internship Project")

To customize project card display, edit `src/components/ProjectCard.jsx`.

## Adding Images/Screenshots

1. Place image files in the `public/` directory
2. Reference them in your components using `/filename.png` (e.g., `<img src="/screenshot.png" alt="Project screenshot">`)
3. Vite will automatically handle these assets during build

## Deployment

### Netlify

1. Push your code to GitHub
2. Sign up/Login to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

The site will be automatically deployed and will rebuild on every push to your repository.

### Vercel

1. Push your code to GitHub
2. Sign up/Login to [Vercel](https://vercel.com/)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

The site will be automatically deployed and will rebuild on every push to your repository.

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist/` folder contents to the `gh-pages` branch, or use a GitHub Action
3. In your repository settings, go to Pages
4. Select the source branch (usually `gh-pages`)
5. Save and your site will be available at `https://yourusername.github.io/repository-name`

**Note:** For GitHub Pages, you may need to set a `base` path in `vite.config.js` if your repository name is not the root URL.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

MIT License - see LICENSE file for details

## Contact

- Email: akash.bmrskr@gmail.com
- Phone: +91 88480 80655
- LinkedIn: [linkedin.com/in/aakash-s-nair](https://linkedin.com/in/aakash-s-nair)
- GitHub: [github.com/astradevop](https://github.com/astradevop)

