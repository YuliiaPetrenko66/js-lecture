

// Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

//текст "Ми поїли"

let humburger = 4;//гамбургер для вас і ще трьох друзів, тому 4
let frenchFries = 1;//картоплю для одного чоловіка якщо слідувати умові

if (humburger >= 4 && frenchFries >= 1){
    console.log('Ми поїли');
}else{
    console.log('Ми йдемо в інше кафе');  
}


// Function - Homework 21.06.2023

function restaurant(humburger1, frenchFries1){

if (humburger1 >= 4 && frenchFries1 >= 1){
    return 'Ми поїли';
}else{
    return 'Ми йдемо в інше кафе';  
}
}

let humburger1 = 4;
let frenchFries1 = 1;
let restaurantResult = restaurant(humburger1, frenchFries1);

console.log(restaurantResult); 


//текст "Ми йдемо в інше кафе"

let humburger4 = 3;
let frenchFries4 = 1;

if (humburger4 >= 4 && frenchFries4 >= 1 ){
    console.log('Ми поїли');
}else{
    console.log('Ми йдемо в інше кафе');  
}

// Function - Homework 21.06.2023

function restaurant2(humburger2, frenchFries2){

if (humburger2 >= 4 && frenchFries2 >= 1 ){
    return 'Ми поїли';
}else{
    return 'Ми йдемо в інше кафе';  
}
}

let humburger2 = 2;
let frenchFries2 = 1;
let restaurant2Result = restaurant2(humburger2, frenchFries2);

console.log(restaurant2Result); 



// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.


let price = 1500;

if(price >=1000 && price <=1900){
    console.log('Price is between 1000 and 1900: ' + price);
}else{
    console.log('Price is not between 1000 and 1900: ' + price);
}


// Function - Homework 21.06.2023

function checkPrice (price1){

if(price1 >=1000 && price1 <=1900){
    return'Price is between 1000 and 1900: ' + price1;
}else{
    return 'Price is not between 1000 and 1900: ' + price1;
}
}

let price1 = 1500;
let checkPriceResult = checkPrice(1500);

console.log(checkPriceResult);


// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

//без оператора НЕ !

let priceProduct = 4500;

if (priceProduct < 1000 || priceProduct > 1900) {
    console.log('Price is not between 1000 and 1900: ' + priceProduct);
} else {
    console.log('Price is between 1000 and 1900: ' + priceProduct);
}


// Function - Homework 21.06.2023

function checkpriceProduct(price_Prod){

if (price_Prod < 1000 || price_Prod > 1900) {
    return 'Price is not between 1000 and 1900: ' + price_Prod;
} else {
    return'Price is between 1000 and 1900: ' + price_Prod;
}
}

let price_Prod = 4500;
let checkPricePr = checkpriceProduct(price_Prod);

console.log(checkPricePr);


//з оператором НЕ !

let priceProd = 2900;

if (!(priceProd >= 1000 && priceProd <= 1900)) {
    console.log('Price is not between 1000 and 1900: ' + priceProd);
} else {
    console.log('Price is between 1000 and 1900: ' + priceProd);
}

// Function - Homework 21.06.2023

function checkPriceProd(pricePr){

if (!(priceProd >= 1000 && priceProd <= 1900)) {
    return 'Price is not between 1000 and 1900: ' + pricePr;
} else {
    return 'Price is between 1000 and 1900: ' + pricePr;
}
}

let pricePr = 2900;
let checkPP = checkPriceProd(pricePr);

console.log(checkPP);


// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

// 1-ший варіант

let seasonNum = 1;

if (seasonNum === 1) {
    console.log('Spring');
} else if (seasonNum === 2) {
    console.log('Summer');
} else if (seasonNum === 3) {
    console.log('Autumn');
} else if (seasonNum === 4) {
    console.log('Winter');
} else {
    console.log('Not a season');
}

 
// Function - Homework 21.06.2023

function checkSeasonNum(seasonNum1){

if (seasonNum1 === 1) {
    return 'Spring';
} else if (seasonNum1 === 2) {
    return'Summer';
} else if (seasonNum1 === 3) {
    return'Autumn';
} else if (seasonNum1 === 4) {
    return'Winter';
} else {
    return'Not a season';
}
}

let seasonNum1 = 1;
let checkSN = checkSeasonNum(seasonNum1);

console.log(checkSN);


// 2-гий варіант

let numberSeason = 3;
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

//Function - Homework 21.06.2023

function checkNumberSeason(numberSeason1){

let nameSeason1;

if (numberSeason1 === 1) {
    nameSeason1 = 'Spring';
} else if (numberSeason1 === 2) {
    nameSeason1 = 'Summer';
} else if (numberSeason1 === 3) {
    nameSeason1 = 'Autumn';
} else if (numberSeason1 === 4) {
    nameSeason1 = 'Winter';
} else {
    nameSeason1 = 'Unknown season';
}
return nameSeason1;

}

let numberSeason1 = 3;
let nameSeason1 = checkNumberSeason(numberSeason1);

console.log('Season: ' + nameSeason1);




// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

// 1-ший варіант

let a = 1;
let b = 3;
let c = 5;

if((a<b && b<c)||(c<b && b<a)){
    console.log(b);
}else if((a<c && c<b)||(b<c && c<a)){
    console.log(c);
}else {
    console.log(a);
}

