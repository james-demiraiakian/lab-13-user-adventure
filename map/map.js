import quests from '../quest-data/quest-data.js';
import { getChar, allQuestFin } from '../functions.js';

const questLinks = document.getElementById('quest-links');
const player = getChar();

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
    questLinks.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;
    questLinks.appendChild(span);
}
