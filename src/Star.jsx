import "./App.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function Star({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleClick = (index) => {
    console.log("click",index);

    setRating(index);
  };

  const handleMouseEnter = (index) => {
    console.log("mouse enter",index);
    
    setHover(index);
  };

  const handleMouseLeave = () => {
    console.log("mouse leave");

    setHover(null);
  };

  return (
    <div>
      <h2>Star Rating</h2>
      {[...Array(noOfStars)].map((_, i) => {
        const index = i + 1;
        console.log("render");
        
        return (
          <FaStar
            key={index}
            color={index <= (hover || rating) ? "orange" : "gray"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default Star;
