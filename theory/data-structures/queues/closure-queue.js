function makeQueue(size) {
    var q = new Array(size);
    var front = 0;
    var rear = 0;
    return {
        isEmpty: function () { return rear === 0; },
        isFull: function () { return rear === size; },
        enqueue: function (item) {
            if (rear === size)
                throw new Error("Queue is full");
            q[(front + rear) % size] = item;
            console.log("q[(front + rear) % size] ".concat(q[(front + rear) % size]));
            rear++;
        },
        dequeue: function () {
            if (rear === 0)
                return undefined;
            var item = q[front];
            q[front] = undefined;
            front = (front + 1) % size;
            rear--;
            return item;
        },
        printQueue: function () { return console.log(q); },
        getCount: function () { return rear; },
    };
}
var mainMethod = function () {
    var queue = makeQueue(5);
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
    console.log("count: ".concat(queue.getCount()));
    console.log("dequeued:", queue.dequeue());
    console.log("count: ".concat(queue.getCount()));
};
mainMethod();
