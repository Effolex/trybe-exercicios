const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.reduce((acc, student, index)=>{
    const sumOfGrades = grades[index].reduce((acc,grade)=>acc+=grade);
    const numOfGrades = grades[index].length;
    return acc = [...acc, {name:student, average:(sumOfGrades/numOfGrades)}]
  },[])
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);