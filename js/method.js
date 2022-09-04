const student = {
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

const output = student.exam();
console.log(student.money);
// console.log(output);
const reExam = student.improvementExam("aljebra");
// console.log(reExam);
const remaning = student.tritDay(900, 100);
// console.log(remaning);
const dolaRemaning = student.tritDay(500, 50);
console.log(dolaRemaning);
console.log(student.money);
