import React from "react";
import CloseCross from "../svgs/CloseCross";
import ScheduleAppointmentStep from "./ScheduleAppointmentStep";
import {useModalUpdate , useModal} from '../../context/Modalcontext'
export default function ScheduleAppointmentModal() {
  const showModal = useModal()
  const toggleModal = useModalUpdate()
  const stepInfo = [
    {
      icon: "stepOne",
      number: "1.",
      title:
        "Completás algunas preguntas breves y nos contás el motivo de la consulta.",
      description:
        "Vamos a elegir la doctora adecuada según su especialidad y tu necesidad.",
        split:true
    },
    {
      icon: "stepTwo",
      number: "2.",
      title: "Te contactamos por y coordinamos el pago para reservar la fecha.",
      description:
        "Si tenés Swiss Medical es GRATIS* y si no, podes pedir reintegro",
      observation: "*Excepto para planes que requieren copago",
      split:true
    },
    {
      icon: "stepThree",
      number: "3.",
      title:
        "Tenés la videollamada con tu doctora, desde donde estés y sin límite de tiempo.",
      description: "¡Dura lo que vos necesites!",
      split:false
    },
  ];
  return (
    <>
      {showModal ? (
        <div className="scheduleAppointment-modal__background">
          <div className="scheduleAppointment-modal">
            <button
              className="scheduleAppointment-modal__close"
              onClick={toggleModal}
            >
              <CloseCross />
            </button>
            <p className="scheduleAppointment-modal__title">
              Paso a paso para la consulta remota
            </p>
            <div className="scheduleAppointment-modal__steps">
              {stepInfo.map((element, index) => {
                return (
                  <ScheduleAppointmentStep stepData={element} key={index} />
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
