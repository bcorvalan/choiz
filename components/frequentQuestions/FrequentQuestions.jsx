import React from "react";
import FrequentQuestion from "./FrequentQuestion";

export default function FrequentQuestions({ questionsData }) {
  const enabledQuestions = questionsData.data.filter(
    (question) => question.enabled === true
  );
  return (
    <div className="frequent-questions">
      <p className="frequent-questions__title">Preguntas frecuentes</p>
      {enabledQuestions.map((element, index) => {
        return <FrequentQuestion question={element} key={index} />;
      })}
    </div>
  );
}
