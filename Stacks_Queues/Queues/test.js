import Queue from './queue';
import { weave, weave2 } from './index';

describe('Queue', () => {
  it('adds an element at the end of the queue', () => {
    const q = new Queue();
    q.push(1);
    expect(q.size()).toEqual(1);
  });

  it('removes an element from the beginning', () => {
    const q = new Queue();
    q.push(1);
    q.push(2);
    q.push(3);
    expect(q.pop()).toEqual(1);
  })
});

describe('weave', () => {
  it('merges 2 queues', () => {
    const q1 = new Queue();
    q1.push('Hi');
    q1.push('to');
    q1.push('you');

    const q2 = new Queue();
    q2.push(1);
    q2.push(2);
    q2.push(3);

    const q = weave(q1, q2);
    console.log(q);
  });
});

describe('weave 2', () => {
  it('merges 2 queues', () => {
    const q1 = new Queue();
    q1.add('You');
    q1.add('to');
    q1.add('hi');

    const q2 = new Queue();
    q2.add(3);
    q2.add(2);
    q2.add(1);

    const q = weave2(q1, q2);
    console.log(q);
  });
});
