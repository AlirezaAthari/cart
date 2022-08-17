import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";

const ProductsList = () => {
  const products = useProducts();
  const dispatch = useProductsActions()
  const renderProducts = () => {
      if(products.length === 0) 
      return(
        <div>There is no item in the card</div>
      )
      return products.map((prod) => {
        return (
          <Product
            //   name={prod.name}
            //   price={prod.price}
            product={prod}
            key={prod.id}
            onDelete={() => dispatch({type : "remove" , id : prod.id})}
            onInc={() => dispatch({type : "increment" , id : prod.id})}
            onDec={() => dispatch({type : "decrement" , id : prod.id})}
            onChange={(e) => dispatch({type : "change" , id : prod.id , event : e})}
          />
        );
      })
    }
  return ( 
    <div>
        {!products.length && <div>Go to Shopping</div>}
        {renderProducts()}
    </div>
   );
}

export default ProductsList;