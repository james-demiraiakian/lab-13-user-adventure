import quests from '../quest-data/quest-data.js';
import { findByID, getChar, setChar } from '../functions.js';

const parameters = new URLSearchParams(window.location.search);

console.log(parameters.get('id'));

const questData = findByID(parameters.get('id'), quests);

console.log(questData);

const questTitle = document.getElementById('quest-title');
questTitle.textContent = questData.title;

const questImg = document.getElementById('quest-img');
questImg.src = questData.image;
questImg.alt = questData.title;

const description = document.getElementById('description');
description.textContent = questData.description;


