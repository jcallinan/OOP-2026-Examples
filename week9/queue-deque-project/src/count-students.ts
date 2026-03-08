function countStudents(students: number[], sandwiches: number[]) {
  while (students.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      if (students.includes(sandwiches[0])) {
        const num = students.shift() as number;
        students.push(num);
      } else {
        break;
      }
    }
  }

  return students.length;
}

export default countStudents;
