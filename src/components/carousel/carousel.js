import React, {useState, useEffect} from 'react';
import {useSwipeable} from 'react-swipeable';
import CarouselStyle from './carousel.module.scss';
import { HashLink } from 'react-router-hash-link';

export const CarouselItem = ({ children, width }) => {
    return (
        <div className={CarouselStyle.carouselItem} style={{ width: width }}>
            {children}
        </div>
    );
};

export const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 5000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    })

    return (
        <div {...handlers} className={CarouselStyle.carousel} id="topHash">
            <div className={CarouselStyle.inner} style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className={CarouselStyle.indicators}>
                <button className={CarouselStyle.buttonPushable}>
                    <HashLink 
                        className={CarouselStyle.buttonFront}
                        to="#topHash">
                        Virtual Care
                    </HashLink>
                </button>
                <button onClick={() => {
                    updateIndex(activeIndex - 1);
                }}>Previous</button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button className={`${index === activeIndex ? "active" : ""}`} onClick={() => {
                            updateIndex(index);
                        }}>{index + 1}</button>
                    )
                })}
                <button onClick={()=> {
                    updateIndex(activeIndex + 1);
                }}>Next</button>
                <button className={CarouselStyle.buttonPushable}>
                    <HashLink
                        className={CarouselStyle.buttonFront}
                        to="#topHash">
                        Patient Portal
                    </HashLink>
                </button>
            </div>
        </div>
    );
};