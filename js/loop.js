const bottol = { color: "yellow", price: 50, isClean: true, capasity: 1 };
const colora = bottol["color"];
// console.log(colora);

/* 
// 3 way of read property value of an object

1.bottol.color
2.bottol['color']
3.bottol[key]
*/

const keys = Object.keys(bottol);

for (const key of keys) {
  //   console.log(key, bottol[key]);
}

for (const key in bottol) {
  //   console.log(key, bottol[key]);
}

//advanced
for (const [key, value] of Object.entries(bottol)) {
  console.log(key, value);
}
