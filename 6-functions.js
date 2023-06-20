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


// //anonim fn
// function (a,b){
//     let c = a+b;
//     return c;
// }

const anonimFn = function (a,b){
    let c = a+b;
    return c;
}
console.log(anonimFn2(2,4));

()=>{}

const arrowFn = (a,b)=>{
    let c = a+b;
    return c;
}

console.log(arrowFn(3, 4));


const arrowFunc = (a, b = 2)=>{
    return a*b;
}

console.log(arrowFunc(3));


const playWithReturnFunc = () => {
    for(let i =0; i < 10; i++){
        console.log(i);

        if(i ===6){
            return `Iterator = ${i}`
        }
    }
}

console.log(playWithReturnFunc());

myRequestWithDate
console.log(Date());

const myRequestWithDate = (field1, createAt = Date()) =>{
    //...
    let requestBody = {
        somekey: 1,
        somekey: 2,
        timestamp: ''

    }
    requestBody.somekey = field1;
    requestBody.timestamp = createAt;
    
    //send request
    
    return requestBody;
}

console.log(myRequestWithDate(123,1234566));


// dd/mm/yyyy

const today = new Date();
const yyyy = today.getFullYear();
console.log(yyyy);
let mm = today.getMonth() + 1; //Month start at 0!
let dd = today.getDate();

if(dd<10) dd = '0' + dd;
if(mm<10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;
console.log(formattedToday);



const arrowFunc1 = (a, b = 2)=>{
    return a*b;
}

const arrowFunc2 = (a, b = 2)=>{
    console.log(a*b);
}




// console.log(arrowFunc1(2,2));
// arrowFunc2(3,3);

let fnVar1 = arrowFunc1 (2,2);
let fnVar2 = arrowFunc2 (3,3);

console.log(`fnVar1 = ${fnVar1}`);
console.log(`fnVar2 = ${fnVar2}`);



const submitButton = ()=>{
    return cy.get('.className');
}

const getValueFromElement = (locator)=>{
    return cy.get('${locator}').getTextFromElement();
}


it('Click on submit button', ()=>{
cy.get('.className').click();
cy.get('.className').click();
cy.get('.className').click()


submitButton().click();
let TextFromElement = getValueFromElement('.locatorOfElement')
})


function someFunc(){
    console.log('Hi')
}

setTimeout(someFunc, 5000);
console.log('123');



function first(){
    setTimeout(function(){
        console.log('Fist output'); 

    }, 5000);
}


function second(){
        console.log('Second output'); 
}

first();
second();



 

function someFunctionWithCallback(param1, callbackFunc){
    console.log(`Here is my param:  ${param1}`); 

    callbackFunc(param1);
}
function sum(a,b = 2){
    return a+b;
}

someFunctionWithCallback(3, sum);

someFunctionWithCallback('value1', function() {
    console.log('Text from callback'); 
})




function it(testDescription, testActions){
    console.log(`${testDescription}`);

    testActions();
}

it('Click on submit button', ()=>{
    //cy.get('.className').click();
    console.log('Click on some element');
})