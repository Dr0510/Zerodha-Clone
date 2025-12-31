import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="p-5">
          <h1 className="fs-4 text-center p-2">The Zerodha Universe</h1>
          <p className="fs-6 text-muted text-center p-2">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4">
          <img
            className="p-2 m-2 "
            style={{ width: "50%" }}
            src="media/images/zerodhaFundhouse.png"
          />
          <p>
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img
            className="p-2 m-2 "
            style={{ width: "60%" }}
            src="media/images/sensibullLogo.svg"
          />
          <p>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4">
          <img
            className="p-2 m-2 "
            style={{ width: "50%" }}
            src="media/images/tijori.svg"
          />
          <p>
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-4">
          <img
            className="p-2 m-2 "
            style={{ width: "50%" }}
            src="media/images/streakLogo.png"
          />
          <p>
            Systematic trading platform <br /> that allows you to create and
            backtest <br /> strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img
            className="p-2 m-2 "
            style={{ width: "60%" }}
            src="media/images/smallcaseLogo.png"
          />
          <p>
            Thematic investing platform <br /> that helps you invest in
            diversified <br /> baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img
            className="p-2 m-2 "
            style={{ width: "50%" }}
            src="media/images/dittoLogo.png"
          />
          <p>
            Personalized advice on life <br /> and health insurance. No spam{" "}
            <br /> and no mis-selling.
          </p>
        </div>
      </div>

      <div className="row p-4 m-4 text-center">
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          {" "}
          Sign up for free{" "}
        </button>
      </div>
    </div>
  );
}

export default Universe;
