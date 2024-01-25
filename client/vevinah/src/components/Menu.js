// Menu.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [originalMenuItems, setOriginalMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setMenuItems(originalMenuItems);
      return;
    }

    const filteredItems = originalMenuItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMenuItems(filteredItems);
  };

  useEffect(() => {
    fetch('http://localhost:5000/dishes')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data);
        setOriginalMenuItems(data);
      })
      .catch((error) => {
        console.error('Error fetching menu:', error);
      });
  }, []);

  const navigate = useNavigate();


  const handleAddToCart = (item) => {
    const existingCartItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingCartItem) {
      const updatedCartItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? updatedCartItem : cartItem
      );
      setCart(updatedCart);
    } else {
      const updatedItem = { ...item, quantity: 1 };
      setCart([...cart, updatedItem]);
    }
  
    setShowNotification(true);
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showNotification]);

  return (
    <div>
      <div className="home-container">
        {showNotification && <div className="notification">Item added to cart!</div>}
        <div className="search">
          <input
            className="food-search"
            type="text"
            placeholder="Search favorite foods..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="container">
          <div className="cards-container">
            {menuItems.map((item) => (
              <div key={item.id}>
                <img className="images" src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Kshs {item.price}</p>
                <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
                  Order
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
