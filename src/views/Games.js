import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGames } from '../reducers/game';

const Games = ({ games, getGames }) => (
  <div>
    <ul>
      {games.map(game => (
        <li>{JSON.stringify(game)}</li>
      ))}
    </ul>
    <button onClick={getGames} >refresh games</button>
  </div>
);


const GamesContainer = connect(state => ({
  games: state.games
}), dispatch => bindActionCreators({
  getGames
}, dispatch))(Games);

export default GamesContainer;
