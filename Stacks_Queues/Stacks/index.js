class Stack {
  constructor() {
    this.elements = [];
  }

  push(elem) {
    this.elements.push(elem);
  }

  pop(){
    return this.elements.pop();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  first() {
    return this.elements[0];
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }

  size() {
    return this.elements.length;
  }
}

export default Stack;
