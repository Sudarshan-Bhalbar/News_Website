import React from 'react';
import MedicalMenubar from "../components/Menu/Medical_boxes";
import { useState } from "react";
import "./electrical.css";


const Medical = () => {
  const [val, setVal] = useState([]);
  const handleAdd=()=>{
    const abc=[...val,[]]
    setVal(abc)
    console.log("click")
  }

  const handleChange = () =>{

  }
  return (
    <>
        <MedicalMenubar/>
      {val.map((data, i) => {
        return( <MedicalMenubar onChange={e=>handleChange(e,i)} />);
      })}


      <div className="text-center my-4 ">
        <button type="button" className="btn btn-dark" onClick={()=>handleAdd()}>
          Show More
        </button>
      </div>
    </>
  )
}

export default Medical