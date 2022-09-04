const first = { a: 2, c: 5, b: 3 };
const second = { a: 2, b: 3, c: 5 };
if (first === second) {
  //   console.log("they are same");
} else {
  //   console.log("diferent");
}

/* do not use this mathod to compare object or array
case: it compare order also
*/
const firstSring = JSON.stringify(first);
const secondString = JSON.stringify(second);

if (firstSring === secondString) {
  console.log("same");
} else {
  console.log("different");
}

//another way
function compareObjects(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
      return true;
    }
  } else {
    return false;
  }
}

const result = compareObjects(first, second);
console.log(result);
