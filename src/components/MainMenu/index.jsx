import React from 'react';

import './MainMenu.scss'
import {Link, useLocation} from "react-router-dom";

export default function MainMenu() {
    const location = useLocation();

    return (
        <div className={'main-menu'}>
            <ul className={'main-menu__container'}>
                <Link to={'/'}>
                    <li
                        className={`main-menu__item ${location.pathname === '/' ? 'main-menu__item-active' : ''}`}>
                        About<span>01</span>
                    </li>
                </Link>
                <Link to={'/gallery'}>
                    <li
                        className={`main-menu__item ${location.pathname === '/gallery' ? 'main-menu__item-active' : ''}`}>
                        Gallery<span>02</span>
                    </li>
                </Link>
                <Link to={'/road-map'}>
                    <li
                        className={`main-menu__item ${location.pathname === '/road-map' ? 'main-menu__item-active' : ''}`}>
                        Roadmap<span>03</span>
                    </li>
                </Link>
                <Link to={'/'}>
                    <li className={'main-menu__item'}>Showreal<span>04</span></li>
                </Link>
            </ul>
        </div>
    )
}