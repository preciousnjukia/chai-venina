import React, { useState } from 'react';

function MpesaPaymentPag() {
  const initialFormData = {
    phone: "",
    amount: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setLoading(true);
  
    fetch('http://127.0.0.1:5000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set Content-Type to application/json
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setLoading(false);
        console.log(formData);
  
        if (response.ok) {
          window.alert('Payment made');
          setFormData(initialFormData); // Clear the form
        } else {
          window.alert('Payment failed');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error: ', error);
      });
  };

  return (
    <div className='mpesaPage'>
      <h1>Mpesa Payment</h1>
      <form className='mpesaForm' onSubmit={submitForm}>
        <input
          type='number'
          placeholder='Enter number'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type='number'
          placeholder='Enter amount'
          name='amount'
          value={formData.amount}
          onChange={handleChange}
        />

        <button type='submit' disabled={loading}>
          {loading ? 'Processing...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default MpesaPaymentPag;
