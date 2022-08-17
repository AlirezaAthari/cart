import React, { useContext, useEffect, useReducer, useState} from "react";
import _, { cloneDeep } from "lodash";
import { productsData } from "../db/productsData";
import axios from "axios";

const Products = React.createContext();
const ProductsDispatcher = React.createContext();


const reducer = (state , action ) => {
    switch(action.type){
        case "change" :  { 
          const copiedProds = cloneDeep(state);
          const selectedProd = copiedProds.find((prod) => prod.id === action.id);
          selectedProd.name = action.event.target.value;
          return copiedProds ; 
        };

        case "remove" :  { 
          const copiedProds = cloneDeep(state)
          const filteredProds = copiedProds.filter((prod) => prod.id !== action.id);
          return filteredProds; 
        };

        case "increment" :  { 
          const copiedProds = cloneDeep(state);
          const selectedItem = copiedProds.find((prod) => prod.id === action.id);
          selectedItem.quantity++;
          return copiedProds ;
         };

        case "decrement" : { 
          const copiedProds = cloneDeep(state);
          const selectedItem = copiedProds.find((prod) => prod.id === action.id);
          if (+selectedItem.quantity === 1) {
            const filteredProds = copiedProds.filter(
              (prod) => prod.id !== action.id
            );
            return filteredProds;
          // this.removeHandler(id).bind(this);
          } else {
            selectedItem.quantity--;
            return copiedProds;
          }
        };

        case "filter" : { 
          const value = action.selectedOption.value;
          if(value === "") return productsData;
          else {
            // console.log(productsData);
            // console.log(value);
            // console.log(productsData.at(0).availableSizes.indexOf(value));
            const updatedProducts = productsData.filter(p => p.availableSizes.indexOf(value) >= 0);
            console.log(updatedProducts);
            return updatedProducts;
          }
        };

        case "sort" : { 
          let copiedProds = cloneDeep(state);
          const value = action.selectedOption.value;
          if(value === "Highest") {
          copiedProds = _.orderBy(copiedProds , ["price"] , ["asc"]);
          return copiedProds;
        }
          else { 
          copiedProds = _.orderBy(copiedProds , ["price"] , ["desc"]);
          return copiedProds;
        }
        };

        case "search" : {
          const value = action.event.target.value;
          if(value === "") return state;
          else {
            const matchedProducts = state.filter(p => (p.title.toLowerCase()).includes(value));
            return matchedProducts;
          }
          
        }

        default : return state;
    }
} 

function ProductsProvider({children}) {
    const [products , dispatch] = useReducer(reducer , productsData);
    return ( 
        <Products.Provider value = {products}>
            <ProductsDispatcher.Provider value = {dispatch}>
            {children}
            </ProductsDispatcher.Provider>
        </Products.Provider>
     );
}

export default ProductsProvider;

export const useProducts = () => useContext(Products);

export const useProductsActions = () => useContext(ProductsDispatcher);