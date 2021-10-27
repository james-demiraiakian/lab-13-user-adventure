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
    description: 'You are dropped off onto a high wall by some strange flying creatures. Free of their clutches, you are able to finally look out at the majestic city sprawling in front of you with its tall columns and broad sweeping arches. You see what looks like a throne room just inside the main enterance, an entryway down a small spiral staircase in the middle of the bridge, and a Chapel down and to your left. Would you like to:',
    choices: [
        {
            id: 'throneRoom',
            description: 'Enter the throne room?',
            result: 'As you enter the throne room, two massive warriors come out, Ornstein and Smough. After a tough fight, they lay defeated, and you enter a room behind, where you see the goddess Gwynavere.',
            hp: '-10',
            souls: '120',
        },
        {
            id: 'staircase',
            description: 'Explore the doorway at the bottom of the staircase?',
            result: 'You follow the stairs down to the doorway, and find a circular room with many statues around the walls. You kneel at one and hear a voice, that of Gwyndolin. You recieve a blessing, and rest before continuing.',
            hp: '30',
            souls: '0',
        },
        {
            id: 'chapel',
            description: 'Enter the Chapel?',
            result: 'You enter the Chapel, crossing the rafters before climbing down a lader to the ground floor. On the back wall you see a large painting of a snowbound castle on the peak of a mountain. You touch the painting, only to be drawn in and trapped. You eventually encounter and fight the Crossbreed Priscilla. After great effort, you finally manage to bring her down, opening the way out and allowing you to limp back out.',
            hp: '-50',
            souls: '300',
        }
    ]
};

const theDukesArchives = {
    id: 'theDukesArchives',
    title: 'The Dukes Archives',
    map: {},
    image: '../assets/dukes-archives.jpg',
    description: 'You enter a massive library, filled with ancient tomes and strange, crystalized enemies. After a brief encounter with the areas master, a pale white dragon called Seath the Scaleless, you find yourself in an entryway. You can make out a library ahead of you, an iron bar door, and crystal caves below. Do you want to:',
    choices: [
        {
            id: 'crystalCave',
            description: 'Approach the caves?',
            result: 'You head down into the caves, light reflecting in strange rainbow patters around you. Near the end, you encounter Seath the Scaleless, an ancient dragon, brilliant but mad. He attacks, and you manage to defeat him.',
            hp: '-10',
            souls: '130',
        },
        {
            id: 'prison',
            description: 'Enter the prison?',
            result: 'You enter the prison, where Seath has many guards, and even the crazed prisoners are hostile. After spending what feels like days fighting through, you finally manage to drag yourself out.',
            hp: '-60',
            souls: '280',
        },
        {
            id: 'archive',
            description: 'Search the Archives?',
            result: 'You make your way into the Archives, seeking information. You find a hidden library room that seems to have what you are looking for. You discover that in ancient history, Seath the Scaleless had been envious of other dragons scales, so her betrayed them in exchange for power from humanity. He experimented with magic in an effort to recreate dragon scales for himself, resulting in the twisted crystal abominations everywhere.',
            hp: '25',
            souls: '0',
        }
    ]
};

const catacombs = {
    id: 'catacombs',
    title: 'The Catacombs',
    map: {},
    image: '../assets/catacombs.jpg',
    description: 'You enter the dark catacombs, skeletons and necromancers littering the place. As you make your way through, you see a man standing near a pit, a cave entrance near the bottom of a ravine, and a cracked section of wall. Do you:',
    choices: [
        {
            id: 'man',
            description: 'Visit the man by the pit?',
            result: 'You walk up to the man and speak with him. He seems unhinged as you converse. Finally, he asks you to gaze into the pit, asking what you see. As you squint into the darkness, he suddenly kicks you, sending you hurtling into the blackness.',
            hp: '-60',
            souls: '290',
        },
        {
            id: 'cave',
            description: 'Enter the cave?',
            result: 'You enter the cave, eventually passing into the Tomb of Giants. Making your way through, you encounter Gravelord Nito, one of the ancient lords from the war with the dragons. After a long fight, he lies dead, his soul collected, and you begin to make your way back to Firelink Shrine.',
            hp: '-10',
            souls: '130',
        },
        {
            id: 'wall',
            description: 'Inspect the cracked wall?',
            result: 'You inspect the cracked wall, and can feel a draft of musty air coming through, and can hear sounds from the other side. You manage to break through the wall, finding a blacksmith deep within. After speaking with him, you are able to rest, and continue your journy.',
            hp: '35',
            souls: '0',
        }
    ]
};

const kilnOfTheFirstFlame = {
    id: 'kilnOfTheFirstFlame',
    title: 'Kiln Of The First Flame',
    map: {},
    image: '../assets/kiln.jpg',
    description: 'You head down a long pathway through a ruined, ash covered landscape. A sense of dread and melancholy filling you. At the end, you find a man, Gwyn, Lord of Cinder, huddled over a dying fire. He is old and worn, but still immensely powerful. You both know why you came. To take his place and decide the fate of the world. An epic fight ensues, the shade of a god fighting to maintain his rule. You defeat him narrowly. After, you are left with a choice. You can link the flame, giving your soul to extend the Age of Flame and delay the curse of the undead for a time. Or you can leave the flame to wither and die, ushering in a new age of darkness, with you as the lord and ruler of this new age.',
    choices: [
        {
            id: 'link',
            description: 'Link the Flame.',
            result: 'You hold your hand into the flame, allowing it to consume you, using your soul to power it for a time, granting a respite from the curse of the undead and extending the Age of Flame for a time longer. But as the flame consumes you, you wonder; how long will it last? Will the curse come again? Did you make the right choice?',
            hp: '0',
            souls: '100',
        },
        {
            id: 'darkness',
            description: 'Let the flame die.',
            result: 'You turn away from the flame, leting it flicker its last flames. With the power you have gained durring your quest, you are able to rule a new age. One of darkness, with you as the leader of all.',
            hp: '0',
            souls: '100',
        }
        // ,
        // {
        //     id: '',
        //     description: '',
        //     result: '',
        //     hp: '',
        //     souls: '',
        // }
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