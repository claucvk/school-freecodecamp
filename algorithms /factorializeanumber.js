function factorialize(num) {
  var n = 1;
  if (num === 0) {
    return 1;
  } else {
    for (var i = 1; i <= num; i++) {
    n *= i;
  }

  return n;
  }

}

factorialize(10);
