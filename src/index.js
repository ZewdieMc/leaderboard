import './index.css';
import scores from './modules/score.js';

window.onload = () => {
  document.querySelector('#scores').innerHTML = scores
    .map((score) => `<li>${score.name}: ${score.score}</li>`)
    .join('');
};
