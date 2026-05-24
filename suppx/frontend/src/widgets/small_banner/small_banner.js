import React from "react";
import './small_banner.css';

const SmallBanner = () => {
  return (
    <div className="small-banner-wrapper">

      {/* Card 1 */}
      <div
        className="small-banner-card"
        style={{
          backgroundImage: "url('/images/product.jpeg')",
        }}
      >
        <div className="overlay"></div>

        <div className="small-banner-content">
          <h2>Sex Charge</h2>
          <button>Shop Now</button>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="small-banner-card"
        style={{
          backgroundImage: "url('/images/product.jpeg')",
        }}
      >
        <div className="overlay"></div>

        <div className="small-banner-content">
          <h2>Pre Workout</h2>
          <button>Shop Now</button>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="small-banner-card"
        style={{
          backgroundImage: "url('/images/product.jpeg')",
        }}
      >
        <div className="overlay"></div>

        <div className="small-banner-content">
          <h2>Critical Whey</h2>
          <button>Shop Now</button>
        </div>
      </div>

    </div>
  );
};

export default SmallBanner;