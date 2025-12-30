import React from "react";
function Eduction() {
  return (
    <div className="container pt-5">
      <div className="row p-5">
        <div className="col-6">
          <img src="media/images/education.svg" style={{ width: "70%" }} />
        </div>
        <div className="col-6 pb-5">
          <h2 className="fs-2 pb-3">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="www.google.com" style={{ textDecoration: "none" }}>
            Varsity <i class="fa-solid fa-arrow-right-long"></i>{" "}
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="www.google.com" style={{ textDecoration: "none" }}>
            {" "}
            TradingQ&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Eduction;
