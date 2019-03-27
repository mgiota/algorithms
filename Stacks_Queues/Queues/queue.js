import Stack from '../Stacks/index';

class Queue extends Stack  {
  constructor() {
    super();
    this.elements = [];
  }

  pop() {
    return this.elements.shift();
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }

  add(elem) {
    this.elements.unshift(elem);
  }

  remove() {
    return this.elements.pop();
  }
}

export default Queue;
