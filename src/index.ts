export {};

// Type 'IterableIterator' is not an array type or string type

function* generator(a: number, b: number, c: number): IterableIterator<number> {
  yield a;
  yield b;
  yield c;
}

for (const num of generator(5, 10, 15)) {
  console.log(num); // 👉️ 5, 10, 15
}

// -------------------------------------------------------------------

const regexp = RegExp('he*', 'g');
const str = 'hello hey hi';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(match);
}
