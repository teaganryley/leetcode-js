import * as AddTwo from './addTwoNumbers';

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

    test.each(arr)('.add(%i, %i)', (c, b, expected) => {
        expect(c + b).toBe(expected);
    });
});