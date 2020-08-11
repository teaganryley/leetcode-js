//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const prepend = (data, head) => {
    let temp = new ListNode(data);
    
    // if no head, make new list
    if (head===undefined) {
        return temp;
    } else {
        temp.next = head;
        return temp;
    }
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

const addTwoLists = (l1, l2) => {
    return ListNode();
};

export { ListNode, prepend, toList, toArray, addTwoLists }