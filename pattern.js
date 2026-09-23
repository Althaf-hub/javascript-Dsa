function star(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += "*";
    }
    result += line + "\n";
  }
  return result;
}

console.log(star(4));
