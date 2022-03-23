import React from "react";
import c from './Contract.module.scss'
import styleContainer from "../Common/styles/Common.module.css";
import {Bounce} from "react-awesome-reveal";

export const Contract = () => {
    return (
        <div className={c.contractBlock} id={'contacts'}>
            <div className={`${styleContainer.container} ${c.contractContainer}`}>
                <Bounce>
                    <div className={c.table}>
                        <h3>Рассматриваю варианты удаленной работы</h3>
                        <button type={"submit"}><strong>Написать</strong></button>
                    </div>
                </Bounce>
            </div>
        </div>
    )
}