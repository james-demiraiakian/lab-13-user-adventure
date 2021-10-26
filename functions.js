import quests from './quest-data/quest-data.js';

export function findByID(id, items) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        }      
    }
}

export function generateChar(formData) {
    return { 
        completed: {},
        hp: 45,
        souls: 0,
        name: formData.get('name'),
        class: formData.get('class'),
        race: formData.get('race'),
    };
}

export function setChar(charObject) {
    const charString = JSON.stringify(charObject);
    localStorage.setItem('CHAR', charString);
}

export function getChar() {
    return JSON.parse(localStorage.getItem('CHAR'));
}

export function questScore(choiceObj, questID, userObj) {
    userObj.souls = choiceObj.souls;
    userObj.hp += choiceObj.hp;
    userObj.completed[questID] = true;
}

export function allQuestFin(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}
