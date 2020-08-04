import * as AddTwo from './addTwoNumbers';
/*
describe('general test pattern', ()=>{
    const arr = [
        [1, 1, 2],
        [1, 2, 3],
        [2, 1, 3],
    ];
    
    beforeEach(()=>{
        console.log('happy as a clam');
    });

    afterEach(()=>{
        console.log('see you space cowboy');
    });

    test.each(arr)('.add(%i, %i)', (a, b, expected) => {
        expect(a + b).toBe(expected);
    });
});
*/

describe('AddTwo correctness integration tests', ()=>{    
    const testData = [
        ['', 2, 2, 4],
        ['', 3, 3, 6],
        ['', 7, 4, 11]
    ];
    
    test.each(testData)('desc: %s | a: %i | b: %i | expected: %i', (desc, a, b, expected)=>{
        //build list
        
        expect(a + b).toBe(expected)
    });
});