import React from "react";
import "./electrical.css";
import ElectricalMenubar from "../components/Menu/Electrical_boxes";
import { useState } from "react";

const Electrical = () => {
  const [val, setVal] = useState([]);
  const handleAdd=()=>{
    const abc=[...val,[]]
    setVal(abc)
    console.log("click")
  }

  const handleChange = () =>{

  }
  return (
    <div className="container">
      <ElectricalMenubar/>
      {val.map((data, i) => {
        return( <ElectricalMenubar onChange={e=>handleChange(e,i)} />);
      })}


      <div className="text-center my-4 ">
        <button type="button" className="btn btn-dark" onClick={()=>handleAdd()}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default Electrical;
