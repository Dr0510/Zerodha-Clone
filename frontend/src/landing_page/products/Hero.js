import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container border-bottom mb-5 ">
      <div className="row text-center p-5 m-5 ">
        <h1 className="fs-2 text-muted">Zerodha Products</h1>
        <h3 className="fs-4 text-muted p-2">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="fs-6 p-2 ">
          Check out our{" "}
          <Link to={"/"} style={{ textDecoration: "none" }}>
            {" "}
            investment offerings <i class="fa-solid fa-arrow-right-long"></i>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
