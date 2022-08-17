import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProvider";
import styles from "./search.module.css"


function Search({filter}) {
    const dispatch = useProductsActions();
    const changeHandler = (e) => {
        dispatch({type : "filter" , selectedOption : filter})
        dispatch({type : "search" , event : e});
    }
    return ( 
        <div className={styles.formControl}>
            <span>search for</span>
            <input type="text" onChange={(e) => changeHandler(e)} placeholder="Search for ..."></input>
        </div>
     );
}

export default Search;