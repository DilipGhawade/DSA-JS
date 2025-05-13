class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  length() {
    let count = 0;
    let current = this.head;
    while (current != null) {
      current = current.next;
      count++;
    }
    return count;
  }
  display() {
    let current = this.head;
    let result = "";
    while (current != null) {
      result += `${current.data} --> `;
      current = current.next;
    }
    result += ` null`;
    console.log(result);
  }
  addBegining(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      const temp = this.head;
      this.head = node;
      node.next = temp;
    }
  }

  addEnd(data) {
    const node = new Node(data);
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  addGivenPostion(postion, data) {
    const node = new Node(data);
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < postion - 1) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = node;
    node.next = current;
  }
}

function testLinkedList() {
  let linkedlist = new LinkedList();
  //   linkedlist.head = new Node(10);
  //   const firstNode = new Node(20);
  //   const secondNode = new Node(30);
  //   const thirdNode = new Node(40);
  //   linkedlist.head.next = firstNode;
  //   firstNode.next = secondNode;
  //   secondNode.next = thirdNode;

  linkedlist.addBegining(9);
  linkedlist.addEnd(50);
  linkedlist.addGivenPostion(2, 40);
  linkedlist.display();
  console.log(`the lenght of sll is: ${linkedlist.length()}`);
}

testLinkedList();
