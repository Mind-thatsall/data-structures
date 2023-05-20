
function printList(list) {
  var n = list.head;

  while (n != null) {
    console.log(n.data + " ");
    n = n.next;
  }
}

class Stack {

  constructor(stack_size) {
    this.stack_size = stack_size;
    this.items = Array(stack_size).fill(0);
    this.current = 0;
  }

  push(value) {
    if (this.current > this.items.length - 1) {
      return "Stack overflow";
    } else {
      this.items[this.current] = value;
      this.current++;
    }
  }

  pop() {
    if (this.length === 0) {
      return null;
    } else {
      this.current--;
      return this.items.pop();
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const myStack = new Stack(4);

myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);

console.log(myStack);
