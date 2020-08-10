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
    
    test('toList return type', ()=>{
        return '';
    });

    test('single node',()=>{
        //define mock object

        //call single node/number toList
        
        //compare mocked object to return 
        return '';
    });

    test('integration test with append()', () => {
        // 1217 should map to LL 7->1->2->1
        let current = AddTwo.toList(1217);
        let arr = [1,2,1,7];

        for (let i = arr.length-1; i >= 0; i--) {
            expect(current.data).toBe(arr[i]);
            current = current.next; 
        }
        //let head = AddTwo.buildList(1217);
        //AddTwo.printList(head);
        // iterate backwards through num
        // for each digit:
        //      assert i = current_node.data
    });
});

describe('toArray testing',()=>{
    test('single case correctness', ()=>{
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