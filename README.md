# 📸 Photo Gallery in React

A responsive and minimal photo gallery app built with **React**, styled using **Tailwind CSS**, and powered by **Picsum Photos** API to generate random images.

## 🔗 Live Demo

[Click here to view the live app](https://mahnoorshabbir-photo-gallery.vercel.app/)

---

## 📁 Folder Structure

```
photo-gallery-react/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

---

## ✨ Features

- Responsive photo grid layout
- Fetches random images using the [Picsum Photos](https://picsum.photos/) API
- Button to refresh with new images
- Smooth transition and shadow effects

---

## 🧠 How It Works

- `useEffect()` calls `loadPhotos()` on mount.
- `loadPhotos()` generates 3 random image URLs using `Math.random()` and the Picsum API.
- Images are displayed using `.map()`.
- Clicking the button reloads new images.

---
