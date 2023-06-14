console.log('Hello '+ 'world');
console.log(2 + 2);
console.log(2 + '2');
console.log(2 + + '2');
console.log('2 '+ + 2);
console.log( +'2');
console.log( +2);
console.log('2');

let incr = 10;
let decr = 10;
console.log(incr);
console.log(decr);
incr++;//постфіксна форма інкременту
decr--;
console.log(incr);
console.log(decr);
++incr;//префіксна форма інкременту
--decr;
console.log(incr);
console.log(decr);



let incr1 = 10;
let decr1 = 10;

console.log(incr1++);
console.log(decr1--);

console.log(incr1++);
console.log(decr1--);

console.log(++incr1);
console.log(--decr1);

console.log(5<2);
console.log(5>2);

console.log(2*4 == 8);
console.log(2*4 == '8');
console.log(2*4 === '8');

console.log('a' != 'b');
console.log('a' !== 'b');

console.log(2*4 != '9');
console.log(2*4  !== '8');

let isChecked = true;
let isClosed = false;

//console.log(isChecked && isClosed);//логічне "і"
//console.log(isChecked || isClosed);//логічне "АБО"

console.log(isChecked && !isClosed);//логічне "і"
console.log(!isChecked || isClosed);//логічне "АБО"

//Я хочу купити картоплю та гамбургер. якщо обидва товари є в наявності, то я їх купую і буду ситим. Описати в код

let humburger=true;
let fries=false;

if(humburger && fries){
    console.log('Я ситий')
}else {
    console.log('Я голодний')
}

let humburger1=1;
let fries1=0;//false, null, undefined, empty, NaN

if(humburger1 && fries1){
    console.log('Я ситий')
}else {
    console.log('Я голодний')
}


////Я хочу купити або 2 порції нагетсів і 2 картоплі фрі або 3 гамбургери  і колу. 
//Якщо щось із цього є, то я буду ситим. Описати в код
let humburgers = 3;
let cola = 2;
let nuggets = 2;
let friesPotatos = 1;

if (humburgers > 2 && cola || nuggets > 1 && friesPotatos > 1){
    console.log('Всі поїли')
}



function mcDonalds(humburgers, cola, nuggets, friesPotatos  ){
    if (humburgers > 2 && cola || nuggets > 1 && friesPotatos > 1){
        console.log('Всі поїли')
    }else{
        console.log('Не всі поїли')
    }
}
mcDonalds(2,1,2,1);

