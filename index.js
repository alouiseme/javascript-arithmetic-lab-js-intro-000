function add(a, b){
  return a + b
}

function subtract(a,b){
  return a - b
}

function multiply(a,b){
  return a * b 
}

function divide(a,b){
  return a/b
}

function inc(n){
  var incremented = n--
  return incremented
}

function dec(n){
  return n-- 
}

function makeInt(x){
  var parsed = parseInt(x, 10);
  if (isNaN(parsed)) { return 0 }
  return parsed * 100;
}

function preserveDecimal(n){
  return parseFloat(n)
}