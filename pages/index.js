import React, { useState } from "react";
import Head from "next/head";
import MainBanner from "../components/mainBanner/MainBanner";
import ScheduleAppointment from "../components/scheduleAppointment/ScheduleAppointment";
import DrugsList from "../components/drugList/DrugsList";
import FrequentQuestions from "../components/frequentQuestions/frequentQuestions";
import { fetchDrugs, fetchFaqs } from "../helpers/helpers";
import Footer from "../components/footer/Footer";
import ScheduleAppointmentModal from "../components/scheduleAppointment/ScheduleAppointmentModal";
import { ModalProvider } from "../context/Modalcontext";

export async function getServerSideProps() {
  try {
    const drugsData = await fetchDrugs();
    const faqsData = await fetchFaqs();
    return {
      props: {
        drugsData,
        faqsData,
      },
    };
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
}
export default function Home({ drugsData, faqsData, error }) {
  return (
    <div>
      <Head>
        <title>Choiz</title>
        <meta name="description" content="Tus anticonceptivos a tu casa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error ? (
        <div>Hubo un error</div>
      ) : (
        <ModalProvider>
          <main>
            <ScheduleAppointmentModal/>
            <MainBanner />
            <ScheduleAppointment/>
            <DrugsList drugsData={drugsData.data} />
            <FrequentQuestions questionsData={faqsData} />
          </main>
        </ModalProvider>
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
