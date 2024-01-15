import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';

function CartPage() {
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

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
    calculateTotal();
  }, [calculateTotal]);

  function decreaseQuantity(item) {
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        const updatedQuantity = cartItem.quantity - 1;
        return { ...cartItem, quantity: updatedQuantity > 0 ? updatedQuantity : 0 };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
  }

  function increaseQuantity(item) {
    const updatedCartItems = cartItems.map(cartItem => {
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
      <div className="confirmation-dialog">
        <p>Are you sure you want to remove this item from the cart?</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    );
  }

  function removeItem(item) {
    setConfirmRemove(true);
    setItemToRemove(item);
  }

  function handleConfirmRemove() {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
    setConfirmRemove(false);
    alert('Item removed successfully.');
  }

  function handleCancelRemove() {
    setConfirmRemove(false);
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>MY CART</h2>
        <p>You haven't made any orders yet.</p>
        <Link to="/menu">
          <button onClick={() => navigate('/menu')}>Order Now</button>
        </Link>
      </div>
    );
  }

  return (
    <Router>
      <div className="cart-page">
        <h2>MY CART</h2>

        <div className="cart-container">
          {cartItems.map(item => (
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
                  <button className="remove-button" onClick={() => removeItem(item)}> Remove </button>
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
          <button className="pay-now">Pay Now</button>
          <button className="pay-later">Pay on Delivery</button>
        </div>

        {confirmRemove && (
          <ConfirmationDialog
            onConfirm={handleConfirmRemove}
            onCancel={handleCancelRemove}
          />
        )}
      </div>
    </Router>
  );
}

export default CartPage;