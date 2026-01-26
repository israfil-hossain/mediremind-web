# MediRemind Landing Page

A modern, SEO-optimized landing page for MediRemind - Your Smart Medicine Reminder App.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **SEO Optimized** with comprehensive meta tags, Open Graph, and Twitter Cards
- **Structured Data** (JSON-LD) for better search engine visibility
- **Responsive Design** - Mobile-first approach
- **Sitemap & Robots.txt** automatically generated
- **Play Store Integration** ready

## 📄 Pages Included

1. **Home** (`/`) - Landing page with Play Store integration
2. **About** (`/about`) - Company information and mission
3. **Privacy Policy** (`/privacy-policy`) - Comprehensive privacy policy
4. **Terms of Service** (`/terms-of-service`) - Legal terms and conditions
5. **Help & Support** (`/help-support`) - FAQ and contact form

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

```bash
# Navigate to the project directory
cd mediremind

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
# Create an optimized production build
npm run build
# or
yarn build
# or
pnpm build

# Start the production server
npm start
# or
yarn start
# or
pnpm start
```

## 🎨 Customization

### Update Domain

The current domain is set to `mediremind.flowentech.com`. To change it:

1. Update `metadataBase` in `/app/layout.tsx`
2. Update URLs in `/app/sitemap.ts`
3. Update sitemap URL in `/app/robots.ts`
4. Update canonical links in `/app/layout.tsx`

### Update Play Store Link

Replace the placeholder Play Store link in:
- `/app/page.tsx` - Hero section and CTA section

### Add Your Google Verification Code

Update in `/app/layout.tsx`:
```typescript
verification: {
  google: "your-google-verification-code",
  yandex: "your-yandex-verification-code",
},
```

## 📊 SEO Features

### Meta Tags
- Comprehensive title and description
- Keywords optimization
- Author and creator tags
- Format detection control

### Open Graph
- Optimized for social media sharing
- Custom OG images (add `/public/og-image.png`)
- Proper type and locale settings

### Twitter Cards
- Large image card format
- Custom Twitter images
- Creator attribution

### Structured Data (Schema.org)
- MobileApplication schema
- Organization schema
- Aggregate ratings
- Contact information

### Sitemap & Robots
- Automatic sitemap generation at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Proper crawling instructions

## 📱 Components

### Navigation
- Responsive mobile menu
- Sticky header
- Active link highlighting

### Footer
- Quick links
- Legal links
- Social media icons
- Copyright information

### Structured Data
- JSON-LD schema markup
- Search engine optimization

## 🎯 SEO Best Practices Implemented

✅ Semantic HTML structure
✅ Proper heading hierarchy (H1, H2, H3)
✅ Alt text for images (ready to add)
✅ Internal linking structure
✅ Mobile-responsive design
✅ Fast page load times
✅ Clean URLs
✅ Meta descriptions for all pages
✅ Canonical URLs
✅ Social media meta tags
✅ Structured data markup
✅ XML sitemap
✅ Robots.txt configuration

## 📦 Project Structure

```
mediremind/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── help-support/
│   │   └── page.tsx
│   ├── privacy-policy/
│   │   └── page.tsx
│   ├── terms-of-service/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── StructuredData.tsx
├── public/
│   └── (add your images here)
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Vercel
- Netlify
- AWS Amplify
- Google Cloud Run
- Any Node.js hosting

## 📝 Environment Variables

No environment variables are required for basic functionality.

## 🔧 Additional Improvements

To further enhance the site:

1. Add actual Play Store link when available
2. Add real images to `/public/` directory
3. Implement the contact form backend
4. Add Google Analytics or other analytics
5. Add actual social media links
6. Implement live chat functionality
7. Add loading states and animations
8. Implement error boundaries
9. Add a blog section for content marketing
10. Set up automated testing

## 📄 License

All rights reserved - MediRemind 2026

## 🤝 Support

For support, email support@mediremind.flowentech.com or visit the Help & Support page.

---

Built with ❤️ using Next.js and Tailwind CSS
