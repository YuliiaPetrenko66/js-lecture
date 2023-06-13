let a =5;
let b = 3;
let c;

c=a+b;
console.log(c);

a = 15;
b = 13;
console.log(c);

//іменовані функції
function sum(a,b){
    let c = a+b;
    console.log(c);
}
// sum(15,13);
// sum(165,133);
// sum(615,913);

let sumResult = sum(1,2);
console.log(sumResult);

function sum(a,b){
    let c = a+b;
   return c;
}
let sumResult3 = sum(1,2);
console.log(sumResult3);


let someObject ={
    name:'Yuliia',
    sayNumber: function sum(a,b){
        let c = a+b;
        return c;
}
}
console.log(someObject.sayNumber(7,7));



function someFn(a, b){
    let c = a + b;

    let resultArr = [a, b, c] 
    return resultArr;
}

let sumResult2 = someFn(1, 2);

console.log(sumResult2[2]);


function someFn(a,b){
    let c = a+b;
    return c;
}
console.log(someFn(10,20));
