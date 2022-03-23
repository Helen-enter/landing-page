import React from "react";
import c from './Contacts.module.scss'
import styleContainer from "../Common/styles/Common.module.css";
import {Bounce} from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <div className={c.contactsBlock}>
            <div className={styleContainer.container}>
                <Bounce>
                    <div>
                        <h2 className={c.title}>Contacts</h2>
                        <div className={c.formBlock}>
                            <form className={c.contacts}>
                                <input placeholder={'введите ваше имя'}/>
                                <input placeholder={'введите вашу фамилию'}/>
                                <textarea placeholder={'ваше предложение'}/>
                                <button type={'submit'}><strong>Send</strong></button>
                            </form>
                        </div>
                    </div>
                </Bounce>
            </div>
        </div>

    )
}