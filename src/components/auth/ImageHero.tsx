import React from 'react';

interface ImageHeroProps {
    src: string;
}

const ImageHero: React.FC<ImageHeroProps> = ({ src }) => {
    return (
        <div className='image-hero'>
            <img src={src} alt="" />
        </div>
    );
}

export default ImageHero;
