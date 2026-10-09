#let functions = (
  "enqueue(x)",
  "dequque()",
  "isEmpty()",
  "isFull()",
  "first()",
  "last()",
)

= Queue
#line(length: 100%)

Queues are FIFO compared to stacks which are LIFO.

=== Queue ADT:

1) Space for storing elements

2) A pointer to the first element

3) A pointer to the last element

#line(length: 100%)
=== operations: 

#functions.join("\n")
#line(length: 100%)

Queues can be implemented using #emph("arrays") or #emph("linked lists").


=== Queues as Arrays

1) Queue using a single pointer

Q [1, 2, 3, 4, 5, 6, 7]

the one pointer is "rear" 

2) Queue using front and rear pointers

3) Drawbacks of Queue using arrays

