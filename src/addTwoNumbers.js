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
    
    /*
    for (let i = 0; i < arr.length; i++) {
        head = prepend(arr[i], head);
    }
    */
    return head; 
}

const toArray = head => {
    // uses traversal to build an array from linked list
    let current = head;
    const arr = [];

    while (current !== null) {
        arr.unshift(current.val);        
        current = current.next;
    }
    return arr; 
}

const addTwoNumbers = (l1, l2) => {
    return true;
};

export { ListNode, prepend, toList, toArray, addTwoNumbers }