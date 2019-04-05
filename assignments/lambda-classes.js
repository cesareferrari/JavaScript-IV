// CODE here for your Lambda Classes


// Person
// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
// 


class Person {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.location = object.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}


const person1 = new Person({
  name: 'Nate',
  age: 20,
  location: 'California'
});

console.log(person1);
person1.speak();



// Instructor
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(object) {
    super(object);
    this.specialty = object.specialty;
    this.favLanguage = object.favLanguage;
    this.catchPhrase = object.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}


const cameron = new Instructor({
  name: 'Cameron',
  age: 31,
  location: 'Utah',
  specialty: 'Javascript',
  favLanguage: 'HTML',
  catchPhrase: 'I like bread'
})

console.log(cameron);
cameron.demo('Slack');
cameron.grade({name: 'Cesare'}, 'Javascript');



// Student

class Student extends Person {
  constructor(object) {
    super(object);
    this.previousBackground = object.previousBackground;
    this.className = object.className;
    this.favSubjects = object.favSubjects; // array
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

const cesare = new Student({
  name: 'Cesare',
  age: 21,
  location: 'Pennsylvania',
  previousBackground: 'Mechanic',
  className: 'WEBPT5',
  favSubjects: ['Javascript', 'HTML', 'CSS']
})

console.log(cesare);
cesare.listsSubjects();
cesare.PRAssignment('Javascript IV');
cesare.sprintChallenge('Airport website');
cesare.speak();



// Project Manager

class ProjectManager extends Instructor {
  constructor(object) {
    super(object);
    this.gradClassName = object.gradClassName;
    this.favInstructor = object.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const nate = new ProjectManager({
  name: 'Nate',
  age: 21,
  location: 'Montana',
  specialty: 'Javascript',
  favLanguage: 'CSS',
  catchPhrase: 'Hello howdy',
  gradClassName: 'CS1',
  favInstructor: 'Sean'
})


console.log(nate);
nate.speak();
nate.standUp('webpt5_nate');
nate.debugsCode({name: 'Cesare'}, 'React');

