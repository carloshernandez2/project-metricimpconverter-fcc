const getNum = function (input) {
  let result;

  const arr = input.split(/([0-9]+)/),
    unformattedValue = arr.slice(0, arr.length - 1),
    f = unformattedValue.find((element) => element === "/")
      ? unformattedValue.join("").split("/")
      : false,
    num = !unformattedValue.length
      ? 1
      : f && f.length < 3
      ? f.reduce((p, c) => p / c)
      : Number(unformattedValue.join(""));

  result = num;

  return result;
};

console.log(getNum("lb"));
