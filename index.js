/* const circle ={
    radius: 1, //propreties  
    location:{
        x: 1,
        y: 1,
    },
    draw: function (){// this member is reffered as method
        console.log('draw...')
    }
} */

//========
//Factory function
/* function createCircle (radius){
    return {
        radius, //propreties  
        draw: function (){// this member is reffered as method
            console.log('draw...')
        }
    }
}

const circle = createCircle(1)

circle.draw();  */

//========
//Constructor
/* function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw... 1");
  };
}*/
/* const circle = new Circle(1);
circle.draw(); */

//Primitives

/* const data = {
  name: "Bruno",
  surname: "Kiafuka",
  age: 23
};

function Person({ name, surname, age }) {
  return {
    name,
    surname,
    age,
    describePerson: function() {
      console.log(`${name} ${surname}, I am ${age} years old!`);
    }
  };
}

const newPerson = Person(data);

newPerson.describePerson(); */

const data = {
  name: "Bruno",
  surname: "Kiafuka",
  age: 23
};

function Person({ name, surname, age }) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.describePerson = function() {
    console.log(`${name} ${surname}, I am ${age} years old!`);
  };
}

const newPerson = new Person(data);

newPerson.describePerson();
