import React from "react";
import c from './Footer.module.scss'
import styleContainer from "../Common/styles/Common.module.css";

export const Footer = () => {
    return (
        <div className={c.footerBlock}>
            <div className={`${styleContainer.container} ${c.footerContainer}`}>
                <h3>Safonova Elena</h3>
                <ul className={c.table}>
                    <li><a href={"#"}>telegram</a></li>
                    <li><a href={"#"}>instagram</a></li>
                    <li><a href={"#"}>gmail</a></li>
                    <li><a href={"#"}>vk</a></li>
                </ul>
            </div>
        </div>

    )
}