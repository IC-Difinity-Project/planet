import React, {useEffect, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import gsap from 'gsap';

export default function PageLayout({children, number, title, subtitle, text, slidePrev, slideNext, width}) {

    const container = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        container && gsap.fromTo(container.current, { y: container.current.clientHeight*1.2 }, { y: 0 });
    }, [])

    const closePage = () => {
        gsap.fromTo( container.current, { y: 0 },
            {
                y: container.current.clientHeight*1.2,
                onComplete: () => navigate('/'),
            },
        );
    }

    return (
        <div
            ref={container}
            className={`page-layout`}
        >
            {/*<Link to={'/'}>*/}
            <div role={'button'} className={'page-layout__background'} onClick={() => closePage()} />
            {/*</Link>*/}
            <div role={'button'} className={`page-layout__container`}>
                <div className={'page-layout__wrapper'}>
                    {width > 750 && (
                        <div role={'button'} className={'page-layout__close-area close-area'}  onClick={() => closePage()}>
                            {/*<Link className={'close-area__link'} to={'/'}>*/}
                                <div className={'close-area__container'}>
                                    <div className={'close-area__close'}></div>
                                </div>
                            {/*</Link>*/}
                        </div>
                    )}
                    <div className={'page-layout__main-area main-area'}>
                        {width < 750 && (
                            <div className={'close-area__container'} onClick={() => closePage()}>
                                <div className={'close-area__close'}></div>
                            </div>
                        )}
                        <div className={'main-area__content'}>
                            <div className={'main-area__number'}>{number}</div>
                            <div className={'main-area__title'}>{title}</div>
                            <div className={'main-area__subtitle'}>{subtitle}</div>
                            <div className={'main-area__subtitle'}>{text}</div>
                        </div>
                        <div className={'main-area__buttons'}>
                            <button className={'main-area__next'} onClick={slideNext} />
                            <button className={'main-area__prev'} onClick={slidePrev} />
                        </div>
                    </div>
                    <div className={'page-layout__slider-area slider-area'}>
                        <div className={'slider-area__container'}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}