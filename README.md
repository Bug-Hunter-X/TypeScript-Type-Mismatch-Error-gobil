# TypeScript Type Mismatch Bug

This repository demonstrates a common type mismatch error in TypeScript. The `add` function is defined to accept two numbers, but the code calls it with a string and a number, resulting in a type error.

The solution involves using type guards or narrowing to ensure correct argument types are passed to the function.

## How to Reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler: `tsc bug.ts`.
3. Observe the type error reported by the compiler.

## Solution

The solution is provided in `bugSolution.ts`.