import React from "react";
import "./Count.css";
import CountUp from "react-countup";

const Count = () => {
  return (
    <div className="count">
      <div className="count-box">
        <div className="counts">
          <div className="main-box">
            <h1 className="count-head">
              <CountUp
                enableScrollSpy="true"
                start={0}
                end={10}
                duration={5}
                className="numbers"
              />
            </h1>
            <p>Counteries tour</p>
          </div>
        </div>
        <div className="counts">
          {" "}
          <div className="main-box">
            <h1 className="count-head">
              <CountUp
                enableScrollSpy="true"
                start={0}
                end={200}
                duration={5}
                className="numbers"
              />+
            </h1>
            <p>Dream Destiantions</p>
          </div>
        </div>
        <div className="counts">
          {" "}
          <div className="main-box">
            <h1 className="count-head">
              <CountUp
                enableScrollSpy="true"
                start={0}
                end={1000}
                duration={1}
                className="numbers"
              />+
            </h1>
            <p>Counteries tour</p>
          </div>
        </div>
        <div className="counts">
          {" "}
          <div className="main-box">
            <h1 className="count-head">
              <CountUp
                enableScrollSpy="true"
                start={0.0}
                end={4.9}
                decimals={1}
                duration={5}
                className="numbers"
              />
            </h1>
            <p>Counteries tour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
