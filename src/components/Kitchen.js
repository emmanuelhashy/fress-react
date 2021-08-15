import React, { useState } from "react";

const Kitchen = ({ kitchen }) => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div className="kitchen__info">
        <img
          className="kitchen__photo"
          src={"../images/" + kitchen.image_tag}
          alt="kitchen 1"
        />
        {liked ? (
          <i className="fas fa-heart red" onClick={(e) => setLiked(false)} />
        ) : (
          <i className="fas fa-heart grey" onClick={(e) => setLiked(true)} />
        )}
      </div>
    </>
  );
};

export default Kitchen;
