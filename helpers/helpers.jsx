/*
=====================================
FETCH DATA
=====================================
*/

const drugsEndpoint = `https://run.mocky.io/v3/1f00949f-adc2-4484-ad6d-4f565e82ad30`;
const faqsEndpoint = `https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f`;

export const fetchDrugs = async () => {
  const drugsRes = await fetch(drugsEndpoint);
  const drugsData = await drugsRes.json();
  return drugsData;
};

export const fetchFaqs = async () => {
  const faqsEndpointRes = await fetch(faqsEndpoint);
  const faqsData = await faqsEndpointRes.json();
  return faqsData;
};
