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
let newStudentProfile = {
  ...studentProfile, 
  hobbies: [...studentProfile.hobbies, ...additionalHobbies]};

  // หรือแบบนี้ก็ได้เช่นกัน 
//   newStudentProfile = { ...studentProfile };
// newStudentProfile.hobbies = [...studentProfile.hobbies, ...additionalHobbies];
console.log(newStudentProfile);
