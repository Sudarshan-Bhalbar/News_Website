import React from 'react';
import "./electrical.css";
import ITMenubar from "../components/Menu/It_boxes";
import { useState } from "react";

const It = () => {
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
      <ITMenubar/>
      {val.map((data, i) => {
      return( <ITMenubar onChange={e=>handleChange(e,i)} />);
      })}
      <div className="text-center my-4 ">
        <button type="button" className="btn btn-dark" onClick={()=>handleAdd()}>
          Show More
        </button>
      </div>
    </>
  );
}

export default It