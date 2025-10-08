import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-emerald-50 to-yellow-50 min-h-screen text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-emerald-700">RupeeRoot</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:text-emerald-700">Home</a>
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-28">
        <motion.h2
          className="text-5xl font-bold text-emerald-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Root Your Money, Watch It Grow 🌱
        </motion.h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          RupeeRoot helps you grow wealth through smart investments, personalized insights, and sustainable strategies.
        </p>
        <motion.a
          href="#services"
          className="inline-block mt-8 px-6 py-3 bg-emerald-700 text-white rounded-xl shadow hover:bg-emerald-800"
          whileHover={{ scale: 1.05 }}
        >
          Explore Services
        </motion.a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Wealth Management"
              description="Tailored strategies to preserve and grow your wealth efficiently."
              icon="💰"
            />
            <ServiceCard
              title="Investment Advisory"
              description="Expert insights and data-backed recommendations to maximize returns."
              icon="📈"
            />
            <ServiceCard
              title="Financial Planning"
              description="Comprehensive planning to help you achieve long-term financial goals."
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 text-center bg-emerald-50">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-6">About RupeeRoot</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          At RupeeRoot, we believe financial literacy is the foundation of growth. Our platform combines modern analytics with human expertise to empower individuals and businesses to take control of their wealth.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-6">We’d love to hear from you. Reach out anytime!</p>
        <a
          href="mailto:contact@rupeeroot.com"
          className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium rounded-xl hover:bg-yellow-600"
        >
          contact@rupeeroot.com
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} RupeeRoot. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <motion.div
      className="p-6 bg-emerald-50 rounded-2xl shadow hover:shadow-lg transition"
      whileHover={{ scale: 1.03 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-emerald-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
