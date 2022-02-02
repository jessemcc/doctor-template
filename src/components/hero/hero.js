import React from 'react';
import {Carousel, CarouselItem} from '../carousel/carousel';
import HeroStyle from './hero.module.scss';
import Image1 from '../../media/image1placeholder.png';
import Image2 from '../../media/image2placeholder.png';
import Image3 from '../../media/image3placeholder.png';

export const Hero = () => {
    return (
        <div className={HeroStyle.heroContainer}>
            <Carousel>
                <CarouselItem><img className={HeroStyle.imgStyle} src={Image1} /></CarouselItem>
                <CarouselItem><img className={HeroStyle.imgStyle} src={Image2} /></CarouselItem>
                <CarouselItem><img className={HeroStyle.imgStyle} src={Image3} /></CarouselItem>
            </Carousel>
        </div>
    )
}