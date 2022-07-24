import React, {useEffect, useState} from "react";

import {useNavigate} from 'react-router-dom';
import ReactPaginate from "react-paginate";

import {IBeersResponse, useGetBeersQuery} from "../../api/beerApi";
import {ProductCard} from "../ProductCard/ProductCard";
import {itemsPerPage, marginPagesDisplayed, pageRangeDisplayed} from "./constants";
import {LoaderContainer} from "../Loader/LoaderContainer";

import styles from "./styles.module.scss";

export const Main = () => {
    let {data, isFetching} = useGetBeersQuery();
    let navigate = useNavigate();

    const [currentItems, setCurrentItems] = useState<Array<IBeersResponse>>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        if (data) {
            setCurrentItems(data.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(data.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event: any) => {
        if (data) {
            const newOffset = (event.selected * itemsPerPage) % data.length;
            setItemOffset(newOffset);
        }
    };

    const handleCardClick = (id: number) => {
        navigate(`/${id}`);
    }

    return (<LoaderContainer isLoading={isFetching}>
            <>
                <div className={styles.container}>
                    {data && currentItems.map(({id, name, image_url, description}) => <ProductCard
                        key={id}
                        name={name}
                        image={image_url}
                        description={description}
                        onClick={() => handleCardClick(id)}/>)}
                </div>
                <div className={styles.reposPagination}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={pageRangeDisplayed}
                        marginPagesDisplayed={marginPagesDisplayed}
                        pageCount={pageCount}
                        previousLabel="<"
                        containerClassName={styles.pagination}
                        pageClassName={styles.pageNum}
                        previousLinkClassName={styles.nextPage}
                        nextLinkClassName={styles.lastPage}
                        activeLinkClassName={styles.active}/>
                </div>
            </>
        </LoaderContainer>
    )
        ;
}