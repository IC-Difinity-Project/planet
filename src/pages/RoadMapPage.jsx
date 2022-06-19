import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PageLayout from "./PageLayout";
import {roadmapSlider} from '../constants/pages.js'

import 'swiper/css';
import './pages.scss';

export default function RoadMapPage({width}) {

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
                number={"03"}
                title={'Roadmap'}
                subtitle={"Welcome to ICPlanets!"}
                text={"Here you can find information on the roadmap of the project."}
                slidePrev={slidePrev}
                slideNext={slideNext}
                width={width}
            >
                <div className={'roadmap-page__slider slider-roadmap'}>
                    <Swiper
                        onSwiper={updateSwiper}
                        spaceBetween={1}
                        slidesPerView={1.1}
                        breakpoints={{750: {
                                slidesPerView: 3.5,
                            }}}
                    >
                        {roadmapSlider.map(((slide, i) => (
                            <SwiperSlide key={i*Math.random()}>
                                <div className={'slider-roadmap__slide pages-slide'}>
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