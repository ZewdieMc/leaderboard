import './index.css';
import game from './modules/game.js';

window.onload = () => game.renderScores();
const refreshBtn = document.querySelector('#refresh-scores');
const scoreForm = document.querySelector('#form');
scoreForm.onsubmit = (e) => {
  e.preventDefault();
  const result = game.saveScore();
  if (result) {
    result.then((res) => {
      document.querySelector('#information').textContent = res.result;
      document.querySelector('#information').classList.remove('hidden');
      setTimeout(() => document.querySelector('#information').classList.add('hidden'), 3000);
    });
  }
};

refreshBtn.addEventListener('click', () => {
  game.renderScores();
});
