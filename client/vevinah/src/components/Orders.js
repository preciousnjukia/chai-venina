import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


function Orders() {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();
  const cart = location.state ? location.state.cart : [];

  const calculateTotal = useCallback(() => {
    let subtotal = 0;

    for (let i = 0; i < cartItems.length; i++) {
      const price = cartItems[i].price;
      const quantity = cartItems[i].quantity;

      subtotal += price * quantity;
    }

    setTotal(subtotal.toFixed(2));
    setSubtotal(subtotal.toFixed(2));
  }, [cartItems]);

  useEffect(() => {
    setCartItems(cart);
    calculateTotal();
  }, [cart, calculateTotal]);

  function decreaseQuantity(item) {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        const updatedQuantity = cartItem.quantity - 1;
        return { ...cartItem, quantity: updatedQuantity > 0 ? updatedQuantity : 0 };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
  }

  function increaseQuantity(item) {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        const updatedQuantity = cartItem.quantity + 1;
        return { ...cartItem, quantity: updatedQuantity };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
  }

  const [confirmRemove, setConfirmRemove] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  function ConfirmationDialog({ onConfirm, onCancel }) {
    return (
      <div className="confirmation-dialog-container">
        <div className="confirmation-dialog">
          <p className="confirmation-message">Are you sure you want to remove this item from the cart?</p>
          <div className="confirmation-buttons">
            <button className="confirmation-button confirm" onClick={onConfirm}>Yes</button>
            <button className="confirmation-button cancel" onClick={onCancel}>No</button>
          </div>
        </div>
      </div>
    );
  }

  function handleRemoveItem(item) {
    setConfirmRemove(true);
    setItemToRemove(item);
  }

  function handleConfirmRemove() {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
    setConfirmRemove(false);
  }

  function handleCancelRemove() {
    setConfirmRemove(false);
  }

  useEffect(() => {
    console.log("cartItems:", cartItems);
  }, [cartItems]);

  const navigate = useNavigate();

  function handlePayNow() {
    // Check if the user is signed in
    const isLoggedIn = true; // Replace with actual logic to check if user is signed in

    if (isLoggedIn) {
      // User is signed in, proceed to checkout
      navigate('/payment');
    } else {
      // User is not signed in, redirect to register page
      navigate('/sign_up');
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="navbar">
        {/* Include the NavBar component */}
      </div>
      <div className="cart-page">
        <h2>MY CART</h2>

        <div className="cart-container">
        {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} className="cart-image" />
              </div>
              <div className="item-details">
                <div className="item-name">Item: {item.name}</div>
                <div className="item-description">{item.description}</div>
                <div className="item-price">Kshs {item.price}</div>
                <div className="item-actions">
                  <button onClick={() => decreaseQuantity(item)}> - </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)}> + </button>
                  <span className="vertical-line"></span>
                  <button className="remove-button" onClick={() => handleRemoveItem(item)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-item">
            <span className="summary-label">Sub total:</span>
            <span className="summary-value">{subtotal}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Delivery charges:</span>
            <span className="summary-value">69</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">TOTAL:</span>
            <span className="summary-value">{total}</span>
          </div>
          <div className="summary-note">
            * Delivery charges will be applicable based on your chosen address
          </div>
        </div>

        <div className="payment-options">
        <Link to="/menu">
            <button className="continue-shopping">Continue Shopping</button>
          </Link>
        <Link to="/sign_up">
        <button className="pay-now" onClick={handlePayNow}>
           Signin and Pay 
        </button>
          </Link>
        </div>
      </div>

      {confirmRemove && (
        <ConfirmationDialog onConfirm={handleConfirmRemove} onCancel={handleCancelRemove} />
      )}
    </div>
  );
}

export default Orders;