import "./styles.css";
import Header from "./Header"
import ItemList from "./ItemList"
import SearchBar from "./SearchBar"
import { useFetchItems } from "./Hooks";
import Cart from "./Cart";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDescription from "./ItemDescription";

export default function App() {
  const { items } = useFetchItems();
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const index = prevCartItems.findIndex((cartItem) => cartItem.id === item.id);
      if (index === -1) {
        return [...prevCartItems, { ...item, qty: item.qty || 1 }];
      } else {
        return prevCartItems.map((cartItem, i) =>
          i === index ? { ...cartItem, qty: cartItem.qty + (item.qty || 1) } : cartItem
        );
      }
    });
  };

  const incrementQuantity = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((cartItem) =>
          cartItem.id === id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem
        )
        .filter((cartItem) => cartItem.qty > 0)
    );
  };

  const deleteItem = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== id)
    );
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };
  
  return ( 
  <>
  <Router>
    <div className="container">
      <Header qty={totalItems}/>
      <SearchBar onSearch={handleSearch} query={query}/>
        <Routes>
            <Route path="/" element={<ItemList query={query} items={items} />} />
            <Route path="/desc/:id" element={<ItemDescription 
            handleAddToCart={handleAddToCart}/>} />
            <Route path="/cart" element={
              <Cart 
              cartItems={cartItems} 
              incrementQuantity={incrementQuantity} 
              decrementQuantity={decrementQuantity} 
              deleteItem={deleteItem}
              />} />
        </Routes>
      
    </div>
    </Router>
  </>
  )
}