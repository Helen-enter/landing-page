import React from 'react';
import c from './Skill.module.scss';

type SkillPropsType = {
    title: string
    description: string
    image: any
}

function Skill(props: SkillPropsType) {
    return (
        <div className={c.skill}>
            <div className={c.icon} style={props.image}>
            </div>
            <h3>{props.title}</h3>
            <span className={c.description}>
                {props.description}
            </span>
        </div>
    );
}

export default Skill;