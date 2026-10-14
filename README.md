# 🎬 Dakshayani Kale — Cinematic Portfolio

A cinematic, professional personal portfolio website built with vanilla HTML, CSS, and JavaScript featuring GSAP animations, smooth scrolling, and a glassmorphism dark theme.

## 🚀 Quick Start

### Option 1: Just Open It
Simply double-click `index.html` in your browser — no build step needed!

### Option 2: Local Server (recommended for PDF preview)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Then open http://localhost:8000
```

## ✏️ How to Edit Your Content

**All your content lives in ONE file:** `js/data.js`

Open it in any text editor (VS Code, Notepad++, etc.) and update:
- `identity` → Your name, title, intro, photo
- `education` → Degrees, scores, highlights
- `skills` → Add/remove skills and their proof
- `projects` → Project details, links, journey storytelling
- `experience` → Internships and achievements
- `certifications` → Certificates and verification links
- `contact` → Emails, phone, social links

Save the file and refresh your browser — changes appear instantly!

## 📬 Setting Up the Contact Form (EmailJS)

The contact form uses **EmailJS** (free tier: 200 emails/month).

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. **Add an Email Service** → Connect your Gmail/Outlook → Note the **Service ID**
3. **Create an Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
4. Note the **Template ID**
5. Go to Account → **Public Key** and copy it
6. Open `js/data.js` and replace:
   ```js
   formServiceId: "[ADD_EMAILJS_SERVICE_ID]",    // → "service_abc123"
   formTemplateId: "[ADD_EMAILJS_TEMPLATE_ID]",  // → "template_xyz789"
   formPublicKey: "[ADD_EMAILJS_PUBLIC_KEY]"      // → "user_ABCdef123"
   ```

## 🌐 Deployment

### GitHub Pages (Free & Recommended)

1. Create a repo named `dakshayani-04.github.io` on GitHub
2. Push all files:
   ```bash
   git init
   git add .
   git commit -m "🎬 Launch cinematic portfolio"
   git branch -M main
   git remote add origin https://github.com/Dakshayani-04/dakshayani-04.github.io.git
   git push -u origin main
   ```
3. Go to repo **Settings → Pages → Source: Deploy from branch (main)**
4. Your site will be live at: `https://dakshayani-04.github.io`

### Custom Domain (Optional)

1. Buy a domain (e.g., `dakshayanikale.com`) from Namecheap/GoDaddy (~₹500-800/year)
2. In your DNS settings, add:
   - Type: `CNAME` | Name: `www` | Value: `dakshayani-04.github.io`
   - Type: `A` | Name: `@` | Value: `185.199.108.153`
   - Type: `A` | Name: `@` | Value: `185.199.109.153`
   - Type: `A` | Name: `@` | Value: `185.199.110.153`
   - Type: `A` | Name: `@` | Value: `185.199.111.153`
3. Create a file named `CNAME` in your repo root containing: `dakshayanikale.com`
4. In GitHub repo Settings → Pages → Custom domain → enter `dakshayanikale.com`

### Vercel (Alternative)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Import the repository
3. Deploy — it's instant!

## 🎥 Adding Project Demo Videos

1. Record a 30-60 second screen recording of each project:
   - **Windows**: Press `Win + G` → Game Bar → Record
   - **Or use** [Loom](https://loom.com) (free)
2. Save as `.mp4` and place in `assets/videos/`
3. In `data.js`, update the project's `videoPlaceholder: false` and add `video: "assets/videos/project-name.mp4"`

## 📁 Folder Structure

```
dakshayani-portfolio/
├── index.html              ← Main page
├── css/
│   └── style.css           ← All styling
├── js/
│   ├── data.js             ← ⭐ YOUR CONTENT (edit this!)
│   └── app.js              ← App logic & animations
├── assets/
│   ├── images/
│   │   ├── profile.jpg     ← Your photo
│   │   ├── favicon.svg     ← DK monogram icon
│   │   └── cert-*.png      ← Certificate images
│   └── videos/             ← Project demo videos
├── public/
│   └── resume.pdf          ← Your resume
└── README.md               ← This file
```

## 🎨 Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, glassmorphism, responsive grid
- **JavaScript** — Vanilla ES6+, no framework overhead
- **GSAP 3** + ScrollTrigger — Cinematic scroll animations
- **Lenis** — Butter-smooth scrolling
- **EmailJS** — Contact form (no backend needed)
- **Google Fonts** — Playfair Display + Inter + JetBrains Mono

## ⚠️ Placeholders to Fill In

| Placeholder | Location | What to add |
|---|---|---|
| `[ADD ECOVANA REPO LINK]` | `data.js` → projects[2].github | EcoVana GitHub repo URL |
| `[ADD VERIFICATION LINK]` × 4 | `data.js` → certifications | Cert verification URLs |
| `[ADD_EMAILJS_SERVICE_ID]` | `data.js` → contact | Your EmailJS service ID |
| `[ADD_EMAILJS_TEMPLATE_ID]` | `data.js` → contact | Your EmailJS template ID |
| `[ADD_EMAILJS_PUBLIC_KEY]` | `data.js` → contact | Your EmailJS public key |

---

**Designed & Built for Dakshayani Kale** 🎬✨
