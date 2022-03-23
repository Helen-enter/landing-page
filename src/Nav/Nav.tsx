import React from 'react';
import c from './Nav.module.scss';

function Nav() {
    return (
            <div className={c.nav}>
                <a href="#main">Главная</a>
                <a href="#skills">Скиллы</a>
                <a href="#projects">Проекты</a>
                <a href="#contacts">Контакты</a>
            </div>
    );
}

export default Nav;