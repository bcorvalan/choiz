import React from "react";
import StepOne from "../svgs/stepsIcons/stepOne";
import StepTwo from "../svgs/stepsIcons/StepTwo";
import StepThree from "../svgs/stepsIcons/StepThree";

export default function ScheduleAppointmentStep({ stepData }) {
  const showIcon = (iconName) => {
    switch (iconName) {
      case "stepOne":
        return <StepOne />;
      case "stepTwo":
        return <StepTwo />;
      case "stepThree":
        return <StepThree />;
      default:
        break;
    }
  };
  return (
    <div className="scheduleAppointment-modal-step">
      <div className="scheduleAppointment-modal-step__icon">
        {showIcon(stepData.icon)}
        {stepData.split && (
          <div className="scheduleAppointment-modal-step__split-line"></div>
        )}
      </div>
      <p className="scheduleAppointment-modal-step__number">
        {stepData.number}
      </p>
      <p className="scheduleAppointment-modal-step__title">{stepData.title}</p>
      <p className="scheduleAppointment-modal-step__text">
        {stepData.description}
      </p>
      <p className="scheduleAppointment-modal-step__observation">
        {stepData.observation}
      </p>
    </div>
  );
}
