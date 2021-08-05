import React from "react";
import DrugItem from "./DrugItem";
import DrugCategory from "./DrugCategory";

export default function DrugsList({ drugsData }) {
  return (
    <div className="drugsList">
      <p className="drugsList__title">Lista de medicamentos</p>
      <div className="drug-category">
        <DrugCategory title="Pastillas" />
        {drugsData.pills.map((element, index) => {
          return <DrugItem drug={element} key={index} />;
        })}
      </div>
      <div className="drug-category">
        <DrugCategory title="Anillos" />
        {drugsData.rings.map((element, index) => {
          return <DrugItem drug={element} key={index} />;
        })}
      </div>
      <div className="drug-category">
        <DrugCategory title="Parches" />
        {drugsData.patches.map((element, index) => {
          return <DrugItem drug={element} key={index} />;
        })}
      </div>
    </div>
  );
}
