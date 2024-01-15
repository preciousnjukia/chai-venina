import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../App.css';

function Menu() {
  const [menuFoods, setMenuFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const filteredFoods = menuFoods.filter(food =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMenuFoods(filteredFoods);
  };

  useEffect(() => {
    fetch('http://127.0.0.1:5000/dishes')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setMenuFoods(data);
      });
  }, []);

  const handleAddToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <div className='home-container'>
      {/* Navbar code was removed */}
      <div className="search">
        <input
          type="text"
          placeholder="Search favorite foods..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className='search-button' onClick={handleSearch}>Search</button>
      </div>
      <div className='container'>
        <div className='cards-container'>
          {menuFoods.map(food => (
            <div key={food.id}>
              <img className='images' src={food.image} alt={food.name} />
              <h3>{food.name}</h3>
              <p>{food.description}</p>
              <button className='add-to-cart-button' onClick={() => handleAddToCart(food)}>
                Order
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='cart'>
        <Link to={{ pathname: '/cart', state: { cart: cart } }} className='cart-link'>
          <FiShoppingCart />Cart({cart.length})
        </Link>
      </div>
    </div>
  );
}

export default Menu;