import React from "react";
import "./new.scss";
import { Icon } from "@iconify/react";
function New() {
  return (
    <section className="new">
      {data.map((data, index) => {
        return (
          <div className="new-content">
            <div className="new-left">
              <img src={data.image} alt="" />
            </div>
            <div className="new-right">
              <div>
                <h2>{data.Product}</h2>
                <p>
                  <img src="/assets/images/icons/date.svg" alt="..." />
                  <span> {data.Campaigndate}</span>
                </p>
                <p>
                  <img src="/assets/images/icons/date.svg" alt="..." />
                  <span> {data.Registrationdate}</span>
                </p>
              </div>
              <button>Join Now</button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default New;

const data = [
  {
    id: 1,
    image: "https://i.ibb.co/1Ksr2b9/megasale.png",
    Product: "Crazy Friday sale ending on 30th june",
    Campaigndate: "Campaign dates: 23/06/2023 08:00 AM - 24/06/2023 08:00 PM",
    Registrationdate: "Registration dates ends on: 22/06/2023 12:00 PM",
  },
  {
    id: 2,
    image: "https://i.ibb.co/1Ksr2b9/megasale.png",
    Product: "Crazy Friday sale ending on 30th june",
    Campaigndate: "Campaign dates: 23/06/2023 08:00 AM - 24/06/2023 08:00 PM",
    Registrationdate: "Registration dates ends on: 22/06/2023 12:00 PM",
  },
  {
    id: 3,
    image: "https://i.ibb.co/1Ksr2b9/megasale.png",
    Product: "Crazy Friday sale ending on 30th june",
    Campaigndate: "Campaign dates: 23/06/2023 08:00 AM - 24/06/2023 08:00 PM",
    Registrationdate: "Registration dates ends on: 22/06/2023 12:00 PM",
  },
];
