const sum = (a, b) => a + b

const sub = (a, b) => a - b

const div = (a, b) => (b === 0) ? 'Zero is not divisible!' : a / b

const multi = (a, b) => a * b

export {
  sum,
  sub,
  div,
  multi
}
