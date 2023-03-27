import React from "react";
import SResult from "./Sresult";
// import Api_Fetching from "./Menu/Api_Fetching";


const Search = () => {
  
  
  return (
    <>
      <form className="container d-flex justify-content-center" role="search">
        <input
          className="form-control me-2 w-25 shadow-none"
          type="search"
          
          placeholder="Search Here..."
          aria-label="Search"
          
        />
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </form>

      <SResult/>
      
    </>
  );
};

export default Search;
