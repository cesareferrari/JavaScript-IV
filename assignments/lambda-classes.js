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


const doc = new Person({
  name: 'Doc',
  age: 20,
  location: 'California'
});

console.log(doc);
doc.speak();



// Instructor

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

  gradeStudent(student) {
    let randomNumber = Math.floor(Math.random() * 20)

    if (student.grade > 50) {
      student.grade = student.grade - randomNumber;
    } else {
      student.grade = student.grade + randomNumber;
    }
  }
}


const grumpy = new Instructor({
  name: 'Grumpy',
  age: 31,
  location: 'Utah',
  specialty: 'Javascript',
  favLanguage: 'HTML',
  catchPhrase: 'Go to hell!'
})


const happy = new Instructor({
  name: 'Happy',
  age: 33,
  location: 'Pennsylvania',
  specialty: 'React',
  favLanguage: 'C',
  catchPhrase: 'You are beautiful'
})

console.log(grumpy);
grumpy.demo('Slack');
grumpy.grade({name: 'Bashful'}, 'Javascript');

console.log(happy);
happy.demo('Tables');
happy.grade({name: 'John'}, 'CSS');



// Student

class Student extends Person {
  constructor(object) {
    super(object);
    this.previousBackground = object.previousBackground;
    this.className = object.className;
    this.favSubjects = object.favSubjects; // array
    this.grade = object.grade;
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

const bashful = new Student({
  name: 'Bashful',
  age: 21,
  location: 'Pennsylvania',
  previousBackground: 'Mechanic',
  className: 'WEBPT5',
  favSubjects: ['Javascript', 'HTML', 'CSS'],
  grade: 94
})



const dopey = new Student({
  name: 'Dopey',
  age: 21,
  location: 'New Mexico',
  previousBackground: 'Fisherman',
  className: 'WEB6',
  favSubjects: ['React', 'Javascript', 'HTML', 'CSS'],
  grade: 12 
})


console.log(bashful);
bashful.listsSubjects();
bashful.PRAssignment('Javascript IV');
bashful.sprintChallenge('Airport website');
bashful.speak();

grumpy.gradeStudent(bashful);
console.log(`${bashful.name}'s grade is now: ${bashful.grade}`);


console.log(dopey);
dopey.listsSubjects();
dopey.PRAssignment('Watershed project');
dopey.sprintChallenge('Javascript Challenge');
dopey.speak();

grumpy.gradeStudent(dopey);
console.log(`${dopey.name}'s grade is now: ${dopey.grade}`);



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

const sleepy = new ProjectManager({
  name: 'Sleepy',
  age: 21,
  location: 'Montana',
  specialty: 'Javascript',
  favLanguage: 'CSS',
  catchPhrase: 'Hello howdy',
  gradClassName: 'CS1',
  favInstructor: 'Sean'
})


console.log(sleepy);
sleepy.speak();
sleepy.standUp('webpt5_nate');
sleepy.debugsCode({name: 'Cesare'}, 'React');


const sneezy = new ProjectManager({
  name: 'Sneezy',
  age: 31,
  location: 'Idaho',
  specialty: 'HTML',
  favLanguage: 'Javascript',
  catchPhrase: 'You are a potato',
  gradClassName: 'CS4',
  favInstructor: 'Grumpy'
})


console.log(sneezy);
sneezy.speak();
sneezy.standUp('webpt5_nate');
sneezy.debugsCode({name: 'Dopey'}, 'React');

