let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let additionalProperties = {
  photo: "https://placedog.net/500",
  hobbies: ["Football", "Coding"],
};

// Start coding here

function combineStudentProfile (studentProfile, additionalProperties) {
  return {...studentProfile, ...additionalProperties}
}

let newStudentProfile =combineStudentProfile(studentProfile, additionalProperties)

console.log(newStudentProfile);
