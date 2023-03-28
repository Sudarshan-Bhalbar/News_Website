import React from "react";
import MechMenubar from "./Menu/Mech_boxes";
import { useState } from "react";
import "./electrical.css";
import Boxes from './Menu/Boxes';


const Mech = () => {
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
    console.log("click");
  };

  const handleChange = () => {};
  return (
    <>
      <MechMenubar />
      {val.map((data, i) => {
        return <MechMenubar onChange={(e) => handleChange(e, i)} />;
      })}

      <div className="text-center my-4 ">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => handleAdd()}
        >
          Show More
        </button>
      </div>
    </>
  );
};

export default Mech;
