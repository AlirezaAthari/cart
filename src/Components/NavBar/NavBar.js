import { useContext } from "react";
import styles from "../Product/product.module.css";
import { useProducts } from "../Providers/ProductsProvider";
import navStyles from "./navBar.module.css"

const NavBar = () => {
        const products = useProducts();
        const itemsCount = products.reduce((acc , arr) => {
            return acc + +arr.quantity
        } , 0)
        return (
            <header className={navStyles.container}>
                <p className={`${navStyles.header} , ${navStyles.item}`}>fronhooks.ir shopping</p>
                <span className={`${styles.value} , ${navStyles.item}`}>{itemsCount}</span>
            </header>
        );
}
 
export default NavBar;