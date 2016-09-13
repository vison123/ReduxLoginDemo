/**
 * Created by vison on 16/8/31.
 */


function Animal(){
    this.species = "动物";
    this.name = 'animal'
}

//function Cat(name,color){
//    this.name = name;
//    this.color = color;
//}

//构造函数绑定
function Cat(name,color){
   // Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
//var cat1 = new Cat("大毛","黄色");
//console.log(cat1.species);

//prototype模式
//Cat.prototype = new Animal();
//Cat.prototype.constructor = Cat;
//var cat1 = new Cat("大毛","黄色");
//console.log(cat1.species);
//console.log(cat1.__proto__);

//直接继承prototype
//Cat.prototype = Animal.prototype;
//var cat1 = new Cat("大毛","黄色"); //此时,Cat的Constructor指向Animal
//console.log(cat1.color);
//Cat.prototype.constructor = Cat;
//var cat2 = new Cat("大毛","绿色");
//console.log(cat2.color);

//利用空对象作为中介
var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛","黄色");
console.log(cat1.color);

