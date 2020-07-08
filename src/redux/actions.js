const ActionTypes = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionTypes.CHANGE_CITY,
    payload: city
  }),
  getOffers: () => ({
    type: ActionTypes.GET_OFFERS,
    payload: null
  })
};

export {ActionTypes, ActionCreator};
