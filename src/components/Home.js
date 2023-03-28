import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div className="home_bg-img">
      <div classname="container position-relative ">
        <div className="container text-white position-absolute postion-top-bottom mb-5 ms-5 ">
          <p className="lh-base w-50 fs-2 ms-5">
            Stay ahead of the competition with our up-to-date information on the
            latest technology.
          </p>

          <NavLink
            className={
              "text-decoration-none btn btn-outline-light mb-5 ms-5 fs-3"
            }
            to="/technology"
          >
            Explore
          </NavLink>

          <div className="mb-5"></div>
          <div className="mb-5"></div>
          <div className="mb-5"></div>
          <div className="mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
