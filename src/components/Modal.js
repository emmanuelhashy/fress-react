import React,{useState} from "react";

const Modal = ({food}) => {
    const [liked, setLiked] = useState(false);
  return (
    <div id="myModal" class="modal">
      {console.log({food})}
      <div class="modal-content">
        <div class="food-modal">
          <img
            class="food-modal__photo"
            src={"../images/"+food.image_tag}
            alt="food 1"
          />
          <img src="../images/fector.png" alt="modal oii" className="modal__logo" />
          {liked ? (
          <i className="fas fa-heart red" onClick={(e) => setLiked(false)} />
        ) : (
          <i className="fas fa-heart grey" onClick={(e) => setLiked(true)} />
        )}
          
          <div>
            <div className="food-modal__text">
              <div className="food-modal__container">
                <p className="food-modal__name">{food.name}</p>
                <div className="food-modal__flex">
                  <p>$5 per portion</p>
                  <p>no allergies</p>
                  <p>54k likes</p>
                </div>
                <div className="iconNbutton">
                  <div className="icon-box">
                    <img src="../images/icon1.png" width="25px" alt="icon1" />
                    <img src="../images/icon2.png" width="25px" alt="icon2" />
                    <img src="../images/icon3.png" width="25px" alt="icon3" />
                  </div>
                  <button className="food-modal__btn">Order Now</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
