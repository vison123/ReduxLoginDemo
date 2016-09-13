/**
 * Created by vison on 16/8/31.
 */
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayJob = function() {
        console.log(this.job);
    }
}

var person1 = new Person('Nicholas', 29, 'software programmer');
var person2 = new Person('Vison', 24, 'engineer');

//person1.sayJob();
//console.log(Person.prototype);
//console.log(Person.__proto__);
//console.log(person2.prototype);
//console.log(person2.__proto__);

function DOG(name){
    this.name = name;
    //this.species = '犬科';
}
DOG.prototype = { species : '犬科' };
var dogA = new DOG('大毛');
var dogB = new DOG('二毛');
//dogA.species = '猫科';
console.log(dogA.species); // 显示"犬科"，不受dogA的影响
console.log(dogB.species); // 显示"犬科"，不受dogA的影响

DOG.prototype.species = '猫科';
console.log(dogA.species);
console.log(dogB.species);
console.log(dogB.__proto__);