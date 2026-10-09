
function makeQueue<T>(size: number) {
  const q: (T | undefined)[] = new Array(size);
  let front = 0;
  let rear = 0;

  return {
    isEmpty: () => rear === 0,
    isFull: () => rear === size,
    enqueue: (item: T) => {
      if (rear === size) throw new Error("Queue is full");
      q[(front + rear) % size] = item;
      console.log(`q[(front + rear) % size] ${q[(front + rear) % size]}`);
      rear++;
    },
    dequeue: (): T | undefined => {
      if (rear === 0) return undefined;
      const item = q[front];
      q[front] = undefined;
      front = (front + 1) % size;
      rear--;
      return item;
    },
    printQueue: () => console.log(q as any),
    getCount: () => rear,
  }
}



const mainMethod = () => {
  const queue = makeQueue<number>(5);
  queue.enqueue(1);
  queue.printQueue();
  queue.enqueue(59);
  queue.printQueue();
  queue.enqueue(21);
  queue.printQueue();
  queue.enqueue(15);
  queue.printQueue();
  queue.enqueue(3);
  console.log("dequeued:", queue.dequeue());
  queue.printQueue();
  console.log("dequeued:", queue.dequeue());
  queue.enqueue(42); // reuses freed slot
  queue.printQueue();
  console.log("dequeued:", queue.dequeue());
  queue.printQueue();
  console.log("dequeued:", queue.dequeue());
  queue.printQueue();
  console.log("dequeued:", queue.dequeue());
  queue.printQueue();
  console.log(`count: ${queue.getCount()}`);
  console.log("dequeued:", queue.dequeue());
  console.log(`count: ${queue.getCount()}`);




};

mainMethod();
