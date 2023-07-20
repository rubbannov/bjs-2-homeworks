function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) {
    this.marks.push(...marks);
  };
}

Student.prototype.getAverage = function () {
  if(this.hasOwnProperty("marks")){
    if(!this.marks.length) {
      result = 0;
    } else {
      result = 0;
      this.marks.forEach(element => {
          result += element;
        });
        result = result / this.marks.length;
    };
  return result;
  } else {
    return 0;
  };
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
