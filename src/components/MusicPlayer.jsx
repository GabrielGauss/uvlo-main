// MusicPlayer.jsx
import React from 'react';
import './MusicPlayer.css';
import { ReactComponent as WavesSVG } from '../assets/layered-waves-haikei.svg'; // Importa el SVG

const MusicPlayer = () => {
    const iframeStyle = {
        borderRadius: '12px',
    };
    return (
        <section id="music" className="music-player">
            <h1>MUSICA</h1>
            <div className="music-player-container"> {/* Agregado un contenedor para el iframe */}
                <iframe
                    style={iframeStyle}
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1EIhJROHjsowE8?utm_source=generator&theme=0"
                    width="500vw"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
            <div className='svg-fondo'>
              <WavesSVG /> {/* Renderiza el SVG */}
            </div>
        </section>
    );
};

export default MusicPlayer;

