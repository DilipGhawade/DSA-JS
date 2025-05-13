class Node {
  next = null;
  constructor(element) {
    this.element = element;
  }
}

class Sll {
  head = null;

  isertAtBegain(ele) {
    let node = new Node(ele);
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  display() {
    let current = this.head;
    let result = "";
    while (current != null) {
      result += `${current.element} --> `;
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  insertLast(value) {
    let node = new Node(value);
    let current = this.head;
    if (current === null) {
      this.head = node;
      return;
    }
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }

  insertAtPosition(positon, value) {
    let node = new Node(value);
    if (this.head === null) {
      this.isertAtBegain(value);
      return;
    }
    if (positon === 1) {
      this.isertAtBegain(value);
      return;
    }
    let count = 1;
    let previous = this.head;
    while (count < positon - 1) {
      previous = previous.next;
      count++;
    }
    console.log(previous.element);
    node.next = previous.next;
    previous.next = node;
  }
}
const sll = new Sll();
// sll.isertAtBegain(10);
// sll.isertAtBegain(20);
// sll.isertAtBegain(30);
sll.insertLast(9);
sll.insertAtPosition(1, 10);
sll.insertAtPosition(1, 11);
sll.insertAtPosition(3, 110);

sll.display();
