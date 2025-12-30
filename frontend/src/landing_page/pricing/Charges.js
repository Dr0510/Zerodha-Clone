import React, { useState } from "react";

function Charges() {
  const [activeTab, setActiveTab] = useState("equities");

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-4">
        <h1 style={{ fontSize: "32px", fontWeight: "500" }}>Charges</h1>
        <p className="text-muted" style={{ fontSize: "18px" }}>
          List of all charges and taxes
        </p>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "equities" ? "active" : ""}`}
            onClick={() => setActiveTab("equities")}
          >
            Equities
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      {/* Tab Content */}

      {/* Equities Table */}
      {activeTab === "equities" && (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Charge type</th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O – Futures</th>
                <th>F&O – Options</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>Flat ₹20 per executed order</td>
              </tr>

              <tr>
                <td>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on sell</td>
                <td>0.02% on sell</td>
                <td>
                  0.125% of intrinsic value on exercised options + 0.1% on sell premium
                </td>
              </tr>

              <tr>
                <td>Transaction charges</td>
                <td>NSE: 0.00297% / BSE: 0.00375%</td>
                <td>NSE: 0.00297% / BSE: 0.00375%</td>
                <td>NSE: 0.00173% / BSE: 0</td>
                <td>NSE: 0.03503% (on premium) / BSE: 0.0325% (on premium)</td>
              </tr>

              <tr>
                <td>GST</td>
                <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>

              <tr>
                <td>SEBI charges</td>
                <td colSpan="4">₹10 / crore</td>
              </tr>

              <tr>
                <td>Stamp charges</td>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>

            </tbody>
          </table>
        </div>
      )}

      {/* Currency & Commodity placeholders */}
      {activeTab === "currency" && (
        <p className="text-center mt-4">Currency charges will go here</p>
      )}
      {activeTab === "commodity" && (
        <p className="text-center mt-4">Commodity charges will go here</p>
      )}

    </div>
  );
}

export default Charges;
