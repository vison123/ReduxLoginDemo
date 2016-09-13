/**
 * Created by vison on 16/8/31.
 */



//var x = "globol value";
//var getValue = function(){
//    console.log(x);    "undefined"
//    var x = "local value";  "undefined"
//    console.log(x);    "local value";
//};
//getValue();

//构造函数模式
//优点:自定义的构造函数,意味着可以将它的实例标识为一种特定类型
//缺点:构造函数中 this.objSpices 在创建实例时,不同实例上的同名函数不相等,person2.objSpices != person1.objSpices
//     解决办法:将函数属性中的方法抽到构造函数外部,这个的话多个属性导致封装性过差
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.objSpices = function(){
        Person.saySpices();
    };
    //this.objSpices = objSpices()
}

//function objSpices(){
//    Person.saySpices();
//};

Person.prototype.spices = "human";

// 静态方法不能被实例对象调用,只能被类调用,或类中其他方法调用
Person.saySpices = function(){
    console.log("I'm human being")
};
// person1.prototype = Person.prototype
person1 = new Person('11','11','11');
person2 = new Person('22','22','22');

console.log(person1.spices);
console.log(person2.spices);
console.log(person2.objSpices == person1.objSpices);
console.log(person1 instanceof Person);
console.log(person2 instanceof Person);
console.log(person1.__proto__);
console.log(Person.prototype);
Person.saySpices();
person1.objSpices();


//原型模式   prototype属性是一个指针,指向一个对象,这个对象的用途是包喊所有实例的属性和方法

function Person1(){

}
//默认自定获得constructor属性
Person1.prototype.name = '11';
Person1.prototype.age = '11';
Person1.prototype.name = '11';
Person1.prototype.sayName = function(){
    console.log(this.name)
};

// 更简单的定义原型对象
//Person1.prototype = {
//    name:'11',
//    age:'11',
//    job:'11',
//    sayName: function(){
//        console.log(name)
//    }
//};
//


var vison = new Person1();
console.log(vison.__proto__);
//此时改变的值并不是原型对象prototype中name的值
vison.name = 'Viosn';
console.log(vison);
//用来检测一个属性是否存在实例变量
console.log(vison.hasOwnProperty('name'));
console.log(vison.__proto__);
delete vison.name;
console.log(vison.hasOwnProperty('name'));
console.log(vison);
console.log(vison.__proto__);



