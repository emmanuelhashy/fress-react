import React from "react";
import Food from "./Food";
const FoodList = ({foodInfo}) => {
  return (
    <section className="food">
      <h2 className="text-md">My Food</h2>
      <div className="food__images">
        {foodInfo && foodInfo.map(food => (<Food key={food.id} food={food}/>))

        }
      </div>
    </section>
  );
};

export default FoodList;
