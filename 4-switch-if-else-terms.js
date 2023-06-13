if (9==9){
console.log('Цей блок виконується якщо умова істинна');
}else{
    console.log('Цей блок виконується якщо умова хибна');
}


if (9==9)
    console.log('Цей блок виконується якщо умова істинна');

    let num = 189

    if (num < 49){
        console.log('Меньше 49');
        }else if (num >100){
            console.log('Більше 100');
        }  
        else{
            console.log('Ок');
        } 
    

    //(true)?<Цей блок виконується якщо умова істинна>:<Цей блок виконується якщо умова хибна>
    //тернарний оператор
    (1===2)?console.log('Цей блок виконується якщо умова істинна'):
        console.log('Цей блок виконується якщо умова хибна');
        

    let number = 500;
    switch(number){
        case 49:
            console.log('Value = 49');
            break;

        case 50:
            console.log('Value = 50');
            break;

        case 500:
            console.log('Value = 500');
            break;
        
        default:
            console.log('Default');
            break;
    }
    let number1 = 78;
    switch(number1){
        case (number1>49):
            console.log('Value >49');
            break;

        case (number1<49):
            console.log('Value <49');
            break;
        default:
            console.log('Default output');
            break;
    }

        
        