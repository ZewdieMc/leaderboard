const myGame = { name: 'my new game' };

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameEndpoint = '/games/';

export default class Game {
  newGame = async () => {
    const response = await fetch(`${baseURL}${gameEndpoint}`, {
      method: 'POST',
      body: JSON.stringify(myGame),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  }
}
