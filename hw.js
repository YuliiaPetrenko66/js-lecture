

// Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


//текст "Ми поїли" 
let humburger = true;
let frenchFries = true;
if (humburger === true && frenchFries === true ){
    console.log('Ми поїли');
}else{
    console.log('Ми йдемо в інше кафе');  
}

//текст "Ми поїли", перевірка

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

//текст "Ми йдемо в інше кафе", перевірка

let humburger4 = 3;
let frenchFries4 = 1;
if (humburger4 >= 4 && frenchFries4 >= 1 ){
    console.log('Ми поїли');
}else{
    console.log('Ми йдемо в інше кафе');  
}



// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.


let price1 = 2000;
if(price1 >=1000 && price1 <=1900){
    console.log('Price is included: ' + price1);
}else{
    console.log('Price is not included');
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

//без оператора НЕ !

let priceProduct5 = 5500;
if (priceProduct5 < 1000 || priceProduct5 > 1900) {
    console.log('Price is not between 1000 and 1900: ' + priceProduct5);
} else {
    console.log('Price is between 1000 and 1900: ' + priceProduct5);
}


//з оператором НЕ !

let priceProduct2 = 1500;

if (!(priceProduct2 >= 1000 || priceProduct2 <= 1900)) {
    console.log('Price is not between 1000 and 1900: ' + priceProduct2);
} else {
    console.log('Price is between 1000 and 1900: ' + priceProduct2);
}



// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

// 1-ший варіант

let seasonNum = 3;

if (seasonNum === 1) {
    console.log('Spring');
} else if (seasonNum === 2) {
    console.log('Summer');
} else if (seasonNum === 3) {
    console.log('Autumn');
} else if (seasonNum === 4) {
    console.log('Winter');
} else {
    console.log('Not the season');
}

// 2-гий варіант

let numberSeason = 2;
let nameSeason;

if (numberSeason === 1) {
    nameSeason = 'Spring';
} else if (numberSeason === 2) {
    nameSeason = 'Summer';
} else if (numberSeason === 3) {
    nameSeason = 'Autumn';
} else if (numberSeason === 4) {
    nameSeason = 'Winter';
} else {
    nameSeason = 'Unknown season';
}

console.log('Season: ' + nameSeason);



// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

// 1-ший варіант

let a = 1;
let b = 7;
let c = 5;
if((a<b && b<c)||(c<b && b<a)){
    console.log(b);
}else if((a<c && c<b)||(b<c && c<a)){
    console.log(c);
}else {
    console.log(a);
}

// 2-гий варіант

let a1 = 9;
let b1 = 10;
let c1 = 7;

if (a1 > b1) {
    if (b1 > c1) {
        console.log(b1);
    } else if (a1 > c1) {
        console.log(c1);
    } else {
        console.log(a1);
    }
} else {
    if (a1 > c1) {
        console.log(a1);
    } else if (b1 > c1) {
        console.log(c1);
    } else {
        console.log(b1);
    }
}



// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.


let dayWeek = 5;

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
        console.log('Not a day of the week');
        break;
}

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.


let mathOperation = "/";
let num1 = 6;
let num2 = 2;
let output;

switch(mathOperation){
    case "+":
        output = num1 + num2;
        console.log('Math operations "+": ', output);
        break;
    case "-":
        output = num1 - num2;
        console.log('Math operations "-": ',output);
        break;
    case "*":
        output = num1 * num2;
        console.log('Math operations "*": ',output);
        break;
    case "/":
        output = num1 / num2;
        console.log('Math operations "/": ',output);
        break;
                              
    default:
        console.log('Not a mathOperation');
        break;
}

// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let str = "Індустріалізація";

let newResult = str.replace(/[іуая]/gi, '');

console.log('Результат видалення голосних букв зі слова "Індустріалізація": ' + '"' + newResult + '"');


// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)


let numberMetr = 12000

function km() {
  let numberKm = numberMetr / 1000;

  if (Number.isInteger(numberKm)) {
    if (numberKm === 1 || numberKm % 10 === 1) {
        if (numberKm === 11) {
            return numberKm + ' кілометрів';
          }
      return numberKm + ' кілометр';
    } else if (
      numberKm === 2 ||
      numberKm === 3 ||
      numberKm === 4 ||
      numberKm % 10 === 2 ||
      numberKm % 10 === 3 ||
      numberKm % 10 === 4
    ) {
      if (numberKm === 12 || numberKm === 13 || numberKm === 14) {
        return numberKm + ' кілометрів';
      }
      return numberKm + ' кілометри';
    } else {
      return numberKm + ' кілометрів';
    }
  } else {
    return numberKm + ' кілометра';
  }
}

console.log(km());


