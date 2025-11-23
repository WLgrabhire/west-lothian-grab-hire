# GitHub Pages Deployment Guide

## ✅ What's Been Set Up

Your West Lothian Grab Hire website is now configured for GitHub Pages hosting! Here's what has been done:

1. **Website Files Deployed**: Your complete website (`index.html` and all assets) is now in the repository root
2. **GitHub Actions Workflow**: Automated deployment configured in `.github/workflows/deploy.yml`
3. **CNAME Configuration**: Domain `www.wlgrabhire.com` is configured in the CNAME file
4. **Static Site Optimization**: `.nojekyll` file added for proper static file serving

## 🚀 Next Steps to Complete Deployment

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/WLgrabhire/west-lothian-grab-hire
2. Click **Settings** (top navigation bar)
3. Click **Pages** (left sidebar under "Code and automation")
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. The workflow will automatically deploy your site

### Step 2: Verify the Deployment

1. After merging this PR, the GitHub Actions workflow will run automatically
2. Go to the **Actions** tab in your repository to see the deployment progress
3. Once complete, your site will be available at a temporary URL like:
   - `https://wlgrabhire.github.io/west-lothian-grab-hire`

### Step 3: Configure DNS for Custom Domain

To point `www.wlgrabhire.com` to your GitHub Pages site, you need to configure DNS records with your domain registrar (where you purchased wlgrabhire.com):

#### Option A: CNAME Record (Recommended)
Add the following DNS record:
- **Type**: CNAME
- **Name**: www
- **Value**: `wlgrabhire.github.io`
- **TTL**: 3600 (or default)

#### Option B: APEX Domain with A Records (Alternative)
If you want the root domain to work, add these A records:
- **Type**: A
- **Name**: @ (or leave blank)
- **Values** (add all 4):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

### Step 4: Enable HTTPS

1. Once DNS is configured and propagated (24-48 hours), return to **Settings > Pages**
2. Check the box **Enforce HTTPS** for secure connections
3. Your site will be accessible at `https://www.wlgrabhire.com`

## 📝 Important Notes

### DNS Propagation Time
- DNS changes typically take 24-48 hours to fully propagate worldwide
- You can check DNS propagation status at: https://dnschecker.org

### Testing Before DNS
- You can immediately test your site at `https://wlgrabhire.github.io/west-lothian-grab-hire`
- This temporary URL will work while DNS is being configured

### Automatic Deployments
- Any future commits to the `main` branch will automatically trigger a new deployment
- You can also manually trigger deployment from the **Actions** tab

## 🔧 Troubleshooting

### Issue: Workflow Doesn't Run
- **Solution**: Make sure GitHub Pages source is set to "GitHub Actions" in Settings > Pages
- Check that the repository has Actions enabled

### Issue: Custom Domain Not Working
- **Solution**: Wait 24-48 hours for DNS propagation
- Verify DNS records are correct using `dig www.wlgrabhire.com` or online DNS checkers
- Make sure the CNAME file contains exactly: `www.wlgrabhire.com`

### Issue: 404 Page Not Found
- **Solution**: Ensure `index.html` is in the repository root (not in a subdirectory)
- Check that the deployment workflow completed successfully in the Actions tab

### Issue: Images Not Loading
- **Solution**: All image files are now in the root directory
- Clear browser cache and try again
- Check browser console (F12) for any 404 errors

## 📂 Repository Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated deployment workflow
├── index.html                  # Main website file
├── CNAME                       # Custom domain configuration
├── .nojekyll                   # Disable Jekyll processing
├── *.png                       # Logo files
├── *.jpg                       # Image files
├── cover/                      # Additional images (optional)
└── github-pages-ready/         # Original source files (reference only)
```

## 🎯 Expected Result

Once everything is set up:
- ✅ Website accessible at `https://www.wlgrabhire.com`
- ✅ Secure HTTPS connection
- ✅ Automatic deployments on every commit
- ✅ Professional website with all features:
  - 5 pages: Home, Services, About, Customer Portal, Contact
  - "Skip The Hassle, We'll Grab It" tagline
  - 15 years of experience highlighted
  - SEPA Carriers Licence: WCR/R/3021724
  - Company Number: SC862731
  - Contact form integrated with sales@wlgrabhire.com
  - Mobile-responsive design

## 📞 Support

If you need help with:
- **GitHub Settings**: Check GitHub's documentation at https://docs.github.com/en/pages
- **DNS Configuration**: Contact your domain registrar's support
- **Website Issues**: Check the Actions tab for deployment logs

---

**Status**: Repository configured ✅  
**Next Action Required**: Enable GitHub Actions as the Pages source in Settings > Pages
