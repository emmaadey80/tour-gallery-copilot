import React, { useState } from "react";

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-card">
      <img
        src={image}
        alt={name}
        className="tour-image"
        onError={(e) => (e.target.src = '/fallback-image.jpg')} // Fallback image
      />
      <div className="tour-details">
        <h2 className="tour-name">{name}</h2>
        <p className="tour-info">
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button
            className="read-more-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <p className="tour-price">${price}</p>
        <button className="remove-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;