import React, {ChangeEvent, useState} from 'react';

import {Route, Routes, useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {Main} from "../Main/Main";
import {Product} from "../Product/Product";
import searchIcon from "./../../assets/icons/search.svg";
import logo from "../../assets/icons/logo.png";
import {useGetBeersQuery} from "../../api/beerApi";

import styles from "./styles.module.scss";

function App() {

    const routes = [
        {
            path: `/TaskForViCueSoft`,
            element: <Main/>,
        },
        {
            path: `/TaskForViCueSoft/:id`,
            element: <Product/>,
        },
    ];

    let navigate = useNavigate();
    let {data} = useGetBeersQuery();

    let [inputValue, setInputValue] = useState('');

    const handlerLogoClick = () => {
        navigate(`/TaskForViCueSoft`);
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const handleSubmit = () => {
        if (data) {
            const product = data.filter(product => product.name.toUpperCase() === inputValue.toUpperCase());
            product.length && navigate(`/TaskForViCueSoft/${product[0].id}`);
            product.length !== 0 && toast.success('Good choiсe!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setInputValue('')
            product.length === 0 && toast.warn('Enter correct name!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div className={styles.wrapper}>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={styles.inputWrapper}>
                <h1 onClick={handlerLogoClick}>
                    <img src={logo} alt="logo" className={styles.logo}/>
                </h1>
                <div className={styles.inputContainer}>
                    <input value={inputValue} className={styles.input} placeholder="Enter beer name..."
                           onChange={handleInputChange}/>
                    <button type="submit" className={styles.button}>
                        <img src={searchIcon} alt="search button"
                             className={styles.searchIcon}
                             onClick={handleSubmit}/>
                    </button>
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
