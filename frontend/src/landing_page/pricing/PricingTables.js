import React from "react";

function PricingTables() {
  return (
    <div className="container py-5">

      {/* Account Opening Charges */}
      <div className="mb-5">
        <h3 className="fw-semibold mb-3">Charges for account opening</h3>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Type of account</th>
                <th className="text-end">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td className="text-end">
                  <span className="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td className="text-end">
                  <span className="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td className="text-end">₹500</td>
              </tr>
              <tr>
                <td>Partnership, LLP, HUF, Corporate (offline only)</td>
                <td className="text-end">₹500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Demat AMC */}
      <div>
        <h3 className="fw-semibold mb-3">
          Demat AMC (Annual Maintenance Charge)
        </h3>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Value of holdings</th>
                <th className="text-end">AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td className="text-end">
                  <span className="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr>
                <td>₹4 lakh – ₹10 lakh</td>
                <td className="text-end">
                  ₹100 per year <span className="text-muted">(charged quarterly)</span>
                </td>
              </tr>
              <tr>
                <td>Above ₹10 lakh</td>
                <td className="text-end">
                  ₹300 per year <span className="text-muted">(charged quarterly)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default PricingTables;
