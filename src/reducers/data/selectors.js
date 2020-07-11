export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getCities = (state) => {
  const all = state.DATA.offers.map((offer) => offer.city.name);
  const filtered = [...new Set(all)];

  return filtered.slice(0, 6);
};

// export const getCities = (state) => {};
// export const getCities = (state) => {};
