

// Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


//текст "Ми поїли". 
let humburger = true;
let frenchFries = true;
if (humburger === true && frenchFries === true ){
    console.log('Ми поїли');
}else{
    console.log('Ми йдемо в інше кафе');  
}

let humburger2 = 4;//гамбургер для вас і ще трьох друзів, тому 4
let frenchFries2 = 1;//картоплю тільки для одного чоловіка якщо слідувати умові
if (humburger2 >= 4 && frenchFries2 >= 1 ){
    console.log('Ми поїли');
}else{
    console.log('Ми йдемо в інше кафе');  
}


//текст "Ми йдемо в інше кафе"
let humburger1 = true;
let frenchFries1 = false;
if (humburger1 === true && frenchFries1 === true ){
    console.log('Ми поїли');
}else{
    console.log('Ми йдемо в інше кафе');  
}


let humburger4 = 3;
let frenchFries4 = 1;
if (humburger4 >= 4 && frenchFries4 >= 1 ){
    console.log('Ми поїли');
}else{
    console.log('Ми йдемо в інше кафе');  
}



// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let price = 1000;
if(price>=1000 && price <=1900){
    console.log(price);
}


let price1 = 2000;
if(price1 >=1000 && price1 <=1900){
    console.log('Price is included' + price1);
}else{
    console.log('Price is not included');
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

//без оператора НЕ !
let priceProduct = 1000;
if((priceProduct !== 1000 && priceProduct < 1000) || (priceProduct !==1900 && priceProduct > 1900)){
    console.log('Price is not between 1000 and 1900: ' + priceProduct);
}else{
    console.log('Price is between 1000 and 1900: ' + priceProduct);
}

let priceProduct5 = 1500;
if (priceProduct5 < 1000 || priceProduct5 > 1900) {
    console.log('Price is not between 1000 and 1900: ' + priceProduct5);
} else {
    console.log('Price is between 1000 and 1900: ' + priceProduct5);
}

//з оператором НЕ !

let priceProduct4 = 1900;
if (!(priceProduct4 >= 1000 && priceProduct4 <= 1900)) {
    console.log('Price is not between 1000 and 1900: ' + priceProduct4);
} else {
    console.log('Price is between 1000 and 1900: ' + priceProduct4);
}


// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let month = 10;
if (month === 1){
    console.log('January');
} else if (month === 2){
    console.log('February');
}else if (month === 3){
    console.log('March');
}else if (month === 4){
    console.log('April');
}else if (month === 5){
    console.log('May');
}else if (month === 6){
    console.log('June');
}else if (month === 7){
    console.log('July');
}else if (month === 8){
    console.log('August');
}else if (month === 9){
    console.log('September');
}else if (month === 10){
    console.log('October');
}else if (month === 11){
    console.log('November');
}else if (month === 12){
    console.log('December');
}else{
    console.log('Not a month');
}


let month12 = 10;
switch(month12){
    case 1:
        console.log('Month: January');
        break;

    case 2:
        console.log('Month: February');
        break;

    case 3:
        console.log('Month: March');
        break;
    case 4:
        console.log('Month: April');
        break;
    case 5:
        console.log('Month: May');
        break;
    case 6:
        console.log('Month: June');
        break; 
    case 7:
        console.log('Month: July');
        break; 
    case 8:
        console.log('Month: August');
        break; 
    case 9:
        console.log('Month: September');
        break; 
    case 10:
        console.log('Month: October');
        break; 
    case 11:
        console.log('Month: November');
        break;
    case 12:
        console.log('Month: December');
        break;                            
    default:
        console.log('Not a montht');
        break;
}



// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.


let dayWeek = 3;
switch(dayWeek){
    case 1:
        console.log('Day of the week: Monday');
        break;
    case 2:
        console.log('Day of the week: Tuesday');
        break;
    case 3:
        console.log('Day of the week: Wednesday');
        break;
    case 4:
        console.log('Day of the week: Thursday');
        break;
    case 5:
        console.log('Day of the week: Friday');
        break;
    case 6:
        console.log('Day of the week: Saturday');
        break; 
    case 7:
        console.log('Day of the week: Sunday');
        break;                            
    default:
        console.log('Not a day');
        break;
}

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
