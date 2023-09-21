// ist parameter for logic:
// and second parameter for index:

// var number2=[11,22,33,44,56]
// var updatedarray=number2.map((data)=>{
// return number;
// }
// )
// console.log(updatedarray)

// asynchronus typscript:to manage time we use this... when include timing we use this......... 
// kuch minute ke baad bhi code chala skty hain >> no sequence in async
//1
async function _Name(){
    if (true){
        console.log("first")
    }

// await : is used for restrict ..... first run previous code then run other block
    await console.log("in fuction")
}

// settimeout function: 2 parameters >>>>>> run backand and show wait (location , time ) two parameters
//2
console.log("before")
setTimeout(()=>{
    console.log("in set time out 2")
}, 5000);               

//ms >>>> millisecond >>>> means 5 sec wait if we write 5000

console.log("end");


//3 set interval >>>> repeat code multiple times >> after every interval of time 
// console.log("first")
// function hello(){
//     console.log("in set time out 3");
// }
// // here we cannot call function bcz we use setinterval function.
// setInterval(hello,1000)        // call after 1 sec (repeatly again and again )
// console.log("end")

// 4
function time(){
    var time = new Date();
    var new_time= time.toLocaleTimeString()
    console.log(new_time)
}

var count=0;
var interval_id= setInterval(()=>{
    time();
    count++;
    if (count ==3){
        clearInterval(interval_id);
    }

}, 2000);

// synchronus: code run in sequence 


// class and objects
// object literal 
 let car_detail ={
    model:"civic",
    company:"honda",
}

 class car {
    model : string ="";
    brand : string = "";

 }
 // to make new objext we use new .
 let car1 =new car();
 car1.brand ="BWN"
 car1.model="my competition"
 console.log (car1)

//2
let car2=new car();
car2.brand="audi"
car2.model="ABL"
console.log(car2)

// constructor we call when we make object
//have parameters
 class car3 {
    model : string ="";
    brand : string = "";

    constructor(_model:string , _brand:string){
        // this >>>>> jis variable mn call kr rhy hain usi variable mn ja ke store hogi
      this.model= _model;
      this.brand=_brand;
    
    }
 }
let newcar= new car3("abl", "audi")
console.log(newcar)

// new function se jo bhi bnta ha wp class se object bn jata ha .
// promise:
// accept callback function in return >>>>> move in constructor parameter if we pas parameter  in line 107

var promise = new Promise((resolve, reject)=>{              // receive promise ke class ke constructor ko hoga
// internet code
var random_number:number=Math.random()
console.log(random_number)
});


// resolve: we use .then
// reject : for error we use .catch function 





// difference between type and class
// type objtypes = {
//     name:string,
//     price:string,
// }
// let cars:objtypes={
    
// }

// npm init 
// tsc --init 

// line 28 (tscconfiq)
// line 30 

// package.json:
// type module


// npm inquirer(search)
// npm i inqurer
// readme (datatype)