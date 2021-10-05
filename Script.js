function customPrompt(text) {
  let result;
  do {
    result = +prompt(text);
  } while (isNaN(result));
  return result;
}

const a = customPrompt(`Enter first number`);

let b;

do {
  b = customPrompt(`Enter second number (must be more than first)`);
} while (b <= a);

const h = customPrompt(`Enter step`);

var r = 0;

for (let i = a; i <= b; i += h) {
  r += factorial(i);
}

console.log(r);

function factorial(n) {
  let result = 1;

  for (let j = 1; j <= n; j++) {
    result *= j;
  }

  return result;
}
