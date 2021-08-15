import React from "react";
import Kitchen from "./Kitchen";

const KitchenList = ({kitchenInfo}) => {
  return (
    <section className="kitchen">
      <h2 className="text-md">My Kitchen</h2>
      <div className="kitchen__images">
        { kitchenInfo ?
        kitchenInfo.map(kitchen =>(
          <Kitchen key={kitchen.id} kitchen={kitchen}/>
        ) ) : <></>
        }
      </div>
    </section>
  );
};

export default KitchenList;
