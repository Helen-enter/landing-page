import React from "react";
import c from './Work.module.scss'

type WorkPropsType = {
    style: any
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <div>
            <div className={c.workBlock} style={props.style}>
                <button className={c.button}>Смотреть</button>
            </div>
            <div className={c.description}><p>{props.description}</p></div>
        </div>
    )
}