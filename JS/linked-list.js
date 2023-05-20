function printList(list) {
  var n = list.head;

  while (n != null) {
    console.log(n.data + " ");
    n = n.next;
  }
}

class myNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new myNode(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  insert(val, index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    const newNode = new myNode(val);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currNode = this.head;
      let previousNode = null;
      let currIndex = 0;

      while (currIndex < index) {
        previousNode = currNode;
        currNode = currNode.next;
        currIndex++;
      }

      newNode.next = currNode;
      previousNode.next = newNode;
    }

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    let currNode = this.head;
    let previousNode = null;
    let currIndex = 0;

    if (index === 0) {
      this.head = currNode.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      while (currIndex < index) {
        previousNode = currNode;
        currNode = currNode.next;
        currIndex++;
      }

      previousNode.next = currNode.next;

      if (index === this.length - 1) {
        this.tail = previousNode;
      }
    }

    this.length--;
    return true;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currNode = this.head;
    let currIndex = 0;

    while (currIndex < index) {
      currNode = currNode.next;
      currIndex++;
    }

    return currNode.data;
  }
}

const testList = new LinkedList();

testList.append(1);
testList.append(2);
testList.append(4);
testList.insert(3, 2);

printList(testList);
