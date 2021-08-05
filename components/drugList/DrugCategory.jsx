import React from "react";

export default function DrugCategor({ title }) {
  return (
    <>
      <p className="drug-category__title">{title}</p>
      <ul className="drug-category__header-wrapper">
        <li className="drug-category__header">Marcas que ofrecemos</li>
        <li className="drug-category__header">Laboratorio</li>
        <li className="drug-category__header">
          Precio{" "}
          <span className="drug-category__observation">
            (sin cobertura médica)
          </span>
        </li>
      </ul>
    </>
  );
}
