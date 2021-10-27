const undeadParish = {
    id: 'undeadParish',
    title: 'The Undead Parish',
    map: {},
    image: '../assets/undead-parish.jpg',
    description: 'As you enter the Undead Parish, you see the Bell of Awakening ontop of the parish, a path leading off to the blacksmith, and a giant razer tusked boar at the front of the parish. Do you want to:',
    choices: [
        {
            id: 'ringBell',
            description: 'Ring the bell at the top of the parishs tallest tower?',
            result: 'As you may your way through the Parish, you encounter the Bell Gargoyle on the roof. A long, frantic battle ensues, and though you take some hits, you manage to slay the enemy. You climb the tower and ring the bell, before making your way back to Firelink Shrine',
            hp: '-15',
            souls: '100',
        },
        {
            id: 'blacksmith',
            description: 'Visit the Blacksmith to upgrade your weapon?',
            result: 'You make your way towards the blacksmith, encountering a few smaller enemies along the way. Once there, you are able to sellsome of the items you have looted along the way, covering the cost of upgrading your weapon. Before you leave, you rest at a nearby bonfire to recover your strength, then head back to Firelink Shrine',
            hp: '20',
            souls: '0',
        },
        {
            id: 'fightBoar',
            description: 'Fight the boar at the front of the parish',
            result: "You charege the boar, hoping to take it down. However, you quickly realize that with it's thick hide, armor plated head, and razer sharp tusks, this will not be an easy fight. You manage to finally bring it down, but not before taking wounds, some serious.",
            hp: '-60',
            souls: '50',
        }
    ]
};

const anorLondo = {
    id: 'anorLondo',
    title: 'Anor Londo',
    map: {},
    image: '../assets/anor-londo.jpg',
    description: 'You are dropped off onto a high wall by some strange flying creatures. Free of their clutches, you are able to finally look out at the majestic city sprawling in front of you with its tall columns and broad sweeping arches. You see what looks like a throne room just inside the main enterance, an entryway down a small spiral staircase in the middle of the bridge, and a giant hall down and to your left. Would you like to:',
    choices: [
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        },
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        },
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        }
    ]
};

const theDukesArchives = {
    id: 'theDukesArchives',
    title: 'The Dukes Archives',
    map: {},
    image: '../assets/dukes-archives.jpg',
    description: "description of the duke's archives to come",
    choices: [
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        },
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        },
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        }
    ]
};

const catacombs = {
    id: 'catacombs',
    title: 'The Catacombs',
    map: {},
    image: '../assets/catacombs.jpg',
    description: 'description of the catacombs to come',
    choices: [
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        },
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        },
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        }
    ]
};

const kilnOfTheFirstFlame = {
    id: 'kilnOfTheFirstFlame',
    title: 'Kiln Of The First Flame',
    map: {},
    image: '../assets/kiln.jpg',
    description: 'description of the kiln of the first flame to come',
    choices: [
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        },
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        },
        {
            id: '',
            description: '',
            result: '',
            hp: '',
            souls: '',
        }
    ]
};

const quests = [
    undeadParish,
    theDukesArchives,
    anorLondo,
    catacombs,
    kilnOfTheFirstFlame
];

export default quests;