//Function - Homework 21.06.2023

function checkNumber(a3,b3,c3){

if((a3<b3 && b3<c3)||(c3<b3 && b3<a3)){
    return b3;
}else if((a3<c3 && c3<b3)||(b3<c3 && c3<a3)){
    return c3;
}else {
    return a3;
}
}

let a3 = 1;
let b3 = 3;
let c3 = 5;
let checkNumb = checkNumber(a3,b3,c3);

console.log(checkNumb);

// 2-гий варіант

let a1 = 8;
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



//Function - Homework 21.06.2023

function checkNum(a2,b2,c2){

if (a2 > b2) {
    if (b2 > c2) {
        return b2;
    } else if (a2 > c2) {
        return c2;
    } else {
        return a2;
    }
} else {
    if (a2 > c2) {
        return a2;;
    } else if (b2 > c2) {
        return c2;;
    } else {
        return b2;
    }
}
}

let a2 = 8;
let b2 = 10;
let c2 = 7;
let checkN = checkNum(a2,b2,c2);

console.log(checkN);


// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.


let dayWeek = 4;

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

//Function - Homework 21.06.2023

function dayOfWeek(day) {
    switch (day) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return 'Not a day of the week';
    }
  }

  let day = 4;
  let dayResult = dayOfWeek(day);

  console.log('Day of the week:', dayResult);

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


//Function - Homework 21.06.2023

function math_Operation(mathOperation1, numb2, num3) {
    let output;
  
    switch (mathOperation1) {
      case "+":
        output = numb2 + num3;
        return 'Math operation "+": ' + output;
      case "-":
        output = numb2 - num3;
        return 'Math operation "-": ' + output;
      case "*":
        output = numb2 * num3;
        return 'Math operation "*": ' + output;
      case "/":
        output = numb2 / num3;
        return 'Math operation "/": ' + output;
      default:
        return 'Not a mathOperation';
    }
  }
  
  let mathOperation1 = "/";
  let numb2 = 6;
  let num3 = 2;
  let mathOperationResult = math_Operation(mathOperation1, numb2, num3);

  console.log(mathOperationResult);

// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let str = "Індустріалізація";
let newResult = str.replace(/[іуая]/gi, '');

console.log(`Результат видалення голосних букв зі слова  ${str}:  ${newResult} `);


//Function - Homework 21.06.2023

function regularExpr(str1){

let newResult = str1.replace(/[іуая]/gi, '');

return`Результат видалення голосних букв зі слова  ${str1}:  ${newResult} `;
}

let str1 = "Індустріалізація";
let result = regularExpr(str1);

console.log(result);

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)


function convertDistance() {
  let numberKm = numberMetr / 1000;
  let outputKm;
  let outputMetr;

  if (Number.isInteger(numberKm)) {
    if (numberKm === 1 || numberKm % 10 === 1) {
      if (numberKm === 11 || numberKm % 100 === 11) {
        outputKm = `${numberKm} кілометрів`;
      } else {
        outputKm = `${numberKm} кілометр`;
      }
    } else if (
      (numberKm >= 2 && numberKm <= 4) ||
      (numberKm % 10 >= 2 && numberKm % 10 <= 4)
    ) {
      if (
        (numberKm >= 12 && numberKm <= 14) ||
        (numberKm % 100 >= 12 && numberKm % 100 <= 14)
      ) {
        outputKm = `${numberKm} кілометрів`;
      } else {
        outputKm = `${numberKm} кілометри`;
      }
    } else {
      outputKm = `${numberKm} кілометрів`;
    }
  } else {
    outputKm = `${numberKm} кілометра`;
  }

  if (Number.isInteger(numberMetr)) {
    if (numberMetr === 1 || numberMetr % 10 === 1) {
      if (numberMetr === 11 || numberMetr % 100 === 11) {
        outputMetr = `${numberMetr} метрів`;
      } else {
        outputMetr = `${numberMetr} метр`;
      }
    } else if (
      (numberMetr >= 2 && numberMetr <= 4) ||
      (numberMetr % 10 >= 2 && numberMetr % 10 <= 4)
    ) {
      if (
        (numberMetr >= 12 && numberMetr <= 14) ||
        (numberMetr % 100 >= 12 && numberMetr % 100 <= 14)
      ) {
        outputMetr = `${numberMetr} метрів`;
      } else {
        outputMetr = `${numberMetr} метри`;
      }
    } else {
      outputMetr = `${numberMetr} метрів`;
    }
  } else {
    outputMetr = `${numberMetr} метра`;
  }

  return `${outputMetr} це ${outputKm}`;
}

let numberMetr = 5.140078;

console.log(convertDistance());







// let metr = 5001
// let kilometr = metr / 1000

// function metryToKilometry(number) {

//     if (number === Math.round(number)) {
//         if (number >= 5 && number <= 19) {
//             return "ів"
//         } else if (number % 10 === 1) {
//             return " "
//         } else if ((number >= 2 && number <= 4) || (number % 10 >= 2 && number % 10 <= 4)) {
//             return "и"
//         } else if (number % 10 === 0 || number % 10 >= 5 && number % 10 <= 10) {
//             return "ів"
//         }
//     }
//     else {
//         return "a"
//     }
// }

// console.log(metr + " метр" + metryToKilometry(metr) + " = " + kilometr + " кілометр" + metryToKilometry(kilometr))

