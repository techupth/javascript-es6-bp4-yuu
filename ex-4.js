let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here

function addHobbies (studentProfile, additionalHobbies) {
  let {name, age,scores,hobbies} = studentProfile;
  hobbies = [...studentProfile.hobbies,...additionalHobbies]
  return {name, age, scores, hobbies}
}
let newStudentProfile = addHobbies(studentProfile, additionalHobbies)

console.log(newStudentProfile);
