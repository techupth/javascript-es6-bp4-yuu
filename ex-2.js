let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here

function combineScore (studentProfile) {
  let {name, age, scores} = studentProfile
  scores = {...studentProfile.scores,...studentScores}
  return {name, age, scores}
}

let newStudentProfile = combineScore(studentProfile)

console.log(newStudentProfile);


