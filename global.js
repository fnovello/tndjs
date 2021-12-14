
// console.log(global); 

global.setTimeout(()=>{
    console.log("ejecuto lugo de tres segundos");
    console.log('int: ', int);
    clearInterval(int)

},3000)

let int = setInterval(()=>{
    console.log("ejecuto CADA UN segundo");
},1000)
