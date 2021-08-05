import React, { useState, useRef } from "react";
import Chevron from "../svgs/Chevron";
export default function FrequentQuestion({ question }) {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rote, setRotate] = useState("frequent-question__icon");
  const content = useRef(null);

  function toggleFrequentQuestion() {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotate(
      active === "active" ? "frequent-question__icon" : "frequent-question__icon  frequent-question__icon--rotate"
    );
  }

  return (
    <div className="frequent-question__wrapper">
      <button className={`frequent-question ${active}`} onClick={toggleFrequentQuestion}>
        <p className="frequent-question__title">{question.title}</p>
        <Chevron className={`${rote}`} width={10}  />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="frequent-question__content"
      >
        <p className="frequent-question__text">
            {question.description}
        </p>
      </div>
    </div>
  );
}
