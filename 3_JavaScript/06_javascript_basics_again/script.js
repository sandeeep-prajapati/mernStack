var g = "Hello wOrld";
var g = "Hi";

console.log(g);


var x = "String"; // global variable

function indore(){
    var y = "Bye";  // local variable
    console.log(y);
    console.log(x);
}

indore();

function indore1(){
    var y = "Bye";  // local variable
    console.log(y);
    x = "Not String";
    console.log(x);
}

indore1();
console.log(x);





var a = "hi this is john";
var time = 5;

if (time > 4){
    var a = "hello";
}

console.log(a);


let r = 10;
let s = 20;

{
    let r = 50;
    console.log(r);
}

r = 40;
console.log(r);


let hello;

console.log(hello);

var hi;

console.log(hi);


// objects

let sandeep = {
    name:"sandeep",
    age: 21,
    college: 'Medicaps'
}

console.log(sandeep);
console.log(sandeep.age);
console.log(sandeep['age']);



let mark = {
    name:"Mark",
    age: 21,
    college: 'ITM',
    username: function(){
        return this.name + this.age;
    },
    isAdult: function() { if(this.age > 18){ return true}else{ return false}}
}
console.log(mark);
console.log(mark.username);
console.log(mark.username());
console.log(mark.isAdult());

let p1 = {
    name: "hello",
    age: 21
}

let p2 = {
    name: "hello",
    age: 21
}

console.log(typeof p1);

console.log(p1 == p2);


console.log(p1 === p2);