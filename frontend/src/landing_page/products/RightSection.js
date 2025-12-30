import React from "react";

function RightSection({ imgURL, productName, productInfo, productLink }) {
  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        {/* Text section */}
        <div className="col-1">

        </div>
        <div className="col-5 ">
          <h1 className="fs-3 text-muted">{productName}</h1>

          <p
            className="text-muted"
            style={{
              maxWidth: "420px",
              lineHeight: "1.7",
              marginTop: "15px",
            }}
          >
            {productInfo}
          </p>

          <a
            href={productLink}
            style={{
              textDecoration: "none",
              color: "#387ed1",
              fontWeight: "500",
            }}
          >
            Learn more <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>
        </div>

        {/* Image section */}
        <div className="col-md-6 text-center">
          <img
            src={imgURL}
            alt={productName}
            style={{
              maxWidth: "90%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
