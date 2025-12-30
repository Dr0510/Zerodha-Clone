import React from 'react';

function Hero() {
    return ( 
        <div className="container py-5 my-5">

  {/* Heading */}
  <div className="row">
    <div className="col-12 text-center mb-5">
      <h1 style={{ fontSize: "32px", fontWeight: "500" }}>Charges</h1>
      <p className="text-muted" style={{ fontSize: "18px" }}>
        List of all charges and taxes
      </p>
    </div>
  </div>

  {/* Cards */}
  <div className="row text-center">

    <div className="col-md-4 mb-4">
      <img
        src="media/images/pricing-eq.svg"
        alt="Equity delivery"
        style={{ width: "70%", marginBottom: "20px" }}
      />
      <h4>Free equity delivery</h4>
      <p className="text-muted" style={{ maxWidth: "280px", margin: "0 auto" }}>
        All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
      </p>
    </div>

    <div className="col-md-4 mb-4">
      <img
        src="media/images/other-trades.svg"
        alt="Intraday trades"
        style={{ width: "70%", marginBottom: "20px" }}
      />
      <h4>Intraday and F&O trades</h4>
      <p className="text-muted" style={{ maxWidth: "300px", margin: "0 auto" }}>
        Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades.
        Flat ₹20 on all option trades.
      </p>
    </div>

    <div className="col-md-4 mb-4">
      <img
        src="media/images/pricing-eq.svg"
        alt="Direct MF"
        style={{ width: "70%", marginBottom: "20px" }}
      />
      <h4>Free direct MF</h4>
      <p className="text-muted" style={{ maxWidth: "280px", margin: "0 auto" }}>
        All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
      </p>
    </div>

  </div>
</div>

     );
}

export default Hero;