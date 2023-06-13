let num = 80;

while(num<90){
    console.log(num);//infinite loop
}

let num1 = 80;

while(num1<90){
    console.log(num1);
    num1++;
}

let num2 = 67;
do{
    console.log(num2);
    num2++;
}while (num2 <90)


// DO-WHILE/WHILE - Не працюють в Cypress

for(let i =0; i < 8; i++){
    console.log(i);
}

let i =0
for(; i < 8; i++){
    console.log(i);   
}

let num3 =800
for(let i =0; i < 8; i++){
    console.log(num3);
    num3++;
}

//безкінечний цикл- infinite loop
// for(let i =0; i >0; i--){
//     console.log(i);
// }

let num4 = 80;
for(let i =0; i < 8; i++){
    if(num4 === 85){
        break;//зупиняє цикл
    }
    console.log(num4);
    num4++;
}



for(let i =0; i < 8; i++){
    if(i === 4){
        continue;//пропускає 4 ітерацію
    }
    console.log(i);
}

for(let i = 0; i < 3; i++){
    
    console.log(`i=${i}`);
    
    
    for(let j = 0; j < 3; j++){
        console.log(`j=${j}`);
    }
}

let elements =['element1','element2','element3' ]
console.log(elements.length);

for(let i = 0; i < elements.length; i++){
    console.log(`element with index ${i}=${elements[i]}`);
    //cy.get(elements[i]).type('blabla')
}