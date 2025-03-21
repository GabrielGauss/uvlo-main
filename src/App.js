import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoGallery from './components/VideoGallery';
import BioSection from './components/BioSection';
import MusicPlayer from './components/MusicPlayer';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/App.css';
import Navbar from './components/Navbar';

const App = () => {
const videoIds = ['ZlFC3jTBNDs', 'DRJr_kZCABQ', 'h5P7ka9bYOk','6xiAXjG3VQQ', 'n-ltcFIJQd8', 'eB830dLc9xU','9DkyiHfbCfc', 'F-5EaHBl5Ag'  ];

    return (
        <div>
            <Navbar />
            <HeroSection />
            <VideoGallery videoIds={videoIds}/>
            <BioSection />
            <MusicPlayer />
            <Footer />
        </div>
    );
};

export default App;
