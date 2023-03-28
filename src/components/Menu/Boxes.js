import React, { Component } from "react";

export default class Boxes extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <>
        <div
          className="card m-4 border-0 overflow-hidden"
          style={{ width: "18rem", height: "24.375rem" }}
        >
          <img
            src={imageUrl}
            className="card-img-top  "
            alt=""
            style={{ maxHeight: "160px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold text-start fs-5">{title}...</h5>
            <p className="card-text text-start fs-6 ">{description}...</p>
            <a
              href={newsUrl}
              // target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
