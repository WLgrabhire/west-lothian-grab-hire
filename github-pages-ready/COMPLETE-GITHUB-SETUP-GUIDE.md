# Complete GitHub Pages Setup Guide for West Lothian Grab Hire Ltd

## 🎯 **Goal: Get Your Website Live at www.wlgrabhire.com**

This guide will help you deploy your professional West Lothian Grab Hire website to GitHub Pages with your custom domain. The entire process takes about 15 minutes and is completely free.

---

## 📋 **What You Need:**
- ✅ Your website files (all ready in this folder)
- ✅ A GitHub account (free to create)
- ✅ Access to your domain registrar where you bought wlgrabhire.com

---

## 🚀 **Step 1: Create GitHub Account & Repository**

### 1.1 Create GitHub Account
1. Go to **github.com**
2. Click **"Sign up"**
3. Choose username (e.g., "wlgrabhire" or your name)
4. Use your business email: **sales@wlgrabhire.com**
5. Verify your account via email

### 1.2 Create New Repository
1. Click the **"+"** icon in top-right corner
2. Select **"New repository"**
3. **Repository name:** `wlgrabhire-website`
4. Make it **Public** (required for free GitHub Pages)
5. Check **"Add a README file"**
6. Click **"Create repository"**

---

## 📁 **Step 2: Upload Your Website Files**

### 2.1 Upload Files to GitHub
1. In your new repository, click **"uploading an existing file"**
2. **Drag and drop ALL files** from this folder:
   - `index.html`
   - `WLGH_Logo_stacked_left_4000x2250.png`
   - `WLGH_Logo_inverted_orange_4000x2250 (1).png`
   - `Business Logo (WL Grab Hire Ltd) copy.jpg`
   - `Business Logo (WL Grab Hire Ltd) copy (1).jpg`
   - `download.jpg`

### 2.2 Commit Files
1. Scroll down to **"Commit changes"**
2. **Commit message:** "Add West Lothian Grab Hire website"
3. Click **"Commit changes"**

---

## 🌐 **Step 3: Enable GitHub Pages**

### 3.1 Access Pages Settings
1. In your repository, click **"Settings"** tab
2. Scroll down to **"Pages"** in left sidebar
3. Click **"Pages"**

### 3.2 Configure Pages
1. **Source:** Select **"Deploy from a branch"**
2. **Branch:** Select **"main"**
3. **Folder:** Select **"/ (root)"**
4. Click **"Save"**

### 3.3 Get Your GitHub Pages URL
- GitHub will show: **"Your site is published at https://yourusername.github.io/wlgrabhire-website"**
- **Test this URL** - your website should be live!

---

## 🔗 **Step 4: Connect Your Custom Domain**

### 4.1 Add Custom Domain in GitHub
1. Still in **Settings > Pages**
2. **Custom domain:** Enter `www.wlgrabhire.com`
3. Click **"Save"**
4. **Check "Enforce HTTPS"** (for security)

### 4.2 Configure DNS at Your Domain Registrar
**You need to update DNS where you bought wlgrabhire.com:**

**Option A: CNAME Record (Recommended)**
- **Type:** CNAME
- **Name:** www
- **Value:** `yourusername.github.io`

**Option B: A Records (Alternative)**
- **Type:** A
- **Name:** @
- **Value:** `185.199.108.153`
- Add 3 more A records with values:
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

### 4.3 DNS Propagation
- DNS changes take **24-48 hours** to fully propagate
- Your website will be live at **www.wlgrabhire.com** once complete

---

## ✅ **Step 5: Verify Everything Works**

### 5.1 Test Your Website
1. Visit **www.wlgrabhire.com** (may take up to 48 hours)
2. Test all navigation: Home, Services, About, Customer Portal, Contact
3. Test the **"Get Free Quote"** button
4. Verify contact form opens email to **sales@wlgrabhire.com**

### 5.2 Check Mobile Version
- Test on your phone/tablet
- All pages should be mobile-friendly

---

## 🛠️ **Common Issues & Solutions**

### Issue: "404 Page Not Found"
- **Solution:** Make sure `index.html` is in the root directory
- **Check:** Repository settings > Pages shows correct branch

### Issue: Custom Domain Not Working
- **Solution:** Wait 24-48 hours for DNS propagation
- **Check:** DNS settings at your domain registrar are correct

### Issue: Images Not Loading
- **Solution:** Make sure all image files are uploaded to GitHub
- **Check:** Image filenames match exactly (case-sensitive)

### Issue: Contact Form Not Working
- **Solution:** This is normal - mailto forms open email client
- **Alternative:** Consider adding a form service like Formspree

---

## 📞 **Your Website Features**

✅ **Professional Design** with orange branding
✅ **5 Complete Pages:** Home, Services, About, Customer Portal, Contact
✅ **Mobile Responsive** - works on all devices
✅ **SEO Optimized** - search engine friendly
✅ **Contact Form** - sends to sales@wlgrabhire.com
✅ **Company Information:**
- "Skip The Hassle, We'll Grab It" tagline
- 15 years of experience
- SEPA Carriers Licence: WCR/R/3021724
- Company Number: SC862731

---

## 🔄 **Future Updates**

**To update your website:**
1. Edit files locally or in GitHub
2. Upload new `index.html` to replace the old one
3. Changes appear live within minutes

**Need help?** GitHub has excellent documentation and community support.

---

## 🎉 **Congratulations!**

Once complete, your professional website will be live at:
**www.wlgrabhire.com**

Your customers can find you online, request quotes, and learn about your 15 years of grab hire expertise!

---

**Created by MGX AI Assistant**
*Professional website development made simple*