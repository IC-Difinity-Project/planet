import React, {useEffect, useState} from 'react';
import {marketLink, socials} from "../../constants/socials";
import './MainLayout.scss';
import MainMenu from "../MainMenu";
import Overlay from "../Overlay";

export default function MainLayout({mouse}) {

    const [openModal, closeModal] = useState()
    const [coordinates, setCoordinates] = useState({x: 25698.78954, y: 987456321.58987, z: 8765756.5698})

    // useEffect(() => {
    //     setCoordinates({
    //         x: Math.random() * mouse.x,
    //         y: Math.random() * mouse.y,
    //         z: Math.random() * (mouse.x + mouse.y)
    //     })
    // }, [mouse])

    const newCoordinates = (x, y) => {
        setCoordinates({
            x: Math.random() * x,
            y: Math.random() * y,
            z: Math.random() * (x + y)
        })
    }

    return (
        <div
            className={'main-layout'}
             onMouseMove={(event) =>
                 newCoordinates(event.clientX, event.clientY)}
        >
            <div className={"main-layout__background-video"}>
                <img src={"./BG.webp"}/>
                {/*<video*/}
                {/*    muted={true}*/}
                {/*    autoPlay={true}*/}
                {/*    loop={true}*/}
                {/*    poster={"./BG.webp"}*/}
                {/*>*/}
                {/*    <source src={"./Sphere_beauty_X2.webm"}/>*/}
                {/*</video>*/}
            </div>
            <div className={'main-layout__background background-grid'}>
                <div className={'background-grid__wrapper'}>
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__r-block'} />

                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__r-block'} />

                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__r-block'} />

                    <div className={'background-grid__b-block'} />
                    <div className={'background-grid__b-block'} />
                    <div className={'background-grid__b-block'} />
                    <div className={'background-grid__b-block'} />
                    <div className={'background-grid__b-block'} />
                    <div className={'background-grid__b-block'} />
                    <div className={'background-grid__b-block'} />
                    <div className={'background-grid__l-block'} />
                </div>
            </div>
            <a href={marketLink} className={'main-layout__market'}>
                <div className={'main-layout__market-container'} >
                    <div className={'main-layout__market-text'} >
                        Open marketplace
                    </div>
                </div>
            </a>
            <Overlay openModal={openModal} closeModal={closeModal} />
            <div className={'main-layout__content'}>
                <div className={'main-layout__wrapper'}>
                    <div className={'main-layout__logo logo-area'}>
                        <div className={'logo-area__left'}></div>
                        <div className={'logo-area__right'}></div>
                    </div>
                    <div className={'main-layout__about-title title-header'}>about</div>
                    <div className={'main-layout__menu-title title-header'}>menu</div>
                    <div className={'main-layout__info-title info-area title-header'}>
                        <div className={'info-area__coordinates'}>
                            <p>{`${String(coordinates.x).substring(0,15)}: X`}</p>
                            <p>{`${String(coordinates.y).substring(0,15)}: Y`}</p>
                            <p>{`${String(coordinates.z).substring(0,15)}: Z`}</p>
                        </div>
                        <ul className={'info-area__letters'}>
                            {(socials || []).map((social) => (
                                <li><a href={social.link}>{social.title}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={'main-layout__about-content about-content'}>
                        <div className={'about-content__image'} />
                        <div className={'about-content__title'}>
                            NFT
                            ICPLANETS
                        </div>
                        <div className={'about-content__subtitle'}>
                            Unique animated NFT planets for
                            resource mining in the ICPlanets Metaverse
                        </div>
                    </div>
                    <div className={'main-layout__menu-content'}>
                        <MainMenu />
                        <div className={'main-layout__video'}>
                            <a target="_blank" href="https://vimeo.com/722281612" className={'main-layout__video-wrapper'}>
                                <div className={'main-layout__img'} />
                                <div className={'main-layout__play'}>
                                    <div className={'main-layout__play-arrow'} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={'main-layout__footer-info1 footer-info1'}>
                        <div className={'footer-info1__wrapper'}>
                            <div className={'footer-info1__right'}>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 6L9.33013 12H0.669873L5 6Z" fill="white"/>
                                    <path d="M5 0L9.33013 6H0.669873L5 0Z" fill="white"/>
                                    <path d="M5 12L9.33013 18H0.669873L5 12Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={'footer-info1__left'}>
                                Economic activity, develops and adapts them to the participation of a large number
                            </div>
                        </div>
                    </div>
                    <div className={'main-layout__footer-info2 footer-info2'}>
                        <div className={'footer-info2__flag'} >
                            <div className={'footer-info2__flag-top'} />
                            <div className={'footer-info2__flag-bottom'} />
                        </div>
                        ICPlanets consider this internet computer blockchain the best technology with infinity potential at the moment, which certainly opens up unlimited opportunities for us to create Metaverse and advanced technologies with minimal resource costs and potentially safe for the enviroment.
                    </div>
                    <div className={'main-layout__copyright copyright-area'}>
                        COPYRIGHT © 2022 NFT ICPLANETS
                    </div>
                    {/*<div className={'main-layout__logo-col'}>*/}
                    {/*    <div className={'logo-col__top'}>*/}
                    {/*        <div className={'logo-col__left'} />*/}
                    {/*        <div className={'logo-col__right'}>*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={'logo-col__bottom'}>*/}
                    {/*        <div className={'logo-col__circle'}>*/}
                    {/*            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                <path d="M5 6L9.33013 12H0.669873L5 6Z" fill="white"/>*/}
                    {/*                <path d="M5 0L9.33013 6H0.669873L5 0Z" fill="white"/>*/}
                    {/*                <path d="M5 12L9.33013 18H0.669873L5 12Z" fill="white"/>*/}
                    {/*            </svg>*/}
                    {/*        </div>*/}
                    {/*        <div className={'logo-col__text'}>*/}
                    {/*            Economic activity, develops and adapts them to the participation of a large number*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={'main-layout__about-col'}></div>*/}
                    {/*<div className={'main-layout__menu-col'}></div>*/}
                    {/*<div className={'main-layout__info-col'}></div>*/}
                </div>
            </div>
        </div>
    )
}
