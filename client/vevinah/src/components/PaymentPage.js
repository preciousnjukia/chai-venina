import React, { useState } from 'react';
import mpesaLogo from './images/mpesa-logo.png';
import cashLogo from './images/cash-logo.png';
import paypalLogo from './images/paypal-logo.png';
import binanceLogo from './images/binance-logo.png';
import visaLogo from './images/visa-logo.png';
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar';
import HomeFooter from './HomeFooter';
import PaymentForm from './PaymentForm'; 

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedPayment === 'mpesa') {
      // Instead of alert, render the PaymentForm component
      return <PaymentForm number={phoneNumber} amount={paymentAmount} />;
    } else if (selectedPayment === 'cash') {
      // Show alert or perform actions for Cash
      alert('Please make payment upon delivery.');
    } else if (selectedPayment === 'paypal') {
      // Redirect to PayPal login page
      window.location.href = 'https://www.paypal.com/signin';
    } else if (selectedPayment === 'binance') {
      // Redirect to Binance login page or perform Binance-specific actions
      window.location.href = 'https://accounts.binance.com/en/login?gclid=EAIaIQobChMI7ZvOsvOZgwMVfopoCR06AwmyEAAYASAAEgI42_D_BwE&ref=804491327';
    } else if (selectedPayment === 'visa') {
      // Redirect to Visa login page
      window.location.href = 'https://www.visaonline.com/login/';
    }

    console.log('Payment submitted');
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  return (
    <div className="payment-container">
      <Navbar />
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-options">
          <div className="other-option">
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
              <img src={mpesaLogo} alt="Mpesa" />
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
              <img src={cashLogo} alt="Cash" />
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
              <img src={paypalLogo} alt="PayPal" />
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
              <img src={binanceLogo} alt="Binance" />
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
              <img src={visaLogo} alt="Visa" />
            </label>
          </div>
        </div>
  
        {selectedPayment === 'mpesa' && (
          <div className="phone-input">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
        )}
  
        {selectedPayment === 'mpesa' && (
          <div className="amount-input">
            <label htmlFor="paymentAmount">Amount:</label>
            <input
              type="text"
              id="paymentAmount"
              name="paymentAmount"
              value={paymentAmount}
              onChange={handleAmountChange}
              required
            />
          </div>
        )}
        {/* Delivery address form */}
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
          <Link to="/tracking" className="button pay-on-delivery">
            Pay on Delivery
          </Link>
        </div>
      </form>
      <HomeFooter />
    </div>
  );
};

export default PaymentPage;