import Head from 'next/head'
import MainBanner from '../components/mainBanner/MainBanner'
import ScheduleAppointment from '../components/scheduleAppointment/ScheduleAppointment'


const drugsEndpoint = `https://run.mocky.io/v3/1f00949f-adc2-4484-ad6d-4f565e82ad30`
const faqsEndpoint = `https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f`

export async function getServerSideProps() {
  const drugsRes = await fetch(drugsEndpoint)
  const drugsData = await drugsRes.json();

  const faqsEndpointRes = await fetch(faqsEndpoint)
  const faqsData = await faqsEndpointRes.json()
  return {
    props: {
      drugsData,
      faqsData
    }
  }
}

export default function Home({drugsData, faqsData}) {
  return (
    <div>
      <Head>
        <title>Choiz</title>
        <meta name="description" content="Tus anticonceptivos a tu casa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <MainBanner/>
        <ScheduleAppointment/> 
      </main>
      <footer>
      </footer>
    </div>
  )
}
