import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "./VideoGallery.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import latestImage from "../assets/corner001.png";

const VideoGallery = ({ videoIds }) => {
    const glideRef = useRef(null);

    useEffect(() => {
        if (glideRef.current) {
            const glide = new Glide(glideRef.current, {
                type: 'carousel',
                perView: 2.2, // Show more than 2 slides
                focusAt: 'center', // Center the focused video
                startAt: 3, // Start at the 4th video (index 3)
                gap: 24, // Wider gap
                rewind: false,
                bound: false,
                breakpoints: {
                    800: { perView: 1 },
                    480: { perView: 1 }
                }
            });
            glide.on('run.after', () => {
                // Add custom class to active indicator for styling
                document.querySelectorAll('.video-indicators .indicator').forEach((el, idx) => {
                    el.classList.toggle('active', idx === glide.index);
                });
                // Add custom class to active slide for scaling
                document.querySelectorAll('.glide__slide').forEach((el, idx) => {
                    el.classList.toggle('focused-slide', el.classList.contains('glide__slide--active'));
                });
            });
            glide.mount();
            return () => glide.destroy();
        }
    }, [videoIds]);

    return (
        <div className="latest-section" id="video">
            <div className="Latest">
                <h1>LO ÚLTIMO</h1>
            </div>
            <div className="latest-image-container">
                <img src={latestImage} alt="Latest" className="latest-image" />
            </div>
            <div className="glide" ref={glideRef}>
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {videoIds.map((videoId, index) => (
                            <li className="glide__slide" key={index}>
                                <div className="video-item active">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title={`Video ${index}`}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">&lt;</button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">&gt;</button>
                </div>
                <div className="glide__bullets" data-glide-el="controls[nav]">
                    {videoIds.map((_, index) => (
                        <button
                            key={index}
                            className="glide__bullet"
                            data-glide-dir={`=${index}`}
                            aria-label={`Ir al video ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;