/*
*Прості або примітивні:
*-Числа
*-Рядки (текст)
*-Логічний тип
*-undefined
*-Symbol
*-BigIng
*
*Oб'єкти:
*Спеціальні  об'єкти(або Глобальні):
*-Масиви
*Функції
*- Oб'єкт дати
*-Регулярні вирази
*-Помилки
*-Звичайні об'єкти:
*- Oб'єкт{}
*/

let number = 5;
let floatNumber = 5.5;

console.log(4/0);//Infinity
console.log(-4/0);//-Infinity
console.log('string'*3);//NaN / Not a Number

let isExist = true;//false
console.log(isExist);

//console.log(someVar);//null

let value = null;
console.log(value);

let udef;
console.log(udef);//undefined

let person ={
    name:'Dmytro',
    age:28
}

// let person1 = new Object();
// console.log(person1);
// person1.name = 'Fred';
// person1.age = 42;
// console.log(person1);
console.log(person.name);
console.log(person.age);


let arr = [];//1,2,3,4
let arr1 = ['text',1,{},[]];

console.log(arr1[0]);//1-ший елемент массива
console.log(arr1[1]);//2-гий елемент массива

let numArr = [1,2,3];
let numObj = {a:1, b:2, c:3};
console.log(numArr[0]);
console.log(numObj.a);

let someArr = [1,2,3,4];
let someArrObj ={
    0:1,
    1:2,
    2:3,
    3:4,
    qwe:5
}
console.log(someArr[0]);
console.log(someArrObj[0]);
console.log(someArrObj['qwe']);

let rozetkaSearchAutocomplite =
    {
        "data": {
            "code": 1,
            "content": {
                "text": "noki",
                "changedText": "noki",
                "tpl_name": "one_plus_word",
                "records": {
                    "words_additions": [
                        {
                            "name": "nokia c31 чехол",
                            "href": "https://rozetka.com.ua/ua/search/?text=nokia+c31+%D1%87%D0%B5%D1%85%D0%BE%D0%BB"
                        },
                        {
                            "name": "nokia flip",
                            "href": "https://rozetka.com.ua/ua/search/?text=nokia+flip"
                        },
                        {
                            "name": "nokia 6310",
                            "href": "https://rozetka.com.ua/ua/search/?text=nokia+6310"
                        },
                        {
                            "name": "nokia g21 чехол",
                            "href": "https://rozetka.com.ua/ua/search/?text=nokia+g21+%D1%87%D0%B5%D1%85%D0%BE%D0%BB"
                        },
                        {
                            "name": "nokia g21",
                            "href": "https://rozetka.com.ua/ua/search/?text=nokia+g21"
                        }
                    ],
                    "cats_searches": [
                        {
                            "id": "80037",
                            "top_id": "4627949",
                            "name": "в категорії <span class='bold'> Телевізори</span>",
                            "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80037&redirected=1",
                            "category_title": "Телевізори"
                        },
                        {
                            "id": "80027",
                            "top_id": "4627949",
                            "name": "в категорії <span class='bold'> Навушники</span>",
                            "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80027&redirected=1",
                            "category_title": "Навушники"
                        },
                        {
                            "id": "80003",
                            "top_id": "4627949",
                            "name": "в категорії <span class='bold'> Мобільні телефони</span>",
                            "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80003&redirected=1",
                            "category_title": "Мобільні телефони"
                        }
                    ]
                },
                "count": 8,
                "total_count": 0,
                "page": 0,
                "start": 0,
                "sections_menu": [],
                "move_to_category": "Перейти в категорію",
                "price_with_promo": "Ціна з промокодом",
                "sudg_noth_to_find": "По вашому запиту нічого не знайдено. <nobr>Уточніть свій запит",
                "all_find_result": "Всі результати пошуку",
                "currency": "грн"
            }
        }
    }

    console.log(rozetkaSearchAutocomplite.data.content.records.words_additions[0]);

let categories = rozetkaSearchAutocomplite.data.content.records.cats_searches;
let firstCategoryId = rozetkaSearchAutocomplite.data.content.records.cats_searches[0].id;
let allCategoryId = rozetkaSearchAutocomplite.data.content.records.cats_searches.id;


console.log('пошуковий запит:' + rozetkaSearchAutocomplite.data.content.text);
console.log('Перший товар з пошуковоївидачі:' + rozetkaSearchAutocomplite.data.content.records.words_additions[0].name );
console.log('Перша  категорія товарів з пошукової видачі:' + categories[0].name + "id:" + categories[0].id);

console.log('Перша  категорія товарів з пошукової видачі:' + categories[2].name + "id:" + categories[2].id);

//console.log(JSON.stringify(categories));

let someText = ' Hello world! '
console.log(someText.length);
console.log(someText.substring(0,6));
console.log(someText.toLowerCase());
console.log(someText.toUpperCase());
console.log(someText.indexOf('w'));
console.log(someText.trim());
console.log(someText.charAt(1));
console.log(someText[1]);

let myArr = [];
myArr.push('Доброго');
myArr.push(' ');
myArr.push('вечора');
console.log(myArr);
console.log(myArr.length);
console.log(myArr.join(" "));
console.log(myArr.pop());
console.log(myArr);

let someNumber = 12.4;
console.log(Math.round(someNumber));
console.log(someNumber.toFixed(2));

let resolution = '12.2px'
console.log(parseInt(resolution));
console.log(parseFloat(resolution));