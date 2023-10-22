import React, { useState } from "react";

function ServiceItem({ id, title, description, image, rate, users }) {
  const [rating, setRating] = useState();

  const handleRatingChange = (event) => {
    const inputValue = parseInt(event.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 5) {
      setRating(inputValue);
    }
  };

  const handlerVote = async (event) => {
    const uri = process.env.NEXT_PUBLIC_SERVER;
    try {
      const response = await fetch(`${uri}/api/Projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          users: users+1,
          raking: rate+rating,
        }),
      });
      if (!response.ok) {
        throw new Error(response);
      }
      alert("calificacion exitosa");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="servicio">
      <div className="imgRank">
        <img className="token1" src={image} alt="token1" />
      </div>
      <h4>{title}</h4>
      <div className="star-rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={`star ${index < rate / users ? "rated" : ""}`}>
            &#9733;
          </span>
        ))}
      </div>
      <input type="number" value={rating} onChange={handleRatingChange} min="1" max="5" />
      <button onClick={handlerVote}>
        puntuar
      </button>
      <p>{description}</p>
    </div>
  );
}

export default ServiceItem;
