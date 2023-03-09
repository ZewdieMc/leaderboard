const myGame = { name: 'my new game' };
const gameID = 'u4sSeeKHqAktLAVLfPrr';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameEndpoint = '/games/';
const scoresEndPoint = '/scores/';
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

class Game {
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

  getScores = async () => {
    try {
      const response = await fetch(baseURL + gameEndpoint + gameID + scoresEndPoint,
        {
          method: 'GET',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
      return response.json();
    } catch (err) {
      return err;
    }
  };

  saveScore = async () => {
    try {
      const response = await fetch(
        baseURL + gameEndpoint + gameID + scoresEndPoint,
        {
          method: 'POST',
          body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      nameInput.value = '';
      scoreInput.value = '';
      return response.json();
    } catch (err) {
      return err;
    }
  }
}

const game = new Game();
export default game;