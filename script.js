// complete this js code
class Person{
      constructor(name,age){
           this._name = name;
           this._age = age;
      } 
      
      get name(){
            return this._name;
      }
      
      get age(){
            return  this._age;
      }
      
      greet(){
           console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
      }         
}

class Employee extends Person{
         constructor(name , age , jobTitle){
               super(name,age);
               this._jobTitle= jobTitle;
         }
         get jobTitle(){
               return  this._jobTitle;
         }
    
   jobGreet(){
           console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
    }
}

const person = new Person("Alice", 25);
person.greet();


// Creating an instance of Employee
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
