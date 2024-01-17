import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TrackingPage from './TrackingPage';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();

    // Process the payment logic here

    // Reset the payment method after processing
    setPaymentMethod('');
  };

  return (
    <div>
      {/* Header */}
      <div className="navbar">
        {/* Include the NavBar component */}
      </div>
      <div className="payment-page">
        <h2>Payment</h2>
        <form onSubmit={handlePaymentSubmit}>
          <div>
            <label>
              <input
                type="radio"
                value="credit_card"
                checked={paymentMethod === 'credit_card'}
                onChange={handlePaymentMethodChange}
              />
              Credit Card
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={handlePaymentMethodChange}
              />
              PayPal
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="stripe"
                checked={paymentMethod === 'stripe'}
                onChange={handlePaymentMethodChange}
              />
              Stripe
            </label>
          </div>
          <button type="submit" disabled={!paymentMethod}>
            Pay Now
          </button>
          <Link to="/tracking">
        <button className="pay-now">
           Pay on Delivery 
        </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;