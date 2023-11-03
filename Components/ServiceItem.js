import React, { useEffect, useState } from "react";
import Link from "next/link";

function ServiceItem({ id, title, description, image, rate, users }) {
  const [rating, setRating] = useState();

  const handleRatingChange = async (rank) => {
    if (!isNaN(rank) && rank >= 0 && rank <= 5) {
      setRating(parseInt(rank));
    }
  };

  const handlerVote = async (rank, event) => {
    const server = process.env.NEXT_PUBLIC_SERVER;
    console.log(rank);
    try {
      const response = await fetch(` /api/Projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          users: users + 1,
          raking: rate + rank,
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
    <a className="servicio">
      <Link href={`/Project?id=${id}`} passHref legacyBehavior>
        <div className="imgRank">
          <img className="token1" src={image} alt="token1" />
        </div>
      </Link>

      <div className="star-rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <a
            key={index}
            onClick={(e) => {
              handlerVote(index + 1, e);
            }}
            className={`star ${index < rate / users ? "rated" : ""}`}
          >
            &#9733;
          </a>
        ))}
      </div>
      <Link href={`/Project?id=${id}`} passHref legacyBehavior>
        <>
          <h4>{title}</h4>
          <p>{description}</p>
        </>
      </Link>
    </a>
  );
}

export default ServiceItem;
