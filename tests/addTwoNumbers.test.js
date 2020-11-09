import * as AddTwo from '../src/addTwoNumbers';

// helper methods
const prepend = (data, head) => {
    let temp = new AddTwo.ListNode(data);
    
    // if no head, make new list
    if (head===undefined) {
        return temp;
    } else {
        temp.next = head;
        return temp;
    }
}

const toArray = head => {
    // translates linked list data into array of values, for unit testing purposes.
    let current = head;
    const arr = [];

    while (current !== null) {
        arr.unshift(current.val);        
        current = current.next;
    }
    return arr; 
}

const toList = num => {
    // builds linked list from an integer,returns pointer to head of ll
    const arr = Array.from(String(num), Number);
    let head;

    arr.forEach(value => {
        head = prepend(value, head);
    });
    return head; 
}

describe('toList() testing', ()=>{
    // note: toList implicitly tests prepend fcn
    test('toList returns ListNode object', ()=>{
        const mock = new AddTwo.ListNode(1);
        
        expect(toList(1)).toEqual(mock);
    });

    test('toList correctness compared to harcoded list, using traversal',()=>{
        // build hardcoded list (no append): 2->4->3
        let mock = new AddTwo.ListNode(2);
        mock.next = new AddTwo.ListNode(4);
        mock.next.next = new AddTwo.ListNode(3);

        let head = toList(342);
        
        while (mock !== null) {
            expect(head).toEqual(mock);
            mock = mock.next;
            head = head.next;
        }
    });
});

describe('toArray() testing',()=>{
    test('convert from list to array', ()=>{
        // build hardcoded list (no append)
        const head = new AddTwo.ListNode(2);
        head.next = new AddTwo.ListNode(4);
        head.next.next = new AddTwo.ListNode(3);

        //console.log(AddTwo.toArray(head));
        expect(toArray(head)).toEqual([3,4,2]);
    });
});

describe('AddTwo() integration tests', ()=>{    
    const testData = [
        //['base example:', 342, 465, [8,0,7]]
        ['single node', 1, 1, [2]]
    ];
    
    test.each(testData)('desc: %s | a: %i | b: %i | expected: %i', (desc, l1, l2, expected)=>{
        //build lists
        let list1 = toList(l1);
        let list2 = toList(l2);
        
        let result = AddTwo.addTwoLists(list1, list2);

        //TODO: might have to reverse expected array

        // traverse result, comparing to expected
        expected.forEach(value => {
            expect(result.val).toBe(value);
        });
    });
});