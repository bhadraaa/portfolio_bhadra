import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// No import for CSS modules needed if styles are global

function Hero() {
  const heroRef = useRef(null); // Ref for the hero section to append particles

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    // --- Interactive Particle System ---
    const INTERACTIVE_PARTICLE_COUNT = 40;
    const interactiveParticles = [];
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    class InteractiveParticle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.size = Math.random() * 3 + 2;
        this.el = document.createElement("div");
        this.el.className = "interactive-particle"; // Using a distinct class for clarity in global CSS
        this.el.style.width = this.size + "px";
        this.el.style.height = this.size + "px";
        this.el.style.background = "rgba(255,255,255,0.85)";
        this.el.style.position = "absolute";
        this.el.style.borderRadius = "50%";
        this.el.style.pointerEvents = "none";
        this.el.style.zIndex = "3"; // Above static particles but below main content
        heroElement.appendChild(this.el); // Append to the hero section
      }
      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          this.vx -= (dx / dist) * 0.15;
          this.vy -= (dy / dist) * 0.15;
        } else if (dist < 300) {
          this.vx += (dx / dist) * 0.01;
          this.vy += (dy / dist) * 0.01;
        }
        this.vx *= 0.96;
        this.vy *= 0.96;
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
        this.el.style.left = this.x + "px";
        this.el.style.top = this.y + "px";
      }
    }

    for (let i = 0; i < INTERACTIVE_PARTICLE_COUNT; i++) {
      interactiveParticles.push(new InteractiveParticle());
    }

    let animationFrameId;
    function animateInteractiveParticles() {
      for (const p of interactiveParticles) p.update();
      animationFrameId = requestAnimationFrame(animateInteractiveParticles);
    }
    animateInteractiveParticles();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Mouse move effect for particles (the one that spawns particles)
      for (let i = 0; i < 2; i++) { // Reduced count for performance
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = Math.random() * 3 + 2 + "px";
        particle.style.height = particle.style.width;
        particle.style.background = "rgba(255, 255, 255, 0.7)";
        particle.style.borderRadius = "50%";
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 20;
        const x = e.clientX + Math.cos(angle) * radius;
        const y = e.clientY + Math.sin(angle) * radius;
        particle.style.left = x + "px";
        particle.style.top = y + "px";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "15"; // Ensure these are on top
        heroElement.appendChild(particle);
        particle.animate(
          [
            { opacity: 1, transform: "scale(1)" },
            { opacity: 0, transform: "scale(0.5)" },
          ],
          {
            duration: 1000,
            easing: "ease-out",
          }
        );
        setTimeout(() => particle.remove(), 1000);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleResize = () => {
      for (const p of interactiveParticles) {
        p.x = Math.random() * window.innerWidth;
        p.y = Math.random() * window.innerHeight;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle"; // Global class name
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.animationDuration = Math.random() * 10 + 15 + "s";
      particle.style.animationDelay = Math.random() * 5 + "s";
      const size = Math.random() * 2 + 1;
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.opacity = Math.random() * 0.5 + 0.3;
      heroElement.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 25000);
    };

    // Create glowing orbs
    const createOrb = () => {
      const orb = document.createElement("div");
      orb.className = "orb"; // Global class name
      orb.style.top = Math.random() * 100 + "vh";
      orb.style.left = "-100px";
      const size = Math.random() * 100 + 50;
      orb.style.width = size + "px";
      orb.style.height = size + "px";
      orb.style.animationDuration = Math.random() * 20 + 30 + "s";
      heroElement.appendChild(orb);

      setTimeout(() => {
        if (orb.parentNode) {
          orb.parentNode.removeChild(orb);
        }
      }, 50000);
    };

    // Generate particles continuously
    const particleInterval = setInterval(createParticle, 300);
    const orbInterval = setInterval(createOrb, 8000);

    // Initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }

    // Initial orbs
    for (let i = 0; i < 3; i++) {
      setTimeout(createOrb, i * 3000);
    }

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      clearInterval(particleInterval);
      clearInterval(orbInterval);
      // Remove all dynamically created particles and orbs
      heroElement.querySelectorAll(".particle, .orb, .interactive-particle").forEach(el => el.remove());
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <motion.div
      ref={heroRef} // Attach the ref to the hero section
      className="hero-section" // Use the global class name
      id="hero"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="hero-heading">HI, I'M BHADRA</h1>

      <motion.img
        src="Avatar.png"
        alt="My Avatar"
        style={{ width: "300px", height: "300px" }}
        className="hero-avatar rounded-full mb-6 shadow-lg" // Combine with Tailwind if used
       
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <p className="hero-subtext">CSE STUDENT | FLUTTER & AI ENTHUSIAST</p>
    </motion.div>
  );
}

export default Hero;