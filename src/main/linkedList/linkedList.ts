interface LinkedListInter {
  length: number;
  head: any;
  append(element: any): void;
  insert(position:any, element:any): boolean;
  removeAt(position): any;
  remove(element): void;
  indexOf(element): void;
  isEmpty(): void;
  size(): void;
  getHead(): any;
  toString(): void;
  // print(): void;
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
  removeAt(position) {
    if(position > -1 && position < this.length) {
      let current = this.head;
      let previousNode;
      if(position === 0) {
        this.head = current.next;
      } else {
        for(let i = 0; i < position; i++) {
          previousNode = current;
          current = current.next;
        }
        previousNode.next = current.next;
      }
      this.length--;

      return current.element;
    } else {
      return null;
    }
  }
  insert(position, element) {
    if(position >= 0 && position <= this.length) {
      let node = new LinkedNode(element);
      let current = this.head;
      let previousNode;
      if(position === 0) {
        this.head = node;
        node.next = current.next;
      } else {
        for(let i = 0; i < position; i++) {
          previousNode = current;
          current = current.next;
        }
        previousNode.next = node;
        node.next = current;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  toString() {
    let current = this.head;
    let string = '';
    while(current) {
      string += current.element;
      current = current.next;
    }
    return string;
  }
  indexOf(element) {
    let current = this.head;
    let currentIndex = -1;
    while(current) {
      if(current.element === element) {
        return ++currentIndex;
      }
      current = current.next;
      currentIndex++;
    }
    return -1;
  }
  remove(element) {
    let currentIndex = this.indexOf(element);
    return this.removeAt(currentIndex);
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  getHead() {
    return this.head;
  }
}
