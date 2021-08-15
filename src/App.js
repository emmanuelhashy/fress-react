import React, { useState, useEffect } from "react";
import { seedData } from "./seed";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import KitchenList from "./components/KitchenList";
import FoodList from "./components/FoodList";

function App() {
  const [values, setValues] = useState([]);
  const [bg, setBg] = useState(false);

  useEffect(() => {
    setValues(seedData[0]);
    console.log(values);
  }, [values]);

  const setBgColor = (val) => {
    setBg(val)
  }
  return (
    <div className={bg ? 'bg-dark' : null}>
      {console.log(values.id)}
      <Navbar />
      <About
        id={values.id}
        name={values.cook}
        about={values.about}
        followers={values.followers}
        following={values.following}
        location={values.location}
        handle={values.handle}
        joined={values.joined}
        photo={values.photo}
      />
      <KitchenList kitchenInfo={values.kitchen} />
      <FoodList foodInfo={values.food} setBgColor={setBgColor}/>
    </div>
  );
}

export default App;
