// Q2 => Write a program that grades students based on their marks
// . If greater than 90 then A Grade
// . If between 70 and 90 then a B Grade
// . If between 50 and 70 then a C Grade
// . Below 50 then an F Grade

const studentsGrades = (grade) => {
  if (grade > 90) {
    console.log("A Grade");
  } else if (grade >= 70 && grade <= 90) {
    console.log("B Grade");
  } else if (grade >= 50 && grade < 70) {
    console.log("C Grade");
  } else {
    console.log("F Grade");
  }
};

studentsGrades(92);
studentsGrades(78);
studentsGrades(65);
studentsGrades(40);
