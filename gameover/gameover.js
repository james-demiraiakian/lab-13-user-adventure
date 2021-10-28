import { loadProfile, getChar } from '../functions.js';

function scoreSouls(souls) {
    let wealth;
    if (souls <= 300) {
        wealth = 'poor';
        return wealth;
    } else if (300 < souls && souls <= 500) {
        wealth = 'mid';
        return wealth;
    } else {
        wealth = 'rich';
        return wealth;
    }
}

function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    } else {
        return 'alive';
    }
}

const aliveSouls = {
    poor: 'He survived, but with what remains of his frail, pitiful soul, what he had could hardly be considered life, but just existance.',
    mid: 'He survived, with an average soul. After all was done, he lived a modest life, and was soon forgotten at the end.',
    rich: 'He survived with a truely glorious soul, allowing him to persist long beyond normal men, and leave behind a legacy that spaned the ages.'
};

const deadSouls = {
    poor: 'He died. his pitiful soul was hardly enough to keep him alive already, and so his passing was quick.',
    mid: 'He died. his soul was modest, respectable even, but was not enough to keep him from the end',
    rich: 'He died, but even in passing, his magnificent soul shone through, leaving a legacy that countless others followed for eons.'
};

// const hpMessage = {
//     alive: 'He survived.',
//     dead: 'He died.',
// };

loadProfile();

const undead = getChar();

const endMessage = document.getElementById('ending-message');

const health = scoreHp(undead.hp);
const souls = scoreSouls(undead.souls);

// const healthMessage = hpMessage[health];
let soulsMessages = null;

if (health === 'dead') {
    soulsMessages = deadSouls;
} else {
    soulsMessages = aliveSouls;
}

const soulsMessage = soulsMessages[souls];

let end = `It was the end of an age, brought to a close by the Chosen Undead, ${undead.name} the ${undead.class} from ${undead.race}. ${soulsMessage}`;

endMessage.textContent = end;
