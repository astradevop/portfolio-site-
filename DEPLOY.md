# Deployment Guide - Portfolio Site

## Quick Deployment Options (All FREE)

### 🚀 Option 1: Netlify (Easiest - 5 minutes)

**Already configured!** Your `netlify.toml` is ready.

**Steps:**
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to https://www.netlify.com/ and sign up with GitHub

3. Click **"New site from Git"**

4. Select your GitHub repository

5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click **"Deploy site"**

7. **Done!** Your site will be live at `https://your-site-name.netlify.app`

**Custom Domain:** Add your domain in Site settings → Domain management

---

### ⚡ Option 2: Vercel (Also Easy - 5 minutes)

**Already configured!** Your `vercel.json` is ready.

**Steps:**
1. Push your code to GitHub (same as above)

2. Go to https://vercel.com/ and sign up with GitHub

3. Click **"New Project"**

4. Import your GitHub repository

5. Vercel auto-detects everything, just click **"Deploy"**

6. **Done!** Your site will be live at `https://your-site-name.vercel.app`

**Custom Domain:** Add your domain in Project settings → Domains

---

### 📦 Option 3: GitHub Pages (Free, but requires setup)

**Steps:**
1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. Update `vite.config.js` to add base path:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/YOUR_REPO_NAME/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Go to repository Settings → Pages → Select `gh-pages` branch

6. **Done!** Your site will be at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Comparison

| Platform | Setup Time | Free Tier | Custom Domain | Auto Deploy |
|----------|------------|-----------|---------------|-------------|
| **Netlify** | ⭐⭐⭐⭐⭐ 5 min | ✅ Yes | ✅ Yes | ✅ Yes |
| **Vercel** | ⭐⭐⭐⭐⭐ 5 min | ✅ Yes | ✅ Yes | ✅ Yes |
| **GitHub Pages** | ⭐⭐⭐ 10 min | ✅ Yes | ✅ Yes | ⚠️ Manual |
| **Cloudflare Pages** | ⭐⭐⭐⭐ 7 min | ✅ Yes | ✅ Yes | ✅ Yes |
| **Render** | ⭐⭐⭐⭐ 7 min | ✅ Yes | ✅ Yes | ✅ Yes |

---

## Recommended: Netlify or Vercel

Both are excellent choices:
- **Netlify**: Best for static sites, excellent free tier
- **Vercel**: Great for React/Vite apps, excellent performance

**My Recommendation:** Start with **Netlify** - it's the easiest and your config is already set up!

---

## After Deployment

1. **Share your link** - Add it to your resume, LinkedIn, GitHub profile
2. **Custom domain** - Add your own domain (e.g., `akashsnair.dev`)
3. **Analytics** - Add Google Analytics or Netlify Analytics
4. **SSL** - Automatic HTTPS (free on all platforms)

---

## Need Help?

- **Netlify Docs**: https://docs.netlify.com/
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Pages Docs**: https://docs.github.com/en/pages

---

## Quick Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages (after setup)
npm run deploy
```

