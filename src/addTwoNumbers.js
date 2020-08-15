//Definition for singly-linked list
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const addTwoLists = (l1, l2) => {
    return new ListNode(1);
};

export { ListNode, addTwoLists }