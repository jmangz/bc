/*
Fullstack Academy - JavaScript JumpStart

Prime - Challenge

The function prime(num) accepts a number argument and returns the boolean `true` if the number is a prime number otherwise it returns return `false`.

<br>

####Examples:

```js
- INPUT: prime(5);
- OUTPUT: true


- INPUT: prime(10);
- OUTPUT: false
```
*/

// Write Code Below

function prime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
