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

const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'Proceed';
questChoices.append(button);

questChoices.addEventListener('submit', (e) => {
    e.preventDefault();
    const chosenRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findByID(chosenRadio.value, questData.choices);
    const player = getChar();
    console.log(choice);

    // questScore(choice, questData.id, player);
    setChar(player);
    // const questDetails = document.getElementById('quest-details');
    // questDetails.classList.add('hidden');
    const questResult = document.getElementById('result');
    const resultPar = document.createElement('p');
    resultPar.textContent = choice.result;
    const homeLink = document.createElement('a');
    homeLink.href = '../map';
    homeLink.textContent = 'Return to Firelink Shrine';
    questResult.append(resultPar, homeLink);
    // questResult.classList.remove('hidden');
});
