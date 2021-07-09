interface LinkedListInter {
  length: number;
  head: any;
  append(element: any): void;
  insert(position, element): void;
  removeAt(position): void;
  remove(element): void;
  indexOf(element): void;
  isEmpty(): void;
  size(): void;
  toString(): void;
  print(): void;
}

class LinkedNode {
  element: any;
  next: any;
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList implements LinkedListInter {
  length: number;
  head: any;
  constructor() {
    this.length = 0;
    this.head = null;
  }
  append(element) {
    let node = new LinkedNode(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
}