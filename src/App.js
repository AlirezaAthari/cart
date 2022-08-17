import React from "react";
import "./app.css"
import NavBar from "./Components/NavBar/NavBar";
import ProductsList from "./Components/ProductsList/ProductsList";
import Wrapper from "./Components/Wrapper/Wrapper";
import ProductsProvider from "./Components/Providers/ProductsProvider";
import Filter from "./Components/Filter/Filter";

const App = () => {
    return (
      <>
        <ProductsProvider>
          <NavBar/>
          <Filter/>
          <ProductsList/>
        </ProductsProvider>
      </>
    )
}

export default Wrapper(App , "container");
