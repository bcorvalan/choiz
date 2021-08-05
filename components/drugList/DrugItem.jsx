import React from "react";

export default function DrugItem({ drug }) {
  return (
    <>
      <ul className="drugList">
        <li className="drugList__brand">{drug.brand}</li>
        <li className="drugList__laboratory">{drug.laboratory}</li>
        <li className="drugList__price">$ {drug.price}</li>
      </ul>
    </>
  );
}
