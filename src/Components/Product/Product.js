import styles from "./product.module.css";

import { BiTrash } from "react-icons/bi";

const Product = ({product , onChange , onDec , onDelete , onInc}) => {
  return (
    <div className={styles.product}>
      <p>Name : {product.title} </p>
      <p>Price : {product.price} $</p>
      <span className={styles.value}>{product.quantity}</span>
      <button onClick={onDec} className={styles.button}>
        {+product.quantity === 1 ? ( <BiTrash />) : ("-")}
      </button>
      <button
        onClick={onInc}
        className={`${styles.button} ${styles.inc}`} >
        {("+")}
      </button>
      <button onClick={onDelete} className={styles.button}>
        delete
      </button>
    </div>
  );
};

export default Product;
