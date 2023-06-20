console.log('Запит даних з серверу...');

setTimeout(()=>{
    console.log('Підготовка даних для відповіді сервера...');
    const product ={
        name:'Laptopp',
        price:10000
    }
    setTimeout(()=>{
        product.status ='inStock';
        console.log(product)
    },2000)
},5000)


const req =new Promise((resolve, reject)=>{})


// const req2 =new Promise((resolve, reject)=>{
//     console.log('Запит даних з серверу...');

// setTimeout(()=>{
//     console.log('Підготовка даних для відповіді сервера...');
//     const product ={
//         name:'Laptopp',
//         price:10000
//     }
//     setTimeout(()=>{
//         product.status ='inStock';
//         console.log(product)
//     },2000)
// },5000)
// })



// setTimeout(()=>{
//     product.status ='inStock';
//     console.log(product)
// },2000)


// const req4 =new Promise((resolve, reject)=>{
//     console.log('Запит даних з серверу...');

// setTimeout(()=>{
//     console.log('Підготовка даних для відповіді сервера...');
//     const product ={
//         name:'Laptopp',
//         price:10000
//     }
//     resolve();

//     if(1!=1){
//         reject();
//     }
// },5000)
// })

// req4.then(()=>{
//     console.log("Дані отримані")
// })



const req5 =new Promise((resolve, reject)=>{
    console.log('Запит даних з серверу...');

setTimeout(()=>{
    console.log('Підготовка даних для відповіді сервера...');
    const product ={
        name:'Laptopp',
        price:10000
    }
    resolve(product);

    if(1!=1){
        reject();
    }
},5000)
})
//console.log(req5);

req5.then(someProduct =>{
    setTimeout(()=>{
            someProduct.status ='inStock';
            console.log(someProduct);
        },2000)
})




const req6 =new Promise((resolve, reject)=>{
    console.log('Запит даних з серверу...');

setTimeout(()=>{
    console.log('Підготовка даних для відповіді сервера...');
    const product ={
        name:'Laptopp',
        price:10000
    }
    resolve(product);

},5000)
})
//console.log(req5);

req6.then(someProduct =>{

return  new Promise ((resolve, reject) =>{
    setTimeout(()=>{
            someProduct.status ='inStock';
            resolve(someProduct);
        },2000)
    })
}).then(data =>{
    data.isModified = true;
    return data
}).then( data => {
    console.log(data)
})



let statusCode = 404;
const req7 =new Promise((resolve, reject)=>{
    console.log('Запит даних з серверу...');

setTimeout(()=>{
    console.log('Підготовка даних для відповіді сервера...');
    const product ={
        name:'Laptopp',
        price:10000
    }

    if (statusCode != 200){
        reject(statusCode)
    }
    
    resolve(product);

    

},5000)
})

req7.then(someProduct =>{

return  new Promise ((resolve, reject) =>{
    setTimeout(()=>{
            someProduct.status ='inStock';
            resolve(someProduct);
        },2000)
    })
}).then(data =>{
    data.isModified = true;
    return data
}).then( data => {
    console.log(data)
}).catch(someError =>{
    console.log(someError)
}).finally(() =>{
    console.log(`Finally block`)
})



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));



// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response)  => console.log(response));

//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   fetch(`https://jsonplaceholder.typicode.com/posts/${json.id+1}`)
//   .then((response) => response.json())
//   .then((json) =>console.log(json));

let postId;

  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        postId = json.id;
    });
        fetch(`https://jsonplaceholder.typicode.com/posts/${json.id + 1}`).then((response) => response.json())
        .then((json) => console.log(json));

    
