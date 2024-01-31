import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import mpesaLogo from './images/mpesa-logo.png';
import cashLogo from './images/cash-logo.png';
import paypalLogo from './images/paypal-logo.png';
import binanceLogo from './images/binance-logo.png';
import visaLogo from './images/visa-logo.png';
import Navbar from './Navbar';
import Footer from './Footer';


const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [redirect, setRedirect] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedPayment === 'mpesa') {
      setRedirect('/mpesa_payment');
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

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
    <Navbar />
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="cards-container">
          <div className="card-payment-options">
            <p>Select a payment option:</p>
          <div className="payment-options">
            <input
              type="radio"
              id="mpesa"
              name="paymentMethod"
              value="mpesa"
              checked={selectedPayment === 'mpesa'}
              onChange={handlePaymentChange}
              required
            />
            <label htmlFor="mpesa">
              <img src={mpesaLogo} alt="Mpesa" /> M-pesa
            </label>
          </div>
          <div className="other-option">
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={selectedPayment === 'cash'}
              onChange={handlePaymentChange}
              required
            />
            <label htmlFor="cash">
              <img src={cashLogo} alt="Cash" /> Cash
            </label>
          </div>
          <div className="other-option">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={selectedPayment === 'paypal'}
              onChange={handlePaymentChange}
              required
            />
            <label htmlFor="paypal">
              <img src={paypalLogo} alt="PayPal" /> PayPal
            </label>
          </div>
          <div className="other-option">
            <input
              type="radio"
              id="binance"
              name="paymentMethod"
              value="binance"
              checked={selectedPayment === 'binance'}
              onChange={handlePaymentChange}
              required
            />
            <label htmlFor="binance">
              <img src={binanceLogo} alt="Binance" /> Binance
            </label>
          </div>
          <div className="other-option">
            <input
              type="radio"
              id="visa"
              name="paymentMethod"
              value="visa"
              checked={selectedPayment === 'visa'}
              onChange={handlePaymentChange}
              required
            />
            <label htmlFor="visa">
              <img src={visaLogo} alt="Visa" /> Visa
            </label>
          </div>
        </div>

        <div className="card">
        <div className="delivery-address-form">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            style={{fontFamily:'Times New Roman', fontSize:"13px"}}
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
            style={{fontFamily:'Times New Roman', fontSize:"13px"}}
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
            style={{fontFamily:'Times New Roman', fontSize:"13px"}}
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
            style={{fontFamily:'Times New Roman', fontSize:"13px"}}
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
            style={{fontFamily:'Times New Roman', fontSize:"13px"}}
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
            style={{fontFamily:'Times New Roman', fontSize:"13px"}}
            id="notes"
            name="notes"
            className="form-input"
            placeholder="Anything we should know before entering your property"
          />
        </div>

        <div className="buttons-container">
          <button type="submit" className="continue-shopping" to={selectedPayment === 'mpesa' ? '/mpesa-payment' : '#'}>
            Pay Now
          </button>
          <Link to="/tracking">
            <button className="continue-shopping">
            Pay on Delivery
            </button>
          </Link>
        </div>
        </div>
        </div>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default PaymentPage;