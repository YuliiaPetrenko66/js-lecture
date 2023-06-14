

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

//текст "Ми йдемо в інше кафе"

let humburger4 = 3;
let frenchFries4 = 1;

if (humburger4 >= 4 && frenchFries4 >= 1 ){
    console.log('Ми поїли');
}else{
    console.log('Ми йдемо в інше кафе');  
}

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.


let price = 1500;

if(price >=1000 && price <=1900){
    console.log('Price is between 1000 and 1900: ' + price);
}else{
    console.log('Price is not between 1000 and 1900: ' + price);
}

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


//з оператором НЕ !

let priceProd = 2900;

if (!(priceProd >= 1000 && priceProd <= 1900)) {
    console.log('Price is not between 1000 and 1900: ' + priceProd);
} else {
    console.log('Price is between 1000 and 1900: ' + priceProd);
}



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

let numberMetr = 1140002

function km() {
  
    let numberKm = numberMetr / 1000;

  if (Number.isInteger(numberKm)) {
    if (numberKm === 1 || numberKm % 10 === 1) {
        if (numberKm === 11 || numberKm % 100 === 11) {
            return numberKm + ' кілометрів';
          }
      return numberKm + ' кілометр';
    } else if (
        (numberKm >= 2 && numberKm <= 4) ||
        (numberKm % 10 >= 2 && numberKm % 10 <= 4)
     ){
      if ((numberKm >= 12 && numberKm <= 14) ||
      (numberKm % 100 >= 12 && numberKm % 100 <= 14)
            ) {
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


