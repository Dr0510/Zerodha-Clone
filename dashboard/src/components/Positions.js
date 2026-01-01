import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPosition, setAllPosition] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-t5ol.onrender.com/allPositions")
      .then((res) => setAllPosition(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPosition.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPosition.map((stock) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profitClass = isProfit ? "profit" : "loss";

              return (
                <tr key={stock._id}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
