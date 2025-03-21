import React from 'react';
import './Footer.css';
import logo from "../assets/uvlo-logo-blanco.svg"; // Asegúrate de tener tu logo en la carpeta src
import facebookIcon from "../assets/facebook.svg"; // Iconos SVG
import instagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";
import spotifyIcon from "../assets/streamline_spotify-solid.svg";

const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo Último Velo" />
                </div>
                <div className="footer-email">
                    CONTACTO@ULTIMOVELO.COM
                </div>
                <div className="footer-socials">
                    <a href="https://www.facebook.com/UltimoVeloARG/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://instagram.com/ultimovelo" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/@ultimovelo2999" target="_blank" rel="noopener noreferrer">
                        <img src={youtubeIcon} alt="YouTube" />
                    </a>
                    <a href="URL_SPOTIFY" target="_blank" rel="noopener noreferrer">
                        <img src={spotifyIcon} alt="Spotify" />
                    </a>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom">
                <p>&copy; 2024 Último Velo. Todos los derechos reservados.</p>
                <div className="footer-links">
                    <a href="/politica-privacidad">Política de Privacidad</a>
                    <a href="/terminos-condiciones">Términos & Condiciones</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;