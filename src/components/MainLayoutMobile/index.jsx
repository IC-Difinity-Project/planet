import React, {useEffect, useState} from 'react';

import './MainLayoutMobile.scss';
import MainMenu from "../MainMenu";
import Overlay from "../Overlay";
import {useLocation} from "react-router-dom";

export default function MainLayoutMobile() {

    const location = useLocation();
    const [openModal, closeModal] = useState();
    const [openMenu, closeMenu] = useState(false);
    const [coordinates, setCoordinates] = useState({x: 25698.78954, y: 987456321.58987, z: 8765756.5698})

    useEffect(() => {
        if (location.pathname !== "/") closeMenu(false);
    }, [location])

    const newCoordinates = (x, y) => {
        setCoordinates({
            x: Math.random() * x,
            y: Math.random() * y,
            z: Math.random() * (x + y)
        })
    }

    return (
        <div
            className={'mobile-layout'}
             // onMouseMove={(event) =>
             //     newCoordinates(event.clientX, event.clientY)}
        >
            <div className={`mobile-layout__background-video ${openMenu ? "mobile-layout__background-video-hide" : ""}`}>
                <video
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    webkit-playsinline={true}
                    playsInline="playsInline"
                    poster={"./poster-background-mobile.jpg"}
                >
                    <source src={"./video-background-mobile.webm"}/>
                </video>
            </div>
            <div className={'mobile-layout__background mobile-grid'}>
                <div className={'mobile-grid__wrapper'}>

                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__r-block'} />

                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__r-block'} />

                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__r-block'} />

                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__r-block'} />

                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__m-block'} />
                    <div className={'background-grid__r-block'} />

                    <div className={'background-grid__b-block'} />
                    <div className={'background-grid__b-block'} />
                    <div className={'background-grid__l-block'} />
                </div>
            </div>
            <div className={`mobile-layout__menu-container mobile-menu ${openMenu ? "mobile-menu-show" : ""}`}>
                <div className={'mobile-layout__menu-content'}>
                    <MainMenu />
                    <div className={'mobile-layout__video'}>
                        <a href={'#'} className={'mobile-layout__video-wrapper'}>
                            <div className={'mobile-layout__img'} />
                            <div className={'mobile-layout__play'}>
                                <div className={'mobile-layout__play-arrow'} />
                            </div>
                        </a>
                    </div>

                    <ul className={'info-area-mobile__letters'}>
                        <li><span>FB</span></li>
                        <li><span>IN</span></li>
                        <li><span>TW</span></li>
                        <li><span>Y</span></li>
                    </ul>

                </div>


            </div>

            <div className={`mobile-layout__market-footer ${openMenu ? "mobile-layout__market-footer-hide" : ""}`} >
                { location.pathname === "/" && (
                    <>
                        <div className={'mobile-layout__market-blue'} ></div>
                        <div className={'mobile-layout__market-yellow'} ></div>
                    </>
                )}

                <a href={"#"} className={'mobile-layout__market'}>
                    <div className={'mobile-layout__market-text'} >OPEN MARKETPLACE</div>
                </a>
            </div>

            <Overlay openModal={openModal} closeModal={closeModal} />
            <div className={'mobile-layout__content'}>
                <div className={'mobile-layout__wrapper'}>
                    <div className={'mobile-layout__burger-menu burger-menu'}>
                        <div
                            role={'button'}
                            className={`burger-menu__button ${openMenu ? "burger-menu__button-open" : ""}`}
                            onClick={() => closeMenu(prevState => !prevState)}
                        />
                    </div>

                    <div className={'mobile-layout__logo logo-area-mobile'}>
                        <div className={'logo-area-mobile__left'}></div>
                        <div className={'logo-area-mobile__right'}></div>
                    </div>
                    {/*<div className={'mobile-layout__about-title title-header'}>mobile-layout</div>*/}
                    <div className={`mobile-layout__menu-title title-header-mobile ${!openMenu ? "title-header-mobile-hide" : ""}`}>
                        menu
                    </div>
                    <div className={'mobile-layout__info-title info-area title-header'}>
                        <div className={`info-area-mobile__coordinates ${openMenu ? "info-area-mobile__coordinates-hide" : ""}`}>
                            <p>{`${String(coordinates.x).substring(0,15)}: X`}</p>
                            <p>{`${String(coordinates.y).substring(0,15)}: Y`}</p>
                            <p>{`${String(coordinates.z).substring(0,15)}: Z`}</p>
                        </div>
                        {/*<ul className={'info-area__letters'}>*/}
                        {/*    <li><span>FB</span></li>*/}
                        {/*    <li><span>IN</span></li>*/}
                        {/*    <li><span>TW</span></li>*/}
                        {/*    <li><span>Y</span></li>*/}
                        {/*</ul>*/}
                    </div>
                    <div className={`mobile-layout__about-content about-content-mobile ${openMenu ? "about-content-mobile-hide" : ""}`}>
                        <div className={'about-content-mobile__image'} />
                        <div className={'about-content-mobile__title'}>
                            NFT
                            ICPLANETS
                        </div>
                    </div>
                    <div className={`mobile-layout__about-subtitle about-subtitle ${openMenu ? "about-subtitle-hide" : ""}`}>
                        <div className={'about-subtitle__text'}>
                            Unique animated NFT planets for
                            resource mining in the ICPlanets Metaverse
                        </div>
                    </div>

                    <div className={`mobile-layout__footer-info2 footer-info2-mobile  ${openMenu ? "footer-info2-mobile-hide" : ""}`}>
                        ICPlanets consider this internet computer blockchain the best technology with infinity potential at the moment, which certainly opens up unlimited opportunities for us to create Metaverse and advanced technologies with minimal resource costs and potentially safe for the enviroment.
                    </div>
                    <div className={'mobile-layout__copyright copyright-area-mobile'}>
                        COPYRIGHT © 2022 NFT ICPLANETS
                    </div>
                </div>
            </div>
        </div>
    )
}