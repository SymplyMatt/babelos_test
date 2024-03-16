import React from 'react';
import bank_hero from '../../assets/bank_registration.svg'
import personal_hero from '../../assets/personal_info_hero.svg'
import fingerprint_hero from '../../assets/fingerprint_hero.svg'
import farm_hero from '../../assets/farm_hero.svg'
interface ImageHeroProps {
    page?: string;
}

const ImageHero: React.FC<ImageHeroProps> = ({ page = 'personal' }) => {
    return (
        <div className='image-hero'>
            <img src={page === 'personal' ? personal_hero : page == 'bank' ? bank_hero : page == 'fingerprint' ? fingerprint_hero : farm_hero } alt="" />
        </div>
    );
}

export default ImageHero;
