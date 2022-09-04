const kodomAli = {
  name: "kodom ali",
  money: 5000,
  study: "Math",
  subject: ["calculas", "algebra", "geometry"],
  exam: function () {
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

const result = kodomAli.exam();

const badamAli = {
  name: "kacha badam",
  money: 8000,
};

const result2 = kodomAli.exam.call(badamAli);
const tritDayOfBadam = kodomAli.tritDay.call(badamAli, 600, 200);
console.log(tritDayOfBadam);
const tritDayOfBadam2 = kodomAli.tritDay.apply(badamAli, [1000, 100]);
console.log(tritDayOfBadam2);
// console.log(result2);
const badamaliTrit = kodomAli.tritDay.bind(badamAli);
const remaning = badamaliTrit(800, 20);
console.log(remaning);
