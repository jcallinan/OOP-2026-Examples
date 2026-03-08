import countStudents from '../count-students';

const students = [1, 1, 0, 0];
const sandwiches = [0, 1, 0, 1];

const unableToEat = countStudents([...students], [...sandwiches]);
console.log('students:', students);
console.log('sandwiches:', sandwiches);
console.log('unableToEat:', unableToEat);
