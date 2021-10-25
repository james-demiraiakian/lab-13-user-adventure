import { quests } from '../quests/quests.js';

const questLinks = document.getElementById('quest-links');

for (const quest of quests) {
    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;
    questLinks.appendChild(a);
}