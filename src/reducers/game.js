import api from '../api';

const helper = (promise, type) => dispatch => {
  dispatch({ type });
  return promise
    .then(response => dispatch({ type: `${type}_RESOLVED`, payload: response.data }))
    .catch(err => dispatch({ type: `${type}_REJECTED`, payload: err}));
};

export const getGames = () => helper(api.get('games'), 'FETCH_GAMES');

const defaultState = [];
export default (state = defaultState, { type, payload }) => {
  switch(type) {
    case 'FETCH_GAMES_RESOLVED':
      return payload;
    default:
      return state;
  }
}
