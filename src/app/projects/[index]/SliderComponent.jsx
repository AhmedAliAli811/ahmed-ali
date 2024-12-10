import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const images = [
        { url: 'image1.jpg', description: 'Description for Image 1' },
        { url: 'image2.jpg', description: 'Description for Image 2' },
        // Add more images as needed
    ];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <div className="slider-images" style={{ transform: `translateX(-${index * 100}%)` }}>
                {images.map((image, i) => (
                    <div className="slider" key={i}>
                        <img src={image.url} alt={image.description} style={{ width: '100%' }} />
                        <div className="description">{image.description}</div>
                    </div>
                ))}
            </div>
            <div className="buttons">
                <button className="button" onClick={prevSlide}>Prev</button>
                <button className="button" onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
};

export default Slider;