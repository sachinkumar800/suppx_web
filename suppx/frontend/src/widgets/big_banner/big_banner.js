import React from "react";
import './big_banner.css';


const BigBanner = () => {
  return (
    <div className="bigbanner-container">

      {/* Banner 1 */}
      <div className="banner banner1">
        <div className="content">
          <span className="tag blue">PREMIUM PERFORMANCE</span>

          <h1>
            BUILDS <br />
            MORE <span>MUSCLE</span>
          </h1>

          <p>
            Scientifically formulated for maximum hypertrophy.
          </p>

          <button>EXPLORE COLLECTION →</button>
        </div>
      </div>

      {/* Banner 2 */}
      <div className="banner banner2">
        <div className="content">
          <span className="tag red">INTENSE FORMULA</span>

          <h1>
            POWER. <br />
            FOCUS. <span>RESULTS.</span>
          </h1>

          <p>
            Advanced hardening formula to support strength & performance.
          </p>

          <button>SHOP NOW →</button>
        </div>
      </div>

      {/* Banner 3 */}
      <div className="banner banner3">
        <div className="content">
          <span className="tag purple">CLEAN. LEAN. STRONG.</span>

          <h1>
            FUEL YOUR <br />
            <span>BEST SELF</span>
          </h1>

          <p>
            High quality protein for lean muscle & recovery.
          </p>

          <button>GET YOURS NOW →</button>
        </div>
      </div>

    </div>
  );
};

export default BigBanner;