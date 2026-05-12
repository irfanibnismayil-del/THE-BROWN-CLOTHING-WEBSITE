# THE BROWN – Clothing Brand Website

## 📌 Overview
**THE BROWN** is a modern and responsive streetwear clothing brand website built using React. It is designed with a clean, premium UI focused on minimalism, fashion branding, and user experience.

This project simulates a real-world fashion e-commerce landing page and is suitable for portfolio and AWS deployment practice.

---

## 🚀 Features
- Fully responsive modern UI
- Streetwear-inspired fashion design
- Hero landing section with branding
- Product showcase section
- Brand story / About section
- Newsletter subscription UI
- Smooth layout and clean navigation
- Production-ready React structure

---

## 🛠️ Tech Stack
- React (JSX)
- Tailwind CSS
- HTML5
- CSS3

---

## 💻 Main React Component
```jsx
export default function TheBrownWebsite() {
  const products = [
    {
      name: "Classic Brown Oversized Tee",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Urban Street Hoodie",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Minimal Cargo Collection",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#f5f1ea] text-[#2d2016] min-h-screen font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#f5f1ea]/90 backdrop-blur-md border-b border-[#d7c8b4] z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl md:text-3xl font-black tracking-[0.3em]">
            THE BROWN
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-8xl font-black text-white">WEAR YOUR BROWN</h2>
        </div>
      </section>

      {/* Products */}
      <section id="collection" className="py-24 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-4">
              <img src={product.image} className="rounded-xl" />
              <h4 className="text-xl font-bold mt-4">{product.name}</h4>
              <p className="text-[#8b5e3c] font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
```

---

## ☁️ Deployment
Can be hosted on:
- AWS EC2 with Nginx
- Vercel
- Netlify

---

## 🎯 Purpose
This project is built for:
- React practice
- UI/UX design
- AWS deployment learning
- Portfolio showcase

---

## 👕 Brand Concept
THE BROWN represents minimal, earthy, premium streetwear fashion with a modern identity.

