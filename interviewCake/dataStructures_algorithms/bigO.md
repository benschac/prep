# Data Structures + Algorithms

### Big O Notation (Time Complexity)
- Express runtime in how quickly it grows relative to the input.
- Size of the input is n.
- We care about steps that grow the fastest.

#### O(1) Constant Time
- Regardless of the size of `n` you only have one step to execute.

Example:
```js
const array = [1,2,3,4,5];
<!-- O(1) -->
const firstElement = array[0]; 
```

#### O(n) Linear Time
- The steps to execute depend on the size of `n`.

Example:
```js
for (let index = 0, l = array.length; i < l; i++) {
  // O(n) console.log will fire as many times as the array's length
  console.log(array[i]);
}
```

#### O(n²) Quadradic Time
- The steps to execute depend on the size of `n` times `n`.
- For an input `n` size of 100 it will execute 1000 steps.

Example:
```js
const array = [1,2,3,4,5,6,7,8,9,10];
for (let index = 0, l = array.length; i < l; i++) {
  for(let j = 0; j < l; j++) {
    // O(n²) console.log will fire 100 times.
    console.log(i, j);
  }
}
```

#### Dropping Constants
- TL;DR -- We only care about the worst case runtime.
Example:
```js
<!-- O(2n) -->
function twoForLoops(n) {
  // The first n
  for(let i = 0, l = 20; i < 20; i++) {
    console.log(i);
  }
  // The second n
  for(let i = 0, l = 20; i < 20; i++) {
    console.log(i);
  }
}
```

- Because the size of n is growing by a constant we can say time is:
`O(2n) -> O(n)` because it's not growing at a rate that will effect preformance in most cases.


Example:
`O(1 + n / 2 + 100) -> O(n)` constants are less significant than the
size of `n`.
```js
function (array) {
  // O(1)
  console.log(array[0])

  // O(n)
  const half = array.length / 2;

  // O(1) + O(n) == O(n)

  let idx = 0;
  // n / 2
  while(idx < half) {
    console.log(array[idx]);
    idx++;
  }

  // O(100)
  for(let i = 0; i < 100; i++) {
    // fire function 100 times.
  }
}
```

- O($n^3$+50n​²+10000) -> O($n^3$)

### Space complexity
- The amount of memory needed to run the algorithm

#### O(1) Constant Time
- We're only using one variable.

Example: O(1)
```js
  function (n) {
    // setting i as the single variable.
    for(let i = 0; i < n; i++) {
      // function to fire
    }
  }
```

Example: O(n)
```js
function (n) {
  const array = [];
    for(let i = 0; i < n; i++) {
      // O(n) adding n size of new variables to memory
      array.push(i);
    }
  }
```

### Time + Space
- This is usually a trade off, or can be.




