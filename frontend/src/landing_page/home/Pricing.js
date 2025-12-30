import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="fs-2 pb-3"> Unbeatable pricing </h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            <br /> in India. Flat fees and no hidden charges.
          </p>
          <a
            className="p-2 fs-8"
            style={{ textDecoration: "none" }}
            href="www.google.com"
          >
            {" "}
            See pricing <i class="fa-solid fa-arrow-right-long"></i>{" "}
          </a>
        </div>
        <div className="col-2">
          <img
            src="media/images/pricing-eq.svg"
            alt="priceing img"
            style={{ width: "60%" }}
          />
          <p className="text-muted"> Free account opening</p>
        </div>
        <div className="col-2">
          <img
            src="media/images/pricing-eq.svg"
            alt="pricing img"
            style={{ width: "60%" }}
          ></img>
          <p className="text-muted">
            Free equity delivery and direct mutual funds
          </p>
        </div>
        <div className="col-2">
          <img
            src="media/images/other-trades.svg"
            alt="price img"
            style={{ width: "60%" }}
          ></img>
          <p className="text-muted">Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
