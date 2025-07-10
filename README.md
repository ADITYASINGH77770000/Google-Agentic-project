# 🌆 Pulse of Bengaluru – Futuristic 3D Smart City Dashboard

An immersive, real-time 3D dashboard built with **Next.js**, **Three.js**, and **Google Gemini API**, designed to bring the pulse of the city directly to its citizens. The app combines interactive 3D visuals with AI-powered analytics, crowd-sourced reports, and predictive civic alerts.

## 🚀 Live Features

- 🌐 **3D Smart City Visualization** (using `Three.js` and `@react-three/fiber`)
- 🔮 **Real-Time AI-Powered Updates** (Google Gemini)
- 🗺️ **Interactive Map Layers** (MapboxGL / Deck.GL)
- 📥 **Multimodal User Reporting** (Image, video, geo-location)
- 📊 **Civic Alerts, Public Sentiment, Mood Map**
- 🔔 **AI-based Predictive Notifications**
- 🔄 **Realtime Sync via Firebase Firestore**
- 🧠 **Gemini-Powered Summarizations and Alerts**

---

## 🛠 Tech Stack

| Tech               | Purpose                                  |
|--------------------|-------------------------------------------|
| **Next.js (App Router)** | SSR, Routing, SEO                          |
| **Three.js / @react-three/fiber** | 3D visualization, scene rendering     |
| **Tailwind CSS**    | Utility-first styling framework          |
| **Framer Motion**   | Smooth transitions, UI animations        |
| **Firebase**        | Auth, Firestore, Functions                |
| **Google Gemini API** | Text & Vision AI analysis                 |
| **MapboxGL / DeckGL** | Interactive geographic layers           |

---

## 📁 Folder Structure

/app

/home # 3D landing page
/dashboard # Main dashboard with maps and widgets
/notifications # AI alerts and civic summaries
/report # Multimodal event reporting form
/components
Navbar.tsx
ThreeScene.tsx
ReportForm.tsx
AlertCard.tsx
MoodMap.tsx
/lib
firebase.ts
gemini.ts
/public
/assets # Icons, logos, map textures


---

## 🧪 Key Components

### 🏙️ Landing Page (`/home`)
- 3D night-mode cityscape with animated particles and neon lighting
- "Enter Pulse" button scrolls to dashboard
- Uses `Three.js` and `@react-three/drei`

### 📊 Dashboard (`/dashboard`)
- Split view: 3D interactive map + live widgets
- Real-time alerts from Gemini + Firebase
- Floating stat cards, mood heatmaps, predictive icons

### 📝 User Report Form (`/report`)
- Upload photos, videos
- Auto fetch geolocation
- Calls Firebase Function to store and trigger Gemini API for analysis

### 🔔 Notifications (`/notifications`)
- Card-based summaries
- Predictive alerts (e.g., power outage, traffic spike)
- User subscription by location

### 🌐 Navigation (`Navbar.tsx`)
- Futuristic sidebar/topbar with icons
- Toggle night/day themes
- Route navigation

---

## 🔌 Firebase Integration

- 🔐 Authentication (Email/Google login)
- 🔄 Firestore (Real-time data sync)
- ⚙️ Cloud Functions (to interact with Gemini API)
- 🔔 Notifications (via Firestore triggers or FCM)

---

## 📦 Installation & Setup

```bash
# 1. Create the app
npx create-next-app@latest pulse-of-bengaluru --app --ts --tailwind

# 2. Install dependencies
cd pulse-of-bengaluru
npm install three @react-three/fiber @react-three/drei framer-motion firebase mapbox-gl @deck.gl/react @deck.gl/core

# 3. Set up Firebase and Gemini API credentials in `.env.local`

🌐 Deployment on Vercel

    Configure Firebase Functions as Vercel Serverless Functions

    Add your .env secrets via Vercel dashboard

    Use Firestore listeners for real-time updates

    Deploy via vercel deploy

🧠 AI-Powered Features
Feature	Source
Civic Summaries	Gemini Text API
Media Analysis (img/video)	Gemini Multimodal API
Predictive Alerts	Gemini + Time Series Agent
Mood Heatmap	Sentiment Detection
✨ Bonus Enhancements

    🧭 3D Mood Map with emoji/heat layer

    🔌 Gemini-Powered Chatbot Assistant

    📈 Floating widgets with live city KPIs

    🌙 Neon-accented glassmorphic dark UI

📢 License

MIT – feel free to fork and build your own city dashboard!
🙌 Acknowledgements

    Google Cloud & Firebase

    Gemini API Team

    Mapbox & Deck.GL community

    react-three-fiber ecosystem

👋 Contact / Support

Have suggestions or want to contribute?
Feel free to raise issues or connect on LinkedIn or GitHub.

