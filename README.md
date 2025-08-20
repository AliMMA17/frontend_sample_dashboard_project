# 📊 Asana-style Dashboard (Frontend Demo)

Dashboard website frontend  **frontend-only dashboard UI** inspired by the [Asana Dashboard Web App Design](https://www.figma.com/design/9UMQdYWJeSVEoetQAYYgnl/Asana-Dashboard-Web-App-UI-Design--Community-?node-id=115-1962).

## 🚀 Run Locally

```bash
# install deps
npm install

# start dev server
npm run dev

# open in browser
http://localhost:3000





.
├── app/                # Next.js app directory (pages, layouts, routes)
│   ├── page.tsx        # Dashboard home page
│   └── components/     # UI components (charts, cards, sidebar, etc.)
├── lib/                # Static data & helpers
│   └── data.ts         # Mock demo data for charts & tasks
├── public/             # Static assets (icons, images)
├── styles/             # Global styles (Tailwind setup, globals.css)
├── package.json        # Project metadata & scripts
└── tailwind.config.js  # Tailwind theme config


✨ Features

🌗 Light/Dark mode toggle

📋 Kanban board with task cards & counters

📈 Activity chart (Recharts) + progress visuals

➕ Add task UI (client-side only)

🎨 Pixel-perfect Tailwind styling

🛠️ Tech Stack

Node.js
 – Runtime

Next.js
 – React framework

Tailwind CSS
 – Styling

Recharts
 – Charts & data visualization