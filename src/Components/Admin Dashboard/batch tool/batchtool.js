import React, { useState } from "react";
import { SubHeading2 } from "../../../Reuseable Components/Headings";
import BatchHome from "./BatchHome";
import EditImage from "./EditImage";
import EditProduct from "./EditProduct";
import ManageSize from "./ManageSize";
import PublishProduct from "./PublishProduct";

function Batchtool() {
  const [change, setChange] = useState(0);

  return (
    <section className="Batchtool">
      {change === 0 ? <BatchHome setChange={setChange} /> : null}
      {change === 1 ? <PublishProduct setChange={setChange} /> : null}
      {change === 2 ? <EditProduct setChange={setChange} /> : null}
      {change === 3 ? <EditImage setChange={setChange} /> : null}
      {change === 4 ? <ManageSize setChange={setChange} /> : null}
    </section>
  );
}

export default Batchtool;
