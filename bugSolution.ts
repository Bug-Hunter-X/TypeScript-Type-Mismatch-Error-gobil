function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error('Error: Both arguments must be numbers.');
    return 0; // Or handle the error in a more appropriate way
  }
}

let result1 = addSafe(10, 5);  // Correct: 15
let result2 = addSafe("hello", 5); // Error: Both arguments must be numbers.  Result will be 0.