import React, { useState } from 'react';
import mpesaLogo from './images/mpesa-logo.png';
import cashLogo from './images/cash-logo.png';
import paypalLogo from './images/paypal-logo.png';
import binanceLogo from './images/binance-logo.png';
import visaLogo from './images/visa-logo.png';
import { Link } from 'react-router-dom';


const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedPayment === 'mpesa') {
      alert('Please make payment to Mpesa Till Number 707070.');
    } else if (selectedPayment === 'cash') {
      alert('Please make payment upon delivery.');
    } else if (selectedPayment === 'paypal') {
      window.location.href = 'https://www.paypal.com/signin';
    } else if (selectedPayment === 'binance') {
      window.location.href = 'https://accounts.binance.com/en/login?gclid=EAIaIQobChMI7ZvOsvOZgwMVfopoCR06AwmyEAAYASAAEgI42_D_BwE&ref=804491327';
    } else if (selectedPayment === 'visa') {
      window.location.href = 'https://www.visaonline.com/login/';
    }
    console.log('Payment submitted');
    };    

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-options">
          {['mpesa', 'cash', 'paypal', 'visa', 'binance'].map((paymentOption) => (
            <div key={paymentOption} className="other-option">
              <input
                type="radio"
                id={paymentOption}
                name="paymentMethod"
                value={paymentOption}
                checked={selectedPayment === paymentOption}
                onChange={handlePaymentChange}
                required
              />
              <label htmlFor={paymentOption}>
                <img src={getImageSource(paymentOption)} alt={paymentOption} />
              </label>
            </div>
          ))}
        </div>

        <div className="delivery-address-form">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="form-input"
            placeholder="Nairobi/Mombasa"
            required
          />

          <label htmlFor="area" className="form-label">
            Area:
          </label>
          <input
            type="text"
            id="area"
            name="area"
            className="form-input"
            placeholder="CBD/Upperhill/Westlands/Fedha/Kikuyu"
            required
          />

          <label htmlFor="street" className="form-label">
            Street:
          </label>
          <input
            type="text"
            id="street"
            name="street"
            className="form-input"
            placeholder="Monrovia, UtaliiAve"
            required
          />

          <label htmlFor="building" className="form-label">
            Building:
          </label>
          <input
            type="text"
            id="building"
            name="building"
            className="form-input"
            placeholder="GTC, Mirage, KICC, Chancery, UAP"
            required
          />

          <label htmlFor="room" className="form-label">
            Room:
          </label>
          <input
            type="text"
            id="room"
            name="room"
            className="form-input"
            placeholder="Room No. House No. Office Name"
            required
          />

          <label htmlFor="notes" className="form-label">
            Notes:
          </label>
          <textarea
            id="notes"
            name="notes"
            className="form-input"
            placeholder="Anything we should know before entering your property"
          />
        </div>

        <div className="buttons-container">
          <button type="submit" className="button full-width">
            Pay Now
          </button>
          <Link to="/tracking">
            <button className="button full-width">Pay on Delivery</button>
          </Link>
        </div>
      </form>
      </div>
  );
};

const getImageSource = (paymentOption) => {
  switch (paymentOption) {
    case 'mpesa':
      return mpesaLogo;
    case 'cash':
      return cashLogo;
    case 'paypal':
      return paypalLogo;
    case 'visa':
        return visaLogo; 
    case 'binance':
      return binanceLogo;
    default:
      return '';
  }
};

export default PaymentPage;