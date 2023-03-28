import React, { NavLink ,Component } from 'react'

export default class Sresult extends Component {
  render() {
    let {title, description, newsUrl} = this.props;
    return (
      <>
      <div className="container px-5 align-center mt-4">
        <div className="container card w-100 border-0 bg-white my-2 p-4 py-2 align-center ">
          <p className="card-title fw-bold  fs-3">
          {title}
          </p>
          <p className="card-text text-start fs-6 ">{description}...</p>
          <span className="my-2">
            <NavLink
              className="text-decoration-none fs-5  text-dark  pb-1"
              style={{ borderBottom: "2px solid #FB5C5C" }}
              
            >
            {newsUrl}
            </NavLink>

          </span>
        </div>
      </div>
    </>
    )
  }
}
