import React from "react";
import { Link } from "react-router-dom";

function Broker() {
  return (
    <div className="table-responsive mt-4">
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Charge Type</th>
            <th>Delivery</th>
            <th>Intraday</th>
            <th>Futures</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Brokerage</td>
            <td>₹0</td>
            <td>0.03% or ₹20</td>
            <td>0.03% or ₹20</td>
            <td>₹20 per order</td>
          </tr>

          <tr>
            <td>STT / CTT</td>
            <td>0.1% buy & sell</td>
            <td>0.025% sell</td>
            <td>0.01% sell</td>
            <td>0.05% sell</td>
          </tr>

          <tr>
            <td>Transaction Charges</td>
            <td>NSE: 0.00345%</td>
            <td>NSE: 0.00345%</td>
            <td>NSE: 0.002%</td>
            <td>NSE: 0.053%</td>
          </tr>

          <tr>
            <td>GST</td>
            <td colSpan="4">18% on brokerage + charges</td>
          </tr>

          <tr>
            <td>SEBI Charges</td>
            <td colSpan="4">₹10 per crore</td>
          </tr>

          <tr>
            <td>Stamp Duty</td>
            <td colSpan="4">As per state rules</td>
          </tr>
        </tbody>
      </table>
      <h3  className="fs-4 text-muted text-center pt-3 mt-3"> <Link style={{textDecoration:'none'}} to={'/'} > Calculate your costs upfront </Link> using our brokerage calculator</h3>
    </div>
  );
}

export default Broker;
