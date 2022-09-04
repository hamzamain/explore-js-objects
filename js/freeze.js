const bottol = { color: "yellow", price: 50, isClean: true, capasity: 1 };
const keys = Object.keys(bottol);
// console.log(keys);
const pairs = Object.entries(bottol);
// console.log(pairs);

// Object.seal(bottol);
Object.freeze(bottol);
bottol.price = 1000;
console.log(bottol);
delete bottol.isClean;
console.log(bottol);

/* const friend = ["rajjak", "joshim", "koburi", "manna"];
delete friend[2];
console.log(friend); */
