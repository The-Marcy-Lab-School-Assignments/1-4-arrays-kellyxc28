## Bonus: Really understand pass by value/reference
We've been passing references and values throughout this assignment, but do you really understand the concept? We'll talk about it again throughout this module, but if you're done, check out the `ref-examples/` directory. There's some graphics and example code in there. Play around with them!

A question to grapple with is this:

```js

const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8];
const bigArr1 = [arr1, arr2];
const bigArr2 = [...bigArr1];
arr1.push('oh dear');

console.log(bigArr1)
console.log(bigArr2)
```

What does that log and why? We've talked about copying arrays, but called them "shallow" copies. Why?

This logs `[ [ 1, 2, 3, 4, 'oh dear' ], [ 5, 6, 7, 8 ] ]`. In line 11, bigArr2 array is initialized with its value being the shallow copy of bigArr1 array. This is a shallow copy because the changes made in bigArr1 can be made in bigArr2 as it is dependent on bigArr1.

https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy 

