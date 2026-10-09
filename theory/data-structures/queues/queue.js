/**
 * author: @TuringProblem
 *
 * using an array to implement queue and using two pointers for 0(1) insertion adn deletion
 **/
var createQueue = function (size) { return ({
    size: size,
    front: -1,
    rear: -1,
    q: new Array(size),
}); };
var isEmpty = function (queue) { return queue.front === queue.rear; };
var isFull = function (queue) { return queue.rear === queue.size - 1; };
// steps   1) check if full, then increment rear and insert ite
var enqueue = function (queue, item) {
    if (isFull(queue))
        throw new Error("Queue is full");
    queue.q[++queue.rear] = item;
};
var dequeue = function (queue) {
    return isEmpty(queue) ? undefined : queue.q[queue.front++];
};
var main = function () {
    var queue = createQueue(5);
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
