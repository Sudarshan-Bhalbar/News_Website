import React from 'react';
import HMMenubar from "../components/Menu/Hotel_M_Boxes";
import { useState } from "react";
import "./electrical.css";


const HotelManagement = () => {
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
      <HMMenubar/>
      {val.map((data, i) => {
        return( <HMMenubar onChange={e=>handleChange(e,i)} />);
      })}


      <div className="text-center my-4 ">
        <button type="button" className="btn btn-dark" onClick={()=>handleAdd()}>
          Show More
        </button>
      </div>
    </div>
  );
}

export default HotelManagement
