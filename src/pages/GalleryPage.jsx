import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PageLayout from "./PageLayout";
import {gallerySlider} from '../constants/pages.js'

import 'swiper/css';
import './pages.scss';

export default function GalleryPage({width}) {

    const [swiper, updateSwiper] = useState(null);

    const slideNext = () => {
        swiper && swiper.slideNext();
    };

    const slidePrev = () => {
        swiper && swiper.slidePrev();
    };

    return (
        <div className={'roadmap-page'}>
            <PageLayout
                number={"02"}
                title={'Gallery'}
                subtitle={`Welcome to NFT planets gallery.`}
                text={`In our gallery, you'll see more than 1000 planets. Every planet has its own original short story.`}
                slidePrev={slidePrev}
                slideNext={slideNext}
                width={width}
            >
                <div className={'roadmap-page__slider slider-roadmap'}>
                    <Swiper
                        onSwiper={updateSwiper}
                        spaceBetween={1}
                        slidesPerView={1.1}
                        // resizeObserver={false}
                        breakpoints={{750: {
                                slidesPerView: 3.5,
                            }}}
                    >
                        {gallerySlider.map(((slide, i) => (
                            <SwiperSlide key={i*Math.random()}>
                                <div className={'slider-roadmap__slide pages-slide'}>
                                    <div className={'pages-slide__background'}>
                                        <div className={'pages-slide__video'}>
                                            <div className={'pages-slide__video-wrapper'}>
                                                <video
                                                    muted={true}
                                                    autoPlay={true}
                                                    loop={true}
                                                    poster={`./planets/posters/${slide.poster}`}
                                                >
                                                    <source src={`./planets/videos/${slide.video}`}/>
                                                </video>
                                            </div>
                                        </div>
                                        <div className={'pages-slide__image'}></div>
                                    </div>
                                    <div className={'pages-slide__label'}>{slide.label}</div>
                                    <div className={'pages-slide__wrapper'}>
                                        <div className={'pages-slide__title'}>{slide.title}</div>
                                        <div className={'pages-slide__line'} />
                                        <div className={'pages-slide__text'}>{slide.text}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )))}
                    </Swiper>
                </div>
            </PageLayout>
        </div>
    )
}