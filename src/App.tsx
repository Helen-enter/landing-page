import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import {MyWorks} from "./MyWorks/MyWorks";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {Contract} from "./Contract/Contract";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Contract/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
