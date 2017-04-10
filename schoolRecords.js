/*SCHOOL RECORD FOR A COLLEGE*/
/*******************Person Object*******************/

var Person = function (firstName, lastName, age, gender, email)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.email = email;
  this.age = age;
  getFullName = function ()
  {
    return this.firstName + " " + this.lastName;
  };
}

Person.prototype.getEmail = function ()
{
  return this.email;
}
Person.prototype.getGender = function ()
{
  return this.gender;
}

/*******************Staff Object*******************/
var Staff = function Staff (firstName, lastName, age, gender, email, monthlySalary)
{
  Person.call(this,firstName, lastName, age, gender, email)
  var monthlySalary = monthlySalary;
}

Staff.prototype = Object.create(Person.prototype);
Staff.prototype.contructor = Staff;

/*******************Student Object*******************/
function Student (firstName, lastName, age, gender, email, score1, score2, score3)
{
  Person.call(this,firstName, lastName, age, gender, email)
  this.math = score1;
  this.physics = score2;
  this.chemistry = score3;
  averageScore = function ()
  {
  return (this.math + this.physics + this.chemistry)/3;
  };
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.contructor = Student;

var staff1 = new Staff ('Sam', 'Well', 37, 'male', 'sam.well@doneschool.com', 90000);
var staff2 = new Staff ('Mary', 'Fred-Ham', 40, 'female', 'mary.fred@doneschool.com', 100000);
var student1 = new Student ('Lizzy', 'Ebeny', 20, 'female', 'lizzy.ebeny@doneschool.com', 80, 81, 67);
var student2 = new Student ('Sade', 'Tella', 18, 'female', 'sade.tella@doneschool.com', 79, 40, 80);


console.log(student1);
