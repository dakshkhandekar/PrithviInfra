import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.08 0.01 260 / 0.7), oklch(0.08 0.01 260 / 0.85)), url('/assets/images/hero-bg.jpg')",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#e74c3c] uppercase tracking-tight leading-none text-shadow-hero"
          data-ocid="hero.title"
        >
          PRITHVI INFRASTRUCTURE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-white/80 text-sm sm:text-base md:text-lg font-mono tracking-wide"
          data-ocid="hero.gst"
        >
          GST No. 27AECPJ4784J2Z5
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-8"
        >
          <button
            type="button"
            onClick={() => {
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-8 py-3 bg-[#e74c3c] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#c0392b] transition-smooth rounded-sm border-0 cursor-pointer"
            data-ocid="hero.cta_button"
          >
            Discover More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
