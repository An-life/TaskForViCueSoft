import React from "react";

import styles from "./styles.module.scss";

type Props = {
    name: string;
    image: string;
    description: string;
    onClick:()=>void;
}

export const ProductCard = ({ name, image, description, onClick}: Props) => {
    let text = '';
    if (description.length < 140) {
        text = description
    } else if (description.length > 140) {
        text = description.slice(0, 140) + '...'
    }

    return (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.imageContainer}>
            <img src={image} alt="image" className={styles.image}/>
            </div>
            <h2>{name}</h2>
            <div>{text}</div>
        </div>
    )
}