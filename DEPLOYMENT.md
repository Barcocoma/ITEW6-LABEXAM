# Deployment Guide - Vercel

## Step-by-Step Deployment Instructions

### Method 1: Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Sign Up" or "Log In"
   - Sign in with your GitHub account

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Find and select: `Barcocoma/ITEW6-LABEXAM`
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `.` (leave as default)
   - **Build Command**: `npm run build` (should be auto-filled)
   - **Output Directory**: `dist` (should be auto-filled)
   - **Install Command**: `npm install` (should be auto-filled)

4. **Deploy**
   - Click "Deploy" button
   - Wait for build to complete (2-3 minutes)

5. **Get Your Link**
   - After deployment, you'll see: `https://itew6-labexam.vercel.app` (or similar)
   - This is the link you can share with your professor!

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```powershell
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```powershell
   vercel login
   ```

3. **Deploy**
   ```powershell
   vercel
   ```
   - Follow the prompts
   - Choose default settings
   - Your app will be deployed!

4. **Get Production Link**
   ```powershell
   vercel --prod
   ```

## After Deployment

- Your app will be live at: `https://[your-project-name].vercel.app`
- Share this link with your professor
- Every time you push to GitHub, Vercel will auto-deploy

## Troubleshooting

If deployment fails:
1. Check build logs in Vercel dashboard
2. Verify settings match the configuration above
3. Make sure all files are pushed to GitHub

