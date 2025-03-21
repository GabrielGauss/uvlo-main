import React, { useState } from 'react';
import './BioSection.css';
import gabiIMG from '../assets/foto-gabi.png';
import facuIMG from '../assets/foto-romer.png';

const BioSection = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <section id="bio" className="bio">
            <h1>BIO</h1>
            <div className="bio-content">
                <section className='mucho-texto'>
                    <h2><strong>Último Velo:</strong> <em>El rugido del Atlántico que sacude el Hard-Rock argentino</em></h2>
                    <p>
                        Desde el corazón de Mar del Plata, donde el viento salado se mezcla con el eco de las olas, emerge <strong>Último Velo</strong>, un trío de Hard-Rock que está redefiniendo el sonido de la escena musical argentina. Formada en 2018 por los hermanos <strong>Ezequiel Romero</strong> (guitarra) y <strong>Facundo Romero</strong> (voz y bajo), y el imparable <strong>Gabriel Veron</strong> en la batería, esta banda ha logrado tejer un tapiz sonoro único, donde la potencia del rock moderno se entrelaza con la nostalgia electrizante de los <em>80's</em>.
                    </p>
                    {showFullText && (
                        <>
                            <p>
                                Criados entre la magia de los vinilos y la crudeza de los cassettes, los hermanos Romero y Gabriel encontraron en la música un refugio, un lenguaje universal para expresar sus inquietudes y pasiones más profundas. <strong>Último Velo</strong> nació de esa conexión visceral, de la necesidad de crear un sonido auténtico que resonara con la fuerza de sus raíces y la frescura de su visión.
                            </p>
                            <p>
                                Su música es un viaje catártico, un torbellino de riffs ardientes, ritmos palpitantes y letras que exploran las complejidades de la vida, los abismos de la filosofía y las esperanzas que nos impulsan a seguir adelante. Cada canción es un reflejo de sus experiencias personales, un diálogo sincero y apasionado con su audiencia.
                            </p>
                            <p>
                                <strong>Último Velo</strong> no solo se escucha, se siente en el alma. Sus presentaciones en vivo son una explosión de energía pura, un ritual donde la banda y el público se funden en un solo latido, creando una experiencia inolvidable. Con un futuro prometedor y un talento que desborda los escenarios, <strong>Último Velo</strong> se está consolidando como una de las bandas más emocionantes y auténticas del rock argentino actual.
                            </p>
                        </>
                    )}
                    {!showFullText && (
                        <button className="read-more-button" onClick={toggleText}>
                            Continuar leyendo
                        </button>
                    )}
                </section>
                <div className="image-container">
                    <div className="bio-images">
                        <img src={gabiIMG} alt="foto gabriel veron" />
                        <img src={facuIMG} alt="foto facundo romero" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BioSection;