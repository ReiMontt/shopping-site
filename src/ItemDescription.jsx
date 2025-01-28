import { useFetchItem } from './Hooks';
import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function ItemDescription({ handleAddToCart }) {
    const { id } = useParams();
    const { item, loading, error } = useFetchItem(id);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddToCartClick = () => {
        if (item) {
            handleAddToCart({ ...item, qty: quantity });
        }
    };

    const handleBuyNow = () => {
        if (item) {
          handleAddToCart({ ...item, qty: quantity }); 
          navigate('/cart'); 
        }
      };


    return (
        <>  
            <div className="desc-container">
                {error && <div>{error}</div>}
                {item && !loading && !error && (
                    <div className="description-wrapper">
                        <div className="img-desc-wrapper">
                            <img src={item.image} alt={item.title} className="img-desc"/>
                        </div>
                        <div className="info-desc">
                            <div className='info-title'>{item.title}</div>
                            <div className='info-price'>${item.price.toFixed(2)}</div>
                            <div className='info-description'>{item.description}</div>
                            <div>
                            <div className='info-quantity'>Quantity</div>
                            <div className='cart-qty'>
                                <button onClick={decrementQuantity}>-</button>
                                <div>{quantity}</div>
                                <button onClick={incrementQuantity}>+</button>
                            </div>
                            </div>
                            <div className="cart-menu">
                                <button onClick={handleAddToCartClick} className='add-to-cart-btn'>Add to Cart</button>
                                <button onClick={handleBuyNow} className='buy-now-btn'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}