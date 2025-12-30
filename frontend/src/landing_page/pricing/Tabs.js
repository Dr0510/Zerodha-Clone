import React from "react";

function Tabs({ activeTab, setActiveTab }) {
  return (
    <ul className="nav nav-tabs justify-content-center mt-5">
      <li className="nav-item">
        <button
          className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
          onClick={() => setActiveTab("equity")}
        >
          Equity
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
  );
}

export default Tabs;
