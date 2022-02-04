import React from 'react';
import {Carousel, CarouselItem} from '../carousel/carousel';
import HeroStyle from './hero.module.scss';
import Image1 from '../../media/carousel_image_1.jpg';
import Image2 from '../../media/carousel_image_2.jpg';
import Image3 from '../../media/carousel_image_3.jpg';

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