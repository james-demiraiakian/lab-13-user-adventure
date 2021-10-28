import quests from '../quest-data/quest-data.js';
import { getChar, allQuestFin, loadProfile } from '../functions.js';

const questLinks = document.getElementById('quest-links');
const player = getChar();

loadProfile();

if (player.hp <= 0 || allQuestFin(player)) {
    window.location.replace('../gameover');
}

for (let quest of quests) {
    if (player.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

// for (const quest of quests) {
//     const a = document.createElement('a');
//     a.href = `../quests/?id=${quest.id}`;
//     a.textContent = quest.title;
//     questLinks.appendChild(a);
// }

function displayLink(quest) {
    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('map-links');
    questLinks.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;
    span.classList.add('map-spans');
    questLinks.appendChild(span);
}
