# SKOG TOOLS Website

This is the static website for SKOG TOOLS, showcasing tire inflator accessories including Chuck Mates Platinum and Premium Series products.

## Quick Start - Local Preview

1. Download and unzip this folder
2. Open `index.html` in your web browser
3. Navigate through the site to preview all pages

## Deploying to GitHub Pages

### Step 1: Create a New Repository

1. Log into GitHub (username: procuretrading)
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `skogtools.github.io` (or your preferred name)
4. Make it **Public**
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A - Using GitHub Web Interface (Easiest):**
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL files and folders from this website folder
3. Make sure to include:
   - index.html
   - All other .html files
   - The `css` folder
   - The `images` folder
   - sitemap.xml
4. Commit message: "Initial website upload"
5. Click "Commit changes"

**Option B - Using Git Command Line:**
```bash
cd /path/to/skog-tools-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/procuretrading/REPO-NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and folder "/ (root)"
6. Click "Save"
7. Wait 2-3 minutes for deployment

Your site will be live at: `https://procuretrading.github.io/REPO-NAME/`

### Step 4: Connect Your Namecheap Domain

1. Go to Namecheap → Domain List → Manage your domain
2. Click "Advanced DNS" tab
3. Add these DNS records:

**For apex domain (skogtools.com):**
- Type: A Record, Host: @, Value: 185.199.108.153
- Type: A Record, Host: @, Value: 185.199.109.153
- Type: A Record, Host: @, Value: 185.199.110.153
- Type: A Record, Host: @, Value: 185.199.111.153

**For www subdomain:**
- Type: CNAME Record, Host: www, Value: procuretrading.github.io

4. Back in GitHub repository settings → Pages
5. Under "Custom domain", enter: `skogtools.com` (or your domain)
6. Click "Save"
7. Check "Enforce HTTPS" (after DNS propagates, ~24 hours)

## Website Structure

```
skog-tools-website/
├── index.html              # Homepage
├── platinum-series.html    # Platinum Series products
├── premium-series.html     # Premium Series products
├── adapters.html          # SKOG Adapters
├── about.html             # About/Brand Story
├── sitemap.xml            # SEO sitemap
├── css/
│   └── styles.css         # All styling
└── images/
    └── skog-logo.png      # Company logo
```

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized with schema markup
- ✅ Amazon Attribution links integrated
- ✅ Fast loading (minimal dependencies)
- ✅ Professional design matching brand
- ✅ Sitemap for search engines

## Product Attribution Links

All "Buy on Amazon" buttons use your Amazon Attribution links from the spreadsheet:
- Platinum 1-Pack: B0F9B1ZKJP
- Platinum 2-Pack: B0F9B28GMN
- Reach360: B0F99YM7V3
- Premium 1-Pack: B0CYDXGGH2
- Premium 2-Pack: B0DC4PWX4H
- Premium NPT 1-Pack: B0F2JNH29G
- Premium NPT 2-Pack: B0F2JQ15B3
- Adapter 1-Pack: B0FBKJ5XRC
- Adapter 2-Pack: B0FBKFV3J5
- Storefront: General link

## Customization

To update content:
1. Edit the respective .html file in a text editor
2. Re-upload to GitHub (or commit changes via Git)
3. Changes appear live in 1-2 minutes

To update styling:
1. Edit `css/styles.css`
2. Upload to GitHub

## Support

If you need help:
1. Check GitHub Pages documentation: https://docs.github.com/en/pages
2. Namecheap DNS guide: https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages

## Next Steps (Optional Enhancements)

- Add Google Analytics tracking code
- Set up Google Search Console
- Add more product images
- Create individual detailed product pages
- Add a contact form
- Add customer testimonials

---
Built with ❤️ for SKOG TOOLS
