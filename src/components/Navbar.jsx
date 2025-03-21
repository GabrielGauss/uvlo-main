import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css"; // Importa el archivo CSS
import uvloLogo from "../assets/uvlo-nav-logo-negro.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [activeSection, setActiveSection] = useState("video");
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    const handleScroll = () => {
      if (navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        setShowFixedNav(navRect.bottom < 0);

        const sections = ["video", "bio", "music", "footer"];
        let currentSection = "video";
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
              currentSection = sectionId;
              break;
            }
          }
        }
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const scrollToSection = (id, event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="nav-container" ref={navRef}>
        <div className="logo">
          <img src={uvloLogo} alt="Logo de Último Velo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#video" onClick={(e) => scrollToSection("video", e)}>VIDEO</a></li>
          <li><a href="#bio" onClick={(e) => scrollToSection("bio", e)}>BIO</a></li>
          <li><a href="#music" onClick={(e) => scrollToSection("music", e)}>MÚSICA</a></li>
          <li><a href="#footer" onClick={(e) => scrollToSection("footer", e)}>CONTACTO</a></li>
        </ul>

        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {showFixedNav && (
        <div className="fixed-nav">
          <ul className="vertical-bars">
            <li className={activeSection === "video" ? "active" : ""} title="Video">
              <a href="#video" onClick={(e) => scrollToSection("video", e)}></a>
            </li>
            <li className={activeSection === "bio" ? "active" : ""} title="Bio">
              <a href="#bio" onClick={(e) => scrollToSection("bio", e)}></a>
            </li>
            <li className={activeSection === "music" ? "active" : ""} title="Música">
              <a href="#music" onClick={(e) => scrollToSection("music", e)}></a>
            </li>
            <li className={activeSection === "footer" ? "active" : ""} title="Contacto">
              <a href="#footer" onClick={(e) => scrollToSection("footer", e)}></a>
            </li>
          </ul>
          <button className="go-top-button" onClick={scrollToTop} title="Ir arriba">
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;