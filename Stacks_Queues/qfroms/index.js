const Stack = require('../Stacks/index');

class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(elem) {
    this.stack1.push(elem);
  }

  remove() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }

    let result = this.stack2.pop();

    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.push());
    }

    return result;
  }

  peek() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }

    let result = this.stack2.peek();

    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.push());
    }

    return result;
  }

  size() {

  }
}

module.exports = MyQueue;
