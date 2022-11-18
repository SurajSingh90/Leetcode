function max(string) {
  let map = new Map();
  // let temp = 0
  for (let i = 0; i < string.length; i++) {
    if (map.has(string[i])) {
      let temp = map.get(string[i]);

      map.set(string[i], temp + 1);
      // console.log(string[i],temp)
    } else {
      map.set(string[i], 1);
    }
  }
  let max = -1;
  let result = "";
  for (let [key, values] of map) {
    if (max < values) {
      max = values;
      result = key;
    }
  }
  console.log(max, result);
}
max("wefeqweeq");
