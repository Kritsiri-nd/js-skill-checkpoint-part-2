const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
function filterScore (data) {
  const studentsScore = data.filter(data => data.score>50);
  const newStudentsScore = studentsScore.map(data => data.score*1.1);
  const sumNewStudentsScore = newStudentsScore.reduce((acc,cur)=>acc+cur,0);
  return sumNewStudentsScore.toFixed(1);
}
const fanalScore = filterScore(students);
console.log(`Total score is ${fanalScore}`);