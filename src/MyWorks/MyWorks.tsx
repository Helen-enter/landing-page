import React from "react";
import styleContainer from './../../src/Common/styles/Common.module.css'
import {Work} from "./work/Work";
import c from './MyWorks.module.scss'
import social from "../assets/image/net.jpg";
import todo from "../assets/image/todo.jpg";
import {Bounce} from "react-awesome-reveal";

export const MyWorks = () => {
    const socialImage = {
        backgroundImage: `url(${social})`,
    };
    const todoImage = {
        backgroundImage: `url(${todo})`,
    };
    return (
        <div className={c.myWorksBlock} id={'projects'}>
            <div className={styleContainer.container}>
                <div className={c.title}>
                    <h2>Projects</h2>
                    <div className={c.works}>
                        <Bounce>
                        <Work style={socialImage}
                              description={'Todolist'}/>
                        <Work style={todoImage}
                              description={'Social network'}/>
                        </Bounce>
                    </div>
                </div>
            </div>
        </div>

    )
}