function transform(x: any) {
  if (typeof x === "string") {
    return x[0].toUpperCase() + x.slice(1);
  } else if (typeof x === "number") {
    return x + 100;
  } else {
    return !x;
  }
}
console.log(transform("hello"));
console.log(transform(10));
console.log(transform(true));
54

