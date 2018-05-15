import db from './db';
import { OK } from './httpStatus';

module.exports.list = async event => {
  const games = await db.getGames();
  return OK(games);
};

module.exports.post = async event => {
  const game = JSON.parse(event.body);
  const res = await db.saveGame(game);
  return OK(res);
};
