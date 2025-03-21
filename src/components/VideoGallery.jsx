import React, { useState, useRef, useEffect } from "react";
import "./VideoGallery.css";
import latestImage from "../assets/corner001.png";

const VideoGallery = ({ videoIds }) => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(1);
    const transitionRef = useRef(true);
    const touchStartX = useRef(null);

    const videos = [videoIds[videoIds.length - 1], ...videoIds, videoIds[0]];

    useEffect(() => {
        if (carouselRef.current) {
            const videoWidth = carouselRef.current.children[0].offsetWidth;
            carouselRef.current.style.transition = transitionRef.current ? "transform 0.5s ease-in-out" : "none";
            carouselRef.current.style.transform = `translateX(calc(-${currentIndex * videoWidth}px + 10%))`;
        }
    }, [currentIndex]);

    const handleNext = () => {
        transitionRef.current = true;
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        transitionRef.current = true;
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleIndicatorClick = (index) => {
        transitionRef.current = true;
        setCurrentIndex(index + 1);
    };

    useEffect(() => {
        if (currentIndex === videos.length - 1) {
            setTimeout(() => {
                transitionRef.current = false;
                setCurrentIndex(1);
            }, 500);
        } else if (currentIndex === 0) {
            setTimeout(() => {
                transitionRef.current = false;
                setCurrentIndex(videos.length - 2);
            }, 500);
        }
    }, [currentIndex, videos.length]);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (touchStartX.current === null) {
            return;
        }

        const touchX = e.touches[0].clientX;
        const diffX = touchStartX.current - touchX;

        if (diffX > 50) {
            handleNext();
            touchStartX.current = null;
        } else if (diffX < -50) {
            handlePrev();
            touchStartX.current = null;
        }
    };

    const handleTouchEnd = () => {
        touchStartX.current = null;
    };

    return (
        <div className="latest-section" id="video">
            <div className="Latest">
                <h1>LO ÚLTIMO</h1>
            </div>
            <div className="latest-image-container">
                <img src={latestImage} alt="Latest" className="latest-image" />
            </div>
            <div className="video-gallery"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="video-carousel-wrapper">
                    <div className="video-carousel" ref={carouselRef}>
                        {videos.map((videoId, index) => (
                            <div className={`video-item ${index === currentIndex ? "active" : ""}`} key={index}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={`Video ${index}`}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="controls">
                    <button className="prev" onClick={handlePrev}>&lt;</button>
                    <button className="next" onClick={handleNext}>&gt;</button>
                </div>
                <div className="video-indicators">
                    {videoIds.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === currentIndex - 1 ? "active" : ""}`}
                            onClick={() => handleIndicatorClick(index)} // Añadido el evento onClick
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;