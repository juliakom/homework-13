// //1=============================================

let student = {
  firstName: '',
  lastName: '',
  averageScore: 4.8,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  isGrantHolder() {
    if (this.averageScore >= 4) {
      return true;
    } else {
      return false;
    }
  }
}

function Aspirant (dissertationTopic, isDissertationComplete) {
  this.dissertationTopic = dissertationTopic;
  this.isDissertationComplete =  isDissertationComplete;
  this.isGrantHolder = () => {
    if ((this.averageScore >= 4.5)&&(this.isDissertationComplete)) {
      return true;
    } else {
      return false;
    }
  }
}

Aspirant.prototype = student;

let aspirant = new Aspirant(false, false);

for (let value in aspirant) {
  console.log(value); 
}

// averageScore: 4.8
console.log(student.isGrantHolder()); // true
// averageScore: 4.8, isDissertationComplete: false
console.log(aspirant.isGrantHolder()); // false


//2=============================================

class Plane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }

  takeOff() {
    return this.isFlying = true;
  }

  land() {
    return this.isFlying = false; 
  }
}

let airport = {
  planes: [],
  getFlyingPlanes() {
    let i = 0;
    for (let el of this.planes) {
      if (el.isFlying === true) {
        i += 1;
      }
    }
    return i
  }
}

let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
airport.planes.push(plane1, plane2);
plane2.takeOff();
console.log(airport.getFlyingPlanes());