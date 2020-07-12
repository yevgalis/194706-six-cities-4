import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getCities = createSelector(
    getOffers,
    (offers) => {
      const allCities = offers.map((offer) => offer.city);
      const filtered = allCities.reduce((acc, obj) => {
        const index = acc.findIndex((it) => it.name === obj.name);

        if (index === -1) {
          acc.push(obj);
        }

        return acc;
      }, []);

      return filtered.slice(0, 6);
    }
);

// export const getCities = createSelector(
//     getOffers,
//     (offers) => {
//       const all = offers.map((offer) => offer.city.name);
//       const filtered = [...new Set(all)];

//       return filtered.slice(0, 6);
//     }
// );

// export const getCities = (state) => {
//   const all = state.DATA.offers.map((offer) => offer.city.name);
//   const filtered = [...new Set(all)];

//   return filtered.slice(0, 6);
// };
