import React, { useState } from 'react';
import mpesaLogo from './images/mpesa-logo.png';
import cashLogo from './images/cash-logo.png';
import paypalLogo from './images/paypal-logo.png';
import binanceLogo from './images/binance-logo.png';
import visaLogo from './images/visa-logo.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import HomeFooter from './HomeFooter';

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [addressDetails, setAddressDetails] = useState({
    city: '',
    area: '',
    street: '',
    building: '',
    room: '',
    notes: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userEmail = 'user@example.com';
    const userId = await getUserId(userEmail);

    if (!userId) {
      console.error('User ID not available');
      return;
    }

    const paymentMethod = e.nativeEvent.submitter.name; // Get the name of the clicked button

    try {
      const response = await fetch('http://127.0.0.1:5000/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          payment_method: paymentMethod,
          ...addressDetails,
        }),
      });

      if (response.ok) {
        console.log('Address details submitted successfully');
        // Additional logic or redirection after successful submission
      } else {
        console.error('Failed to submit address details');
        // Handle the error
      }
    } catch (error) {
      console.error('Error during address submission:', error);
    }
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddressDetails({
      ...addressDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressValidation = () => {
    const isConfirmed = window.confirm('Have you confirmed the details of the address?');

    if (isConfirmed) {
      // Redirect to PaymentPage and highlight Pay Now button
      window.location.href = '/payment#pay-now';
    } else {
      // Redirect to PaymentPage and highlight the entire address container
      window.location.href = '/payment#address-container';
    }
  };

  return (
    <div>
      <Navbar />
      <div className="payment-container">
        <h2>Payment Details</h2>
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

        {/* Delivery address form */}
        <div className="delivery-address-form" id="address-container">
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
            onChange={handleAddressChange}
          />
        </div>

        
        <div className="buttons-container">
          <button type="submit" className="button pay-now" id="pay-now">
            Pay Now
          </button>
          <button type="button" className="button address-validate" onClick={handleAddressValidation}>
            Confirm Address
          </button>
          <Link to="/tracking" className="button pay-on-delivery" style={{ width: '150px', height: '27px'}}>
            Pay on Delivery 
          </Link>
        </div>
      </div>
      <HomeFooter />
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

const getUserId = async (userEmail) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/user/id/${userEmail}`);
    const data = await response.json();

    if (response.ok) {
      return data.user_id;
    } else {
      console.error('Failed to get user ID');
      return null;
    }
  } catch (error) {
    console.error('Error during user ID retrieval:', error);
    return null;
  }
};

export default PaymentPage;