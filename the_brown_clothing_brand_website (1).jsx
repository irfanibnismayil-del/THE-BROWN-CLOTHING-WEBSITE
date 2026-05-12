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

          <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
            <a href="#home" className="hover:opacity-70 transition">
              HOME
            </a>
            <a href="#collection" className="hover:opacity-70 transition">
              COLLECTION
            </a>
            <a href="#about" className="hover:opacity-70 transition">
              ABOUT
            </a>
            <a href="#contact" className="hover:opacity-70 transition">
              CONTACT
            </a>
          </nav>

          <button className="bg-[#2d2016] text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
            SHOP NOW
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop"
          alt="Fashion Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[0.5em] text-[#e8d8c3] mb-4 text-sm">
            Premium Streetwear Brand
          </p>

          <h2 className="text-5xl md:text-8xl font-black text-white leading-none mb-6">
            WEAR
            <br />
            YOUR BROWN
          </h2>

          <p className="text-[#f4ece2] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Modern streetwear designed with earthy aesthetics, bold confidence,
            and timeless fashion.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-[#8b5e3c] hover:bg-[#6f472c] text-white px-8 py-4 rounded-full font-semibold transition">
              Explore Collection
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
              View Lookbook
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="collection" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#8b5e3c] mb-3">
              Latest Drop
            </p>
            <h3 className="text-4xl md:text-5xl font-black">
              Featured Collection
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="overflow-hidden h-[420px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                  <p className="text-[#8b5e3c] text-xl font-semibold mb-4">
                    {product.price}
                  </p>

                  <button className="w-full bg-[#2d2016] text-white py-3 rounded-full font-semibold hover:bg-[#8b5e3c] transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section
        id="about"
        className="py-24 px-6 bg-[#2d2016] text-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#c9a27e] mb-4">
              Our Story
            </p>

            <h3 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              THE BROWN
              <br />
              MOVEMENT
            </h3>

            <p className="text-lg text-[#e7d7c4] leading-relaxed mb-6">
              THE BROWN is more than fashion. It's a culture inspired by earthy
              tones, urban confidence, and modern individuality. Every piece is
              designed to blend comfort, luxury, and streetwear aesthetics.
            </p>

            <button className="bg-[#8b5e3c] px-8 py-4 rounded-full font-semibold hover:bg-[#a06f48] transition">
              Learn More
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
              alt="Brand Story"
              className="rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-xl p-10 md:p-16">
          <p className="uppercase tracking-[0.4em] text-sm text-[#8b5e3c] mb-4">
            Stay Updated
          </p>

          <h3 className="text-4xl font-black mb-6">
            Join THE BROWN Community
          </h3>

          <p className="text-lg text-[#5e5147] mb-8">
            Get early access to exclusive drops, offers, and streetwear updates.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-[#d7c8b4] outline-none"
            />

            <button className="bg-[#2d2016] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#8b5e3c] transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#1a120c] text-[#d6c4b2] py-10 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-2xl font-black tracking-[0.3em] text-white">
              THE BROWN
            </h4>
            <p className="mt-2 text-sm">
              Premium Clothing Brand • Designed for Modern Streetwear
            </p>
          </div>

          <div className="flex gap-6 text-sm font-semibold">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition">
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
