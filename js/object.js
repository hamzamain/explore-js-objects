//1.create object using object literals: normal and useable mathod/useable
const player = {};

player.name = "small Nirob";
player.skills = "batsman";
player.bat = function () {
  console.log("swing your bat");
};

// console.log(player);
// player.bat();

const student = {
  name: "panday",
  jab: "khay anday",
  ball: function () {
    console.log("throw the ball");
  },
  salary: 15000,
};

//2.object constructor

const person = new Object();
// console.log(person);

//3.object creat method :: atel er moddhe kisu nai kintu student er moddhe ase ...atel ke console.log() korle {} pawa jabe kintu atel dot property name diya (atel.name) search korle atel prototopical chain dhore student theke value neya ashbe;

const atel = Object.create(student);
console.log(atel.salary);

//4. class for creat object/useable

class Person {
  name = "abul";
  address = "shodor ghat";
  constructor(age) {
    this.age = age;
  }
}

const person1 = new Person(56);
// console.log(person1);

// 5. creat object by function : old mathod/ useless
function Car(modal, price) {
  this.modal = modal;
  this.price = price;
}

const tesla = new Car("elon", 32);
console.log(tesla);
