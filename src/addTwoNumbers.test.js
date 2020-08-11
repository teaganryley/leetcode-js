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

describe('toList() testing', ()=>{
    // note: toList implicitly tests prepend fcn
    test('toList returns ListNode object', ()=>{
        const mock = new AddTwo.ListNode(1);
        
        expect(AddTwo.toList(1)).toEqual(mock);
    });

    test('toList correctness compared to harcoded list, using traversal',()=>{
        // build hardcoded list (no append): 2->4->3
        let mock = new AddTwo.ListNode(2);
        mock.next = new AddTwo.ListNode(4);
        mock.next.next = new AddTwo.ListNode(3);

        let head = AddTwo.toList(342);
        
        while (mock !== null) {
            expect(head).toEqual(mock);
            mock = mock.next;
            head = head.next;
        }
    });
});

describe('toArray() testing',()=>{
    test('correctness over ', ()=>{
        // build hardcoded list (no append)
        const head = new AddTwo.ListNode(2);
        head.next = new AddTwo.ListNode(4);
        head.next.next = new AddTwo.ListNode(3);

        //console.log(AddTwo.toArray(head));
        expect(AddTwo.toArray(head)).toEqual([3,4,2]);
    });
});

describe('AddTwo correctness integration tests', ()=>{    
    const testData = [
        ['', 2, 2, 4],
        ['', 3, 3, 6],
        ['', 7, 4, 11]
    ];
    
    test.each(testData)('desc: %s | a: %i | b: %i | expected: %i', (desc, a, b, expected)=>{
        //build list
        
        // TODO: real correctness tests
        expect(a + b).toBe(expected);
    });
});