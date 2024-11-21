import React, { useState, useEffect, useMemo } from 'react';
import LeftSide from './left-side-menu';
import RightSide from './right-side-menu';
import "../index.css"


const Menu = () => {
    const [imageIndex, setImageIndex] = useState(0);


    // Usamos useMemo para memorizar el array de imágenes
    const images = useMemo(() => [
        "aqu.jpg",
        "sagi.jpg"
    ], []); // El array vacío como dependencia asegura que solo se inicialice una vez.


    useEffect(() => {
        const handleScroll = () => {
            // Cambiar la imagen a medida que se hace scroll
            const scrollPosition = window.scrollY;
            const newIndex = Math.min(Math.floor(scrollPosition / 500), images.length - 1); // Cambia cada 500px
            setImageIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [images]);


    return (
        <div className="landing-container">
            <div className="content">
                <LeftSide />
                <RightSide imageSrc={images[imageIndex]} />
            </div>
        </div>
    );
};

export default Menu;