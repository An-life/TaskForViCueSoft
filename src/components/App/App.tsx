import React from 'react';

import {Route, Routes, useNavigate} from 'react-router-dom';

import {Main} from "../Main/Main";
import {Product} from "../Product/Product";
import  logo from "./../../assets/logo.png";

import styles from "./styles.module.scss";


const routes = [
    {
        path: `/`,
        element: <Main/>,
    },
    {
        path: `/:id`,
        element: <Product/>,
    },
];




function App() {
    let navigate = useNavigate();

    const handlerLogoClick=()=>{
        navigate(`/`);
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <h1 onClick={handlerLogoClick}>
                    <img src={logo} alt="logo" className={styles.logo}/>
                </h1>
                <div>
                    <input/>
                    <button type="submit"></button>
                </div>

            </div>
            <Routes>
                {routes.map(({path, element}) => (
                    <Route element={element} path={path} key={path}/>
                ))}
            </Routes>
        </div>
    )
}

export default App;
