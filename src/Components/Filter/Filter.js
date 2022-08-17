import { useState } from "react";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";
import styles from "./filter.module.css"
import SelectContainer from "../Select/SelectComponent";
import Search from "../Search/Search";

const filterOptions = [
    {value : "" , label : "All"},
    {value : "XS" , label : "XS"},
    {value : "S" , label : "S"},
    {value : "M" , label : "M"},
    {value : "L" , label : "L"},
    {value : "XL" , label : "XL"},
    {value : "XXL" , label : "XXL"},
];

const sortOptions = [
    {value : "Highest" , label : "Highest"},
    {value : "Lowest" , label : "Lowest"},
]




function Filter() {
    const dispatch = useProductsActions();
    const [sortValue , setSortValue] = useState("");
    const [filterValue , setFilterValue] = useState("");
    const sortChangeHandler = (selectedOption) =>  {
        dispatch({type : "sort" , selectedOption});
        setSortValue(selectedOption);
    }
    const filterChangeHandler = (selectedOption) =>  {
        dispatch({type : "filter" , selectedOption});
        dispatch({type : "sort" , selectedOption : sortValue});
        setFilterValue(selectedOption);
    }
    return ( 
    <>
        <Search filter={filterValue}/>
        <div className={styles.filter}>
            <div className={styles.item}>
                <p>filter products based on :</p>
            </div>
            <div className={styles.item}>
                <SelectContainer onChange={(e) => filterChangeHandler(e)} value={filterValue} options = {filterOptions} title = "order by"></SelectContainer>
                <SelectContainer onChange={(e) => sortChangeHandler(e)} value={sortValue} options = {sortOptions} title = "sort by"></SelectContainer>
            </div>
        </div>
    </>
     );
}

export default Filter;