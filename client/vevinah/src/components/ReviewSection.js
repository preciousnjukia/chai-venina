import React from "react";
import clientImage from "../assets/logo192.png";

const ReviewCard = ({ customerReview}) => {
  const { name, image, rating, content } = customerReview;

  return (
    <div className="customer-review-card">
    <div className="review-header">
      <img src={image} alt={`${name}'s profile`} className="customer-image" />
      <div className="review-info">
        <div className="star-ratings">
          {[...Array(rating).keys()].map((_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>
      </div>
    </div>
    <p className="review-content">{content}</p>
  </div>
  )
}


const ReviewSection = () => {
  let customerReviews = [{
    image: clientImage,
    name: "John Doe",
    rating: 4,
    content: "Thanks.Loved the food",
  },
  {
    image: clientImage,
    name: "John Doe",
    rating: 3,
    content: "Thanks.Loved the food",
  },
  {
    image: clientImage,
    name: "John Doe",
    rating: 3,
    content: "Thanks.Loved the food",
  },
 
];

  return (
   <div className="review-cards">
   {customerReviews.map((review, index) => (
     <ReviewCard key={index} customerReview={review} />
   ))}
 </div>

  );
};

export default ReviewSection;
