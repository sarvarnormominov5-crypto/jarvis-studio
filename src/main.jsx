
import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const services = [
    ["01", "BUSINESS AI", "Biznes jarayonlarini avtomatlashtirish."],
    ["02", "SMM AI", "Kontent, Reels va marketing yechimlari."],
    ["03", "PERSONAL AI", "Shaxsiy ovozli AI yordamchi."],
    ["04", "CUSTOM AI", "Siz uchun maxsus AI agentlar."]
  ];

  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#">JARVIS<span>.</span></a>
        <span className="studio">STUDIO</span>
        <a className="nav-link" href="#contact">Loyiha boshlash ↗</a>
      </nav>

      <section className="hero">
        <div className="eyebrow"><i /> NEXT GENERATION AI STUDIO</div>
        <h1>BUILD YOUR<br /><span>INTELLIGENCE.</span></h1>
        <p>
          Biznesingiz va g‘oyalaringiz uchun yangi avlod
          sun’iy intellekt yechimlarini yaratamiz.
        </p>
        <a className="primary" href="#services">Imkoniyatlarni ko‘rish ↗</a>
        <div className="orb"><div className="orb-core">J</div></div>
        <div className="hero-bottom">INTELLIGENCE · AUTOMATION · INNOVATION</div>
      </section>

      <section className="services" id="services">
        <div className="section-top">
          <span>01 / SERVICES</span>
          <span>OUR EXPERTISE</span>
        </div>
        <h2>AI without limits.</h2>
        <div className="service-list">
          {services.map(([num, title, desc]) => (
            <article className="service" key={num}>
              <span>{num}</span>
              <div><h3>{title}</h3><p>{desc}</p></div>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <span>02 / START A PROJECT</span>
        <h2>YOUR IDEA.<br />OUR INTELLIGENCE.</h2>
        <p>Keyingi loyihangizni birgalikda boshlaymiz.</p>
        <a className="primary" href="mailto:hello@jarvisstudio.uz">
          Biz bilan bog‘laning ↗
        </a>
      </section>

      <footer>JARVIS STUDIO © 2026 <span>BUILT FOR THE FUTURE.</span></footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
