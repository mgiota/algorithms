import Queue from './queue';

export function weave(q1, q2) {
  let q = new Queue();

  while (q1.peek() || q2.peek()) {
    if (q1.peek()) {
      q.push(q1.pop());
    }

    if (q2.peek()) {
      q.push(q2.pop());
    }
  }

  return q;
}

export function weave2(q1, q2) {
  let q = new Queue();

  while (q1.peek() || q2.peek()) {
    if (q1.peek()) {
      q.add(q1.remove());
    }

    if (q2.peek()) {
      q.add(q2.remove());
    }
  }

  return q;
}
