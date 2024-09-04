import React from 'react';
import './ProductList.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';
import { disableProductId } from './ProductSlice';


const ProductList = () => {
    const dispatch = useDispatch();
    //const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products

    const products = useSelector(state => state.products.products);
    const disabledProductIds = useSelector(state => state.products.disabledProductIds);

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));
    dispatch(disableProductId(product.id));
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product) => (
            <li key={product.id} 
            className="product-list-item">
                <span>{product.name} - ${product.price}</span>
                <button
                    className={`add-to-cart-btn ${disabledProductIds.includes(product.id) ? 'disabled' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={disabledProductIds.includes(product.id)} // Disable button if product is in disabledProducts
                >
                Add to Cart</button>
            </li>
        ))
        }
      </ul>
    </div>
  );
};

export default ProductList;
