# GitHub Repository Setup & Push Instructions

## Your GitHub Details
- **Username**: `astradevop`
- **Email**: `astra.devop@gmail.com`
- **GitHub Profile**: https://github.com/astradevop

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio-site` (or any name you prefer)
3. Description: "Personal Portfolio Website - AKASH S NAIR"
4. Choose **Public** (for free hosting)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
cd D:\Dev\sandbox\PERSONAL-PORTFOLIO\portfolio-site

# Add remote (replace YOUR_REPO_NAME with your repository name)
git remote add origin https://github.com/astradevop/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Alternative: Using SSH (if you have SSH keys set up)

```bash
git remote add origin git@github.com:astradevop/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Quick Commands Summary

```bash
# Check current status
git status

# Add all files
git add .

# Commit
git commit -m "Your commit message"

# Add remote (first time only)
git remote add origin https://github.com/astradevop/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## After Pushing

1. Your code will be at: `https://github.com/astradevop/YOUR_REPO_NAME`
2. You can then deploy to:
   - **Netlify**: https://www.netlify.com/
   - **Vercel**: https://vercel.com/
   - **GitHub Pages**: Repository Settings → Pages

## Need Help?

If you get authentication errors:
1. Use GitHub Personal Access Token (Settings → Developer settings → Personal access tokens)
2. Or use GitHub Desktop app for easier push
3. Or use SSH keys for authentication

---

**Repository URL Format**: `https://github.com/astradevop/REPOSITORY_NAME`


