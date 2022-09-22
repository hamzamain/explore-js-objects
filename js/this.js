// console.log(this);

const kodomAli = {
  name: "kodom ali",
  money: 5000,
  study: "Math",
  subject: ["calculas", "algebra", "geometry"],
  examArrow: () => {
    console.log(this);
  },
  exam: function () {
    console.log(this);
    return this.name + " is participeting an Exam";
  },
  improvementExam: function (subject) {
    this.exam();
    return `${this.name} is taking improvement Exam on ${subject}`;
  },
  tritDay: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

kodomAli.exam();

const badamAli = {
  name: "kacha badam Ali",
  money: 8000,
};

badamAli.exam = kodomAli.exam;
badamAli.exam();

// function clickHendler() {
//   console.log("inside click heandler", this);
// }

const clickHendler = () => {
  console.log("inside click heandler", this);
  t;
};

document.getElementById("btn-2").addEventListener("click", function () {
  console.log(this);
});

const getGirlFriend = (name = "chokina") => "name";
console.log(getGirlFriend());
