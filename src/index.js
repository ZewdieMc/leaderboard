import './index.css';

const scores = [{ name: 'Alice', score: 96 }, { name: 'Bob', score: 80 }, { name: 'Cindy', score: 91 }];
document.querySelector('#scores').innerHTML = scores.map((score) => `<li>${score.name}: ${score.score}</li>`).join('');