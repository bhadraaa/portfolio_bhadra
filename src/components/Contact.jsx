import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };
  useEffect(() => {
      if (window.particlesJS) {
        window.particlesJS('particles-js-achievements', {
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#00d4ff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.8,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.4, sync: false }
            },
            size: {
              value: 5,
              random: true,
              anim: { enable: true, speed: 2, size_min: 1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#00d4ff",
              opacity: 0.6,
              width: 1.5
            },
            move: {
              enable: true,
              speed: 2,
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        });
      }
    }, []);
  

  return (
     <section
      id="contact"
      className="contact-section"
      style={{ position: "relative" }}
    >
      <div id="particles-js-contact" style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
        top: 0,
        left: 0
      }}></div>
      
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 className="section-title">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
          <p className="status-message">{status}</p>
        </form>

        <div className="contact-icons">
          <p className="contact-item">bhadra.j05@gmail.com</p>
          <a href="https://www.linkedin.com/in/bhadra-j-6a1855257" target="_blank" rel="noreferrer">
            <img className="icons" src="LinkedIn.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/bhad_.ra" target="_blank" rel="noreferrer">
            <img className="icons" src="instagram.png" alt="Instagram" />
          </a>
          <a href="https://github.com/bhadraaa" target="_blank" rel="noreferrer">
            <img className="icons" src="git.png" alt="Github" />
          </a>
        </div>
        <br />
      </div>
    </section>
    

      
  );
}

export default Contact;
