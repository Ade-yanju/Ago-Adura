# CAC AGO ADURA NLA TI GBOGBO ENIYAN
## World-Class Church Website — Next.js 14

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Extract the project folder
# 2. Open terminal in the project directory
cd cac-ago-adura

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser at
http://localhost:3000
```

### Build for Production

```bash
npm run build
# Static files output to /out folder
# Deploy the /out folder to any static host:
# Netlify, Vercel, GitHub Pages, cPanel, etc.
```

---

## 📁 Project Structure

```
cac-ago-adura/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + fonts + metadata
│   │   ├── page.tsx            # Main page (all sections assembled)
│   │   └── globals.css         # Global styles + Tailwind
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky responsive navbar + mobile drawer
│   │   │   └── Footer.tsx      # Full footer with links, social, hours
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Cinematic 3-slide hero with scripture
│   │   │   ├── About.tsx       # Church story + stats
│   │   │   ├── Services.tsx    # Full weekly schedule (8 services)
│   │   │   ├── Beliefs.tsx     # 8 core doctrinal beliefs
│   │   │   ├── PowerStructure.tsx  # Org chart + leadership cards
│   │   │   ├── Ministries.tsx  # 9 ministry cards (interactive)
│   │   │   ├── Calendar.tsx    # Church calendar with filter + event modal
│   │   │   ├── Locator.tsx     # "AGO Near You" — 5 branches on interactive map
│   │   │   ├── Media.tsx       # Live stream + sermon archive + podcast
│   │   │   ├── Testimonials.tsx # Auto-rotating testimonial carousel
│   │   │   ├── PrayerRequest.tsx # Prayer wall with category selection
│   │   │   ├── Give.tsx        # Giving types + 3 bank accounts (copy button)
│   │   │   └── Contact.tsx     # Contact form + details + social links
│   │   └── ui/
│   │       ├── SectionHeader.tsx   # Reusable section heading component
│   │       ├── BranchMap.tsx       # Leaflet.js interactive map (client-side)
│   │       └── Floaters.tsx        # Announcement bar + WhatsApp float button
│   └── data/
│       └── church.ts           # ★ ALL church data — update this file!
├── public/                     # Static assets (add photos here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## ✏️ Customization

### Update Church Information
Edit **`src/data/church.ts`** to update:
- Church name, address, phone, email
- Social media links
- Service times
- Branch assemblies (add/remove branches with coordinates)
- Calendar events
- Leadership names and details
- Ministry details

### Add Real Photos
Place photos in `/public/` folder:
- `/public/leaders/pastor.jpg` — Senior Pastor photo
- `/public/gallery/` — Church photos for gallery
- `/public/og-image.jpg` — Social media preview image

### Update Bank Account Numbers
In `src/components/sections/Give.tsx`, find the `ACCOUNTS` array and update the account numbers.

### Add YouTube Live Stream
In `src/components/sections/Media.tsx`, replace the placeholder with your actual YouTube embed:
```jsx
<iframe
  src="https://www.youtube.com/embed/LIVE_STREAM_ID"
  allowFullScreen
  className="w-full h-full"
/>
```

### Update Contact Form
Connect the form to a backend service:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` to the form
- **EmailJS**: Install `@emailjs/browser` and call `emailjs.send()`
- **Resend / SendGrid**: Build an API route in `/src/app/api/contact/route.ts`

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `gold-500` | `#F5C518` | Primary accent, CTAs |
| `navy-800` | `#071A47` | Primary dark background |
| `navy-900` | `#020D2A` | Deepest backgrounds |
| Font Display | Cormorant Garamond | Headings, titles |
| Font Body | Outfit | Body text, UI |

---

## 📱 Sections Included

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | 3-slide cinematic hero with auto-rotate + scripture |
| 2 | **About** | Church story, vision, animated stats |
| 3 | **Services** | Full weekly schedule (8 services) with time/day |
| 4 | **Beliefs** | 8 CAC core doctrines with scriptures |
| 5 | **Power Structure** | Org chart + 4 leadership cards |
| 6 | **Ministries** | 9 interactive ministry cards |
| 7 | **Church Calendar** | Events with filter, date blocks, modal detail |
| 8 | **AGO Near You** | Branch locator — interactive Leaflet map + list |
| 9 | **Media** | Live stream placeholder + sermon archive + podcast |
| 10 | **Testimonials** | Auto-carousel with 5 testimonies |
| 11 | **Prayer Request** | Prayer wall with categories + anonymous option |
| 12 | **Give** | 6 giving types + 3 bank accounts with copy button |
| 13 | **Contact** | Full contact form + social links + map |
| 14 | **Footer** | Links, service times, social icons |
| + | **Announcement Bar** | Dismissable top banner |
| + | **WhatsApp Float** | Fixed WhatsApp chat button |

---

## 🌐 Deployment

### Vercel (Recommended — Free)
1. Push to GitHub
2. Connect to [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag & drop the `/out` folder to [netlify.com/drop](https://netlify.com/drop)

### cPanel / Traditional Hosting
1. Run `npm run build`
2. Upload contents of `/out` folder via FTP

---

## 📞 Support

For technical support with this website, contact your web developer or reach out via the church contact form.

**Built for the Kingdom of God · 2026**
