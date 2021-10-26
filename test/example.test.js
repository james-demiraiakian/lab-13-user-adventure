// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateChar, questScore, setChar } from '../functions.js';

const test = QUnit.test;

test('generateChar', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        completed: {},
        hp: 45,
        souls: 0,
        name: 'jimmothy',
        class: 'ranger',
        race: 'elf'
    };

    const formData = new FormData();
    formData.set('name', 'jimmothy');
    formData.set('class', 'ranger');
    formData.set('race', 'elf');
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateChar(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('setChar', (expect) => {
    const expected = {
        completed: {},
        hp: 45,
        souls: 0,
        name: 'jimmothy',
        class: 'ranger',
        race: 'elf'
    };

    setChar(expected);

    const actual = JSON.parse(localStorage.getItem('CHAR'));

    expect.deepEqual(actual, expected);
});

test('scoreQuest', (expect)=>{
    // arrange
    const userObject = { 
        completed: {},
        souls: 0,
        hp: 45,
        name: 'Craboline',
        race: '',
        class: '',
    };
    const choiceObject = {
        id: 'run',
        description: 'Get the hell out of the village',
        result: ``,
        hp: -35,
        souls: 15
    };
    const questId = 'undeadParish';

    // act

    questScore(choiceObject, questId, userObject);

    // assert
    expect.equal(userObject.hp, 10);
    expect.equal(userObject.souls, 15);
    expect.equal(userObject.completed[questId], true);

});
