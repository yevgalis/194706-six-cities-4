export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getOfferByID = (state, id) => {
  const offers = state.DATA.offers;
  const offer = offers.find((it) => it.id === parseInt(id, 10));

  return offer;
};
