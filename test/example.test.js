// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateChar } from '../functions.js';

const test = QUnit.test;

test('gen char', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        completed: {},
        hp: 45,
        gold: 0,
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


