const compose = (...fns) => x => fns.reduceRight ((v, f) => f(v), x);

function isBiggerThanThree(value) {
  return value > 3
}

function mapBoolToHumanOutput(value) {
  return value ? "yes": "no"
}

const biggerThanThreeAndMapOutput = compose(
  mapBoolToHumanOutput,
  isBiggerThanThree
)

console.log(biggerThanThreeAndMapOutput(4))