import React from "react";
import c from './Skills.module.scss';
import styleContainer from './../../src/Common/styles/Common.module.css'
import Skill from "./skill/Skill";
import js from "../assets/image/js.png";
import css from "../assets/image/css.png"
import html from "../assets/image/html.png"
import {Bounce} from "react-awesome-reveal";

function Skills() {
    const jsImage = {
        backgroundImage: `url(${js})`,
    };

    const cssImage = {
        backgroundImage: `url(${css})`,
    };

    const htmlImage = {
        backgroundImage: `url(${html})`,
    };
    return (
        <div className={c.skillsBlock} id={'skills'}>
            <Bounce>
                <div className={`${styleContainer.container} ${c.skillsContainer}`}>
                    <h2 className={c.title}>Skills</h2>
                    <div className={c.skills}>
                        <Skill title={'JS'} description={'нативный js и фреймворки'}
                               image={jsImage}/>
                        <Skill title={'HTML'} description={'использование DOM-элементов по методологии БЭМ'}
                               image={htmlImage}/>
                        <Skill title={'CSS'} description={' адаптивная верстка и верстка pixel perfect'}
                               image={cssImage}/>
                    </div>
                </div>
            </Bounce>
        </div>
    );
}

export default Skills;