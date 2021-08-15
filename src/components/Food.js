import React, { useState } from "react";
import ModalComponent from "./Modal"

const Food = ({ food }) => {
  const [liked, setLiked] = useState(false);
  const [modal, setModal] = useState("");

  const handleLeave = () => {
    return setModal("");
  };
  const handleHover = () => {
    
    return setModal(renderModal());
  };
  const renderModal = () =>{
    return (<ModalComponent food={food}/>)
  }

  return (
    <>
      <div
        className="food__info"
        id="myBtn"
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        <img
          className="food__photo"
          src={"../images/" + food.image_tag}
          alt="food 1"
        />
        {liked ? (
          <i className="fas fa-heart red" onClick={(e) => setLiked(false)} />
        ) : (
          <i className="fas fa-heart grey" onClick={(e) => setLiked(true)} />
        )}
        <div className="food__text">
          <p className="food__name">{food.name}</p>
        </div>
        {modal}
      </div>
    </>
    
  );
};

export default Food;
