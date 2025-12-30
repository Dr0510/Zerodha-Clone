import React from "react";

function Hero() {
  return (
    <div style={{ background: "#387ed1", color: "white" }}>
      <div className="container py-5">

        {/* Top row */}
        <div className="row align-items-center mb-4">
          <div className="col-6">
            <h5 className="mb-0">Support Portal</h5>
          </div>
          <div className="col-6 text-end">
            <a href="/" style={{ color: "white", textDecoration: "underline" }}>
              Track tickets
            </a>
          </div>
        </div>

        {/* Main content */}
        <div className="row">

          {/* Left side */}
          <div className="col-md-7">
            <h2 className="mb-4">
              Search for an answer or browse help topics <br />
              to create a ticket
            </h2>

            <input
              type="text"
              className="form-control p-3"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
            />

            <div className="mt-3">
              <a href="/" className="me-3 text-white">
                Track account opening
              </a>
              <a href="/" className="me-3 text-white">
                Track segment activation
              </a>
              <a href="/" className="me-3 text-white">
                Intraday margins
              </a>
              <a href="/" className="text-white">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="col-md-5">
            <h4 className="mb-3">Featured</h4>
            <ol>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Latest Intraday leverages – MIS & CO
                </a>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
