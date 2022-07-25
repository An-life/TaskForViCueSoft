import {useParams} from "react-router-dom";
import {useGetBeerByIdQuery} from "../../api/beerApi";
import {LoaderContainer} from "../Loader/LoaderContainer";

import styles from "./styles.module.scss";

export const Product = () => {

    const {id} = useParams();
    const {data, isFetching} = useGetBeerByIdQuery(Number(id));

    return (<LoaderContainer isLoading={isFetching}>
            <div className={styles.container}>
                {data && <div>
                    <div className={styles.mainInfo}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.wrapper}>
                                <img src={data[0].image_url} alt="image" className={styles.image}/>
                            </div>
                        </div>
                        <div className={styles.title}>
                            <h2>{data[0].name}</h2>
                            <div>{data[0].tagline}</div>
                            <div>ABV: {data[0].abv}%</div>
                        </div>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>{data[0].description}</div>
                        <div className={styles.foodPairing}>
                            <h3>Food pairing:</h3>
                            {data[0].food_pairing.map(item => <div key={item}>{item}</div>)}
                        </div>
                    </div>
                </div>
                }
            </div>
        </LoaderContainer>
    )
}