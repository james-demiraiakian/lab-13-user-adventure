const undeadParish = {
    id: 'undeadParish',
    title: 'The Undead Parish',
    map: {},
    image: '../assets/undead-parish.jpg',
    description: 'As you enter the Undead Parish, you see ',
    choices: [
        {
            id: 'thing1',
            description: 'Thing one that you can do',
            result: 'thing 1 happens',
            hp: '100',
            souls: '50',
        },
        {
            id: 'thing2',
            description: 'thing 2 that you can do',
            result: 'thing 2 happens',
            hp: '50',
            souls: '100',
        },
        {
            id: 'thing3',
            description: 'thing 3 that you can do',
            result: 'thing 3 happens',
            hp: '75',
            souls: '75',
        }
    ]
};

const anorLondo = {
    id: 'anorLondo',
    title: 'Anor Londo',
    map: {},
    image: '../assets/anor-londo.jpg',
    description: 'description of anor londo to come',
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