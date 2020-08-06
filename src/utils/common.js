import {SortingTypes} from './const';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatRating = (rating) => {
  return `${Math.round(rating) * 20}%`;
};

export const filterCitiesList = (cities) => {
  return cities.reduce((list, obj) => {
    const index = list.findIndex((city) => city.name === obj.name);

    if (index === -1) {
      list.push(obj);
    }

    return list;
  }, []);
};

export const sortOffers = (offers, sortingType) => {
  switch (sortingType) {
    case SortingTypes.LOW_TO_HIGH:
      return offers
        .slice()
        .sort((a, b) => a.price - b.price);
    case SortingTypes.HIGH_TO_LOW:
      return offers
        .slice()
        .sort((a, b) => b.price - a.price);
    case SortingTypes.TOP:
      return offers
        .slice()
        .sort((a, b) => b.rating - a.rating);
  }

  return offers.slice();
};
