/**
 * author: @TuringProblem
 *
 * using an array to implement queue and using two pointers for 0(1) insertion adn deletion
 **/

type Queue<T> = {
  size: number,
  front: number,
  rear: number,
  q: T[],
};

const createQueue = <T>(size: number): Queue<T> => ({
  size,
  front: -1,
  rear: -1,
  q: new Array(size),
});

const isEmpty = <T>(queue: Queue<T>): boolean => queue.front === queue.rear;
const isFull = <T>(queue: Queue<T>): boolean => queue.rear === queue.size - 1;
// steps   1) check if full, then increment rear and insert ite
const enqueue = <T>(queue: Queue<T>, item: T): void => {
  if (isFull(queue)) throw new Error("Queue is full");

  queue.q[++queue.rear] = item;
};

const dequeue = <T>(queue: Queue<T>): T | undefined => {
  return isEmpty(queue) ? undefined : queue.q[queue.front++];
}


const main = () => {
  const queue = createQueue<number>(5);
  enqueue(queue, 1);
  enqueue(queue, 2);
  enqueue(queue, 3);
  enqueue(queue, 4);
  enqueue(queue, 5);

  console.log(queue);
  console.log(isFull(queue));
  console.log(isEmpty(queue));
  console.log(dequeue(queue));
  console.log(dequeue(queue));
  console.log(dequeue(queue));
  console.log(dequeue(queue));
  console.log(queue);
};

main();
