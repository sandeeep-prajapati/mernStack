let beta = function(){
    let y = 10;
    console.log(y)
    return y+5
}
x = beta()
console.log(x)
console.log(beta)
console.log(typeof beta)
let beta1 = function(a,b){
    let y =a+b
    console.log(y);
    return y+5;
}
x = beta1(10,20)
console.log(x)
let dog = (x,y)=>x+y;
console.log(dog(4,5));
let dog1 = ()=>console.log("fhygjyhkujlik;")
dog1();

let square = n=> n*n
console.log(square(4))

let age = prompt('Enter your age');
let welcome = (age>18)?alert('hello'): ()=>alert("Bye");

welcome();
let yellow=()=>{
    let r = 10;
    console.log(r)
    return r*2
}
console.log(yellow())