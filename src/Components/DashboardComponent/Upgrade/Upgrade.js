import React from "react";
import "./Upgrade.css";
import { SubHeading2 } from "../../../Reuseable Components/Headings";
const Upgrade = (props) => {

  const NextStep = () => {
    props?.setstep(3)
};
  return (
    <section className="upgrade">
      <SubHeading2>Be our Partner</SubHeading2>

      <div className="goldDiv">
        <p className="first">Gold Partner</p>
        <p className="second">No minimum purchase required</p>
      </div>

      <p className="benefit">Benefits:</p>
      <p className="benefitText">
        1-Lorem ipsum dolor sit amet consectetur. Est diam faucibus fringilla
        maecenas urna odio nibh. Metus enim velit sed cursus diam faucibus nec
        lacus facilisi. Scelerisque ultrices viverra enim cras. Potenti neque
        arcu nec orci. Duis at lacus lobortis sit turpis vel in semper.
      </p>

      <p className="benefitText">
        2-Lorem ipsum dolor sit amet consectetur. Est diam faucibus fringilla
        maecenas urna odio nibh. Metus enim velit sed cursus diam faucibus nec
        lacus facilisi. Scelerisque ultrices viverra enim cras. Potenti neque
        arcu nec orci. Duis at lacus lobortis sit turpis vel in semper.
      </p>

      <p className="conditionsHeading">Terms and conditions:</p>
      <p className="conditionText">
        Lorem ipsum dolor sit amet consectetur. Est diam faucibus fringilla
        maecenas urna odio nibh. Metus enim velit sed cursus diam faucibus nec
        lacus facilisi. Scelerisque ultrices viverra enim cras. Potenti neque
        arcu nec orci. Duis at lacus lobortis sit turpis vel in semper.
      </p>

      <button className="topupButton" onClick={NextStep}>
        <p className="buttonText">Top Up</p>
      </button>
    </section>
  );
};

export default Upgrade;
