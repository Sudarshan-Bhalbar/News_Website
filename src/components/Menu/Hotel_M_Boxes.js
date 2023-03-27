import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from "./resources/HM/2.png";
import "../electrical.css";


const Hotel_M_Boxes = () => {
  return (
    <>
    <div className="container mb-3">
      <div className="card border-0 mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-2 text-center my-3  ">
            <img src={img1} className="img-fluid rounded shadow  w-75 h-auto " alt="..."/>
          </div>
          <div className="col-9">
            <div className="card-body px-0 pb-0">
              <h5 className="card-title fw-bold  fs-4">Card title</h5>
              <p className="card-subtitle fw-lighter fs-6 my-1 text-secondary white-space">
                By SSB <span className="mx-3 text-danger fw-bold">|</span> 69
                comments
              </p>
              <p className="card-text fs-6 mb-1 text-body">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
        </div>
      </div>
    </div>
  </>
  );
}

export default Hotel_M_Boxes