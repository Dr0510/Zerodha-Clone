import React from "react";

function LeftSection({
  imgURL,
  productName,
  productInfo,
  trydemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-6">
          <img src={imgURL} />
        </div>
        <div className="col-1" >

        </div>
        <div className="col-5 pt-5 mt-4">
          <h1 className="fs-2">{productName}</h1>

          <p
            className="text-muted"
            style={{ lineHeight: "1.7", maxWidth: "420px" }}
          >
            {productInfo}
          </p>

          {/* Links */}
          <div className="mt-4">
            <a
              href={trydemo}
              className="me-4"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              Try Demo <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>

            <a
              href={learnMore}
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              Learn More <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>
          </div>

          {/* Store badges */}
          <div className="mt-4">
            <a href={googlePlay} className="me-3">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
