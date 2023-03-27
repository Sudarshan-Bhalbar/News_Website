import React from "react";
import { NavLink } from "react-router-dom";
// import Api_Fetching from "./Menu/Api_Fetching";

// const pythonExec = async ()=>{
//   const python_code = `
//     print('Hello Test')
//   `;
//   const pyodide = await window.pyodide;

//   pyodide.runPython(python_code);

// };



const Sresult = () => {
  
  return (
    <>
      <div className="container px-5 align-center mt-4">
        <div className="container card w-100 border-0 bg-white my-2 p-4 py-2 align-center ">
          <p className="card-title fw-bold  fs-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <p className="card-subtitle fw-lighter fs-5 my-1 text-secondary white-space">
            By SSB <span className="mx-3 text-danger fw-bold">|</span> 69
            comments
          </p>

          <span className="my-2">
            <NavLink
              className="text-decoration-none fs-5  text-dark  pb-1"
              style={{ borderBottom: "2px solid #FB5C5C" }}
              
            >
              Read More
            </NavLink>

          </span>
        </div>
      </div>
    </>
  );
};

export default Sresult;
