<div align="center">

# 🌐 HazMiWeb

### Web Development Services Platform · Built with React + TypeScript + Supabase

[![Live Demo](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://hazmiweb.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)

</div>

---

## 📌 About

**HazMiWeb** is a professional web development services website showcasing four service tiers — from quick landing pages to full custom web applications. Potential clients can explore packages, view pricing, and get in touch directly through the platform.

> 🔗 Live at: [hazmiweb.vercel.app](https://hazmiweb.vercel.app)

---

## ✨ Features

- **Service catalog** with 4 tiers and transparent pricing
- **Add-ons section** — SEO, hosting, maintenance, and more
- **"How It Works"** — 6-step process breakdown for clients
- **Contact form** with Supabase backend integration
- **Fully responsive** — optimized for mobile, tablet, and desktop
- **SEO-optimized** with structured metadata and performance best practices

---

## 💼 Service Packages

| Package | Description | Price Range |
|---|---|---|
| 🚀 Landing Page | Single-page responsive site for entrepreneurs | $200 – $250 |
| 🏢 Corporate Site | Multi-page professional website with gallery & maps | $400 – $600 |
| 🛒 E-Commerce | Full shopping platform with payments & inventory | $700 – $1,200 |
| ⚙️ Custom Web App | Tailored solution with database & dashboard | $1,200 – $2,500+ |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Backend / DB | Supabase |
| Deployment | Vercel |
| Linting | ESLint |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project

### Installation

```bash
# Clone the repository
git clone https://github.com/SebastianChacon/hazmiweb.git
cd hazmiweb

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Setup

Run the included SQL script in your Supabase SQL editor:

```bash
# File: supabase_setup.sql
```

### Development

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

## 📁 Project Structure

```
hazmiweb/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # Reusable UI components
│   ├── config/          # App configuration
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page-level components
│   ├── services/        # Supabase & API integrations
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Helper functions
│   └── App.tsx          # Root component
├── supabase_setup.sql   # Database schema
├── .env.example         # Environment variables template
└── vite.config.ts       # Vite configuration
```

---

## 🚢 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Fork this repository
2. Import it into [Vercel](https://vercel.com)
3. Add the environment variables in the Vercel dashboard
4. Deploy — Vercel auto-deploys on every push to `main`

---

## 👤 Author

**Sebastian Chacon** — Full Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-SebastianChacon-100000?style=flat&logo=github)](https://github.com/SebastianChacon)
[![Email](https://img.shields.io/badge/Email-chacontsebastian@gmail.com-D14836?style=flat&logo=gmail&logoColor=white)](mailto:chacontsebastian@gmail.com)

---

<div align="center">

*Built with ❤️ using React, TypeScript & Supabase*

</div>
