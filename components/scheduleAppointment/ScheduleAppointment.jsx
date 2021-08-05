import React from "react";
import {useModalUpdate} from '../../context/Modalcontext'


export default function ScheduleAppointment() {
  const toggleModal = useModalUpdate()
  return (
    <div className="scheduleAppointment">
      <p className="scheduleAppointment__paragraph">
        Las mejores expertas en ginecología del país están a tu disposición para
        conversar sin que tengas que salir de tu casa.
      </p>
      <div className="scheduleAppointment__button-wrapper">
        <button className="scheduleAppointment__button" onClick={toggleModal}>
          Agendar una consulta
        </button>
      </div>
    </div>
  );
}
