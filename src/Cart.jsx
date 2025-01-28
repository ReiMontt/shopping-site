export default function Cart({ cartItems, incrementQuantity, decrementQuantity, deleteItem }) {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  
    if (cartItems.length === 0) {
      return (
        <div className="cart-wrapper-empty">
          <div className="empty-cart">Your cart is empty.</div>
        </div>
      );
    }
  
    return (
      <div className="cart-wrapper">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="cart-item">
                <td>
                  <div className="product-info">
                    <div className="cart-img">
                      <img src={item.image} alt={item.title} loading="lazy"/>
                    </div>
                    <div>{item.title}</div>
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <div className="cart-qty">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <div>{item.qty}</div>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                </td>
                <td>${(item.price * item.qty).toFixed(2)}</td>
                <td>
                  <button onClick={() => deleteItem(item.id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-total">
          <div>Total</div>
          <div>${totalPrice.toFixed(2)}</div>
        </div>
        <div className="cart-btn">
          <button>Checkout</button>
        </div>
      </div>
    );
  }
  