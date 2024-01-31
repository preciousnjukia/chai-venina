/*import React from 'react';
import breakfast from '../assets/Toast.png';
import lunch from '../assets/RiceCurry.png';
import soup from '../assets/PumpkinSoup.png';
import { useNavigate } from 'react-router-dom';


const TodaysSpecialSection = () => {
  const cardsData = [
    {
      id: 1,
      image: breakfast,
      title: 'Breakfast',
      description: 'Toast served alongside African Tea and fruit salad',
      price: 500
    },
    {
      id: 2,
      image: lunch,
      title: 'Lunch',
      description: 'Rice and coconut chicken curry offered with fresh juice',
      price: 1050
    },
    {
      id: 3,
      image: soup,
      title: 'Soup of the day',
      description: 'Pumpkin soup and other descriptions',
      price: 450
    },
  ];

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/cart`);
  };

  return (
    <>
      <section>
        <div className="todays-special-heading">
          <h3>Today's Special</h3>
        </div>
      </section>
      <div className="app">
        {showNotification && (
          <div className="notificationS">Item added to cart!</div>
        )}
        <div className="card-section">
          {menuItems.map((item) => (
            <div className="card" key={item.id}>
              <Link to={'/cart'} onClick={(event) => handleAddToCart(item, event)}>
                <img className="images" src={item.image} alt={item.name} />
              </Link>
              <h3>{item.name}</h3>
              <p>Kshs {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default TodaysSpecialSection;*/

/*import React, { useState, useEffect } from "react";
import { ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import HomeFooter from "./HomeFooter";

function TodaysSpecialSection() {
  const [menuFoods, setMenuFoods] = useState([]);
  const savedCart = localStorage.getItem("cart");
  const [originalMenuFoods, setOriginalMenuFoods] = useState([]);
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [showNotification, setShowNotification] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setMenuItems(originalMenuItems);
      return;
    }
    const filteredFoods = originalMenuFoods.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    useEffect(() => {
      console.log(savedCart);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }, []);

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
      fetch("http://127.0.0.1:5000/dishes")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const threeMenuItems = data.slice(0, 3);
          setMenuFoods(filteredFoods);

          setMenuFoods(threeMenuItems);
          setOriginalMenuFoods(threeMenuItems);
        })
        .catch((error) => {
          console.error("Error fetching menu:", error);
        });
    }, []);

    const handleAddToCart = (item) => {
      const existingCartItem = cart.find((cartItem) => cartItem.id === item.id);
      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        const updatedCart = cart.map((cartItem) =>
          cartItem.id === item.id ? updatedCartItem : cartItem
        );
        setCart(updatedCart);
        console.log(cart);
      } else {
        const updatedItem = { ...item, quantity: 1 };
        setCart([...cart, updatedItem]);
        console.log(cart);
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
      <>
        <div>{<Navbar />}</div>
        <div className="todays-special-heading">
          <h3>Today's Special</h3>
        </div>
        <div className="card-section">
          {menuFoods.map((food) => (
            <div key={food.id}>
              <img className="images" src={food.image} alt={food.name} />
              <h3>{food.name}</h3>
              <p>{food.description}</p>
              <p>Kshs {food.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(food)}
              >
                Order
              </button>
            </div>
          ))}
          {showNotification && (
            <div className="home-container">
              <div className="notification">Item added to cart!</div>
            </div>
          )}
        </div>
      </>
    );
  };
}

export default TodaysSpecialSection;*/

import React, { useState, useEffect } from "react";
import "../App.css";


function TodaysSpecialSection() {
  const [menuItems, setMenuItems] = useState([]);
  const savedCart = localStorage.getItem("cart");
  const [originalMenuItems, setOriginalMenuItems] = useState([]);
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [showNotification, setShowNotification] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(savedCart);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Error parsing savedCart:", error);
      }
    }
  }, []);
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setMenuItems(originalMenuItems);
      return;
    }
    const filteredFoods = originalMenuItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMenuItems(filteredFoods);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/dishes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const threeMenuItems = data.slice(0, 3);
        /*setMenuItems(threeMenuItems);
        setOriginalMenuItems(threeMenuItems);*/
        setMenuItems([...threeMenuItems]);
        setOriginalMenuItems([...threeMenuItems]);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
      });
  }, []);

  const handleAddToCart = (item, event) => {
    event.preventDefault();
    const existingCartItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? updatedCartItem : cartItem
      );
      setCart(updatedCart);
      console.log(cart);
    } else {
      const updatedItem = { ...item, quantity: 1 };
      setCart([...cart, updatedItem]);
      console.log(cart);
    }
    setShowNotification(true);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
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
    <>
      <section>
        <div className="todays-special-heading">
          <h3>Today's Special</h3>
        </div>
      </section>
      <div className="app">
        {showNotification && (
          <div className="notificationS">Item added to cart!</div>
        )}
        <div className="card-section">
          {menuItems.map((item) => (
            <div className="cards" key={item.id}>
              <a href="#" onClick={(event) => handleAddToCart(item, event)}>
                <img className="images" src={item.image} alt={item.name} />
              </a>
              <h3>{item.name}</h3>
              <p>Kshs {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default TodaysSpecialSection;
