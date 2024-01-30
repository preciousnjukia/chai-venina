import React from 'react';
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
      <div className="todays-special-heading">
        <h3>Today's Special</h3>
      </div>
      <div className="card-section" style={{ cursor: 'pointer'}}>
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={() => handleCardClick(card.id) }
          >
            <img src={card.image} alt={`Card ${card.id}`} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <h5 style={{marginTop:'15px'}} > Kshs {card.price} </h5>
          </div>
        ))}
      </div>
    </>
  );
};


export default TodaysSpecialSection;
