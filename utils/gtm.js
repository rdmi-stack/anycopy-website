export const GTM_ID = "GTM-MRK9QVWR";

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
