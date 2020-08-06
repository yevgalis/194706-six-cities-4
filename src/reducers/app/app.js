import {extend, filterCitiesList} from '../../utils/common';

const initialState = {
  city: {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  citiesList: [],
  propertyID: null,
  nearbyOffers: [],
  comments: [],
  favorites: []
};

const ActionTypes = {
  SET_CITY: `SET_CITY`,
  SET_CITIES_LIST: `SET_CITIES_LIST`,
  SET_PROPERTY: `SET_PROPERTY`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`
};

const ActionCreator = {
  setCity: (city) => ({
    type: ActionTypes.SET_CITY,
    payload: city
  }),
  setCitiesList: (cities) => ({
    type: ActionTypes.SET_CITIES_LIST,
    payload: filterCitiesList(cities)
  }),
  setProperty: (id) => ({
    type: ActionTypes.SET_PROPERTY,
    payload: id
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionTypes.LOAD_NEARBY_OFFERS,
    payload: offers
  }),
  loadComments: (comments) => ({
    type: ActionTypes.LOAD_COMMENTS,
    payload: comments
  }),
  loadFavorites: (favorites) => ({
    type: ActionTypes.LOAD_FAVORITES,
    payload: favorites
  }),
};

const AsyncActions = {
  loadNearbyOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearbyOffers(response.data));
      });
  },
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionTypes.SET_CITIES_LIST:
      return extend(state, {
        citiesList: action.payload
      });
    case ActionTypes.SET_PROPERTY:
      return extend(state, {
        propertyID: action.payload
      });
    case ActionTypes.LOAD_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload
      });
    case ActionTypes.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });
    case ActionTypes.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload
      });
  }

  return state;
};

export {ActionTypes, ActionCreator, AsyncActions, reducer};
