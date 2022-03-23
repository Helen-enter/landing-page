import React from "react";
import c from './Main.module.scss';
import styleContainer from './../../src/Common/styles/Common.module.css'
import Particles from "react-tsparticles";
import {Bounce} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";

function Main() {
    return (
        <div className={c.main} id={'main'}>
            <div className={c.containerParticles}>
                <Particles className={c.particles} options={{
                    "fps_limit": 60,
                    "fullScreen": {
                        "enable": false
                    },
                    "interactivity": {
                        "detectsOn": "canvas",
                        "events": {
                            "onClick": {"enable": true, "mode": "push"},
                            "onHover": {"enable": true, "mode": "repulse"},
                            "resize": true
                        },
                        "modes": {"push": {"particles_nb": 4}, "repulse": {"distance": 200, "duration": 0.4}}
                    },
                    "particles": {
                        "color": {"value": "#ffffff"},
                        "links": {"color": "#ffffff", "distance": 150, "enable": true, "opacity": 0.4, "width": 1},
                        "move": {
                            "bounce": false,
                            "direction": "none",
                            "enable": true,
                            "outMode": "out",
                            "random": false,
                            "speed": 2,
                            "straight": false
                        },
                        "number": {"density": {"enable": true, "area": 800}, "value": 80},
                        "opacity": {"value": 0.5},
                        "shape": {"type": "circle"},
                        "size": {"random": true, "value": 5}
                    },
                    "detectRetina": true
                }}/>
            </div>

            <div className={styleContainer.container}>
                <Bounce>
                    <div className={c.text}>
                        <span>Hi There</span>
                        <h1><span>I am</span> Elena Safonova</h1>
                        <p><ReactTypingEffect text={'Frontend developer'}/></p>
                    </div>
                    <div className={c.photo}>
                        <div className={c.image}>
                        </div>
                    </div>
                </Bounce>
            </div>
        </div>
    );
}

export default Main;