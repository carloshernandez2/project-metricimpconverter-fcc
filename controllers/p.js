const getUnit = function (input) {
  let result;

  const arr = input.split(/([0-9]+)/),
    unformattedValue = arr[arr.length - 1].toLowerCase().replace(".", ""),
    unit = unformattedValue.match(/^l$/)
      ? unformattedValue.toUpperCase()
      : unformattedValue.match(/^lbs$|^gal$|^mi$|^k[gm]$/)
      ? unformattedValue
      : false;

  result = unit;

  return result;
};

console.log(getUnit("2galo"));
// let input = 'kg'
// console.log(input.replace('.', ''))
