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

const buildList = num => {
    // builds linked list from an integer, returns pointer to head of ll
    return ``;
}

const printList = head => {
    // uses traversal to print list contents
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next
    }
}

const addTwoNumbers = (l1, l2) => {
    return true;
};

export { ListNode, prepend, buildList, printList, addTwoNumbers }