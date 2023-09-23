// async and wait 
async function hello(){
    if (5>3){
        console.log("first")
    }

await console.log("in function")
}
hello()
console.log("line 1")
console.log("line 2")

// setTimeout(function,time)

console.log("before asyn function")
function dosomething(){
    console.log("print something")
}
setTimeout(()=>{
    console.log("after asyn function")
},5000)   //1000=1ms
console.log("end")

// set interval
function _hello(){
console.log("is set timee out 5");
}
setInterval(_hello,7000)
console.log("after asyn function");
console.log("line 2")

//clear interval:
const handle = setInterval((): void => {
    console.log('This will be displayed every 1000ms (1s).');
  }, 1000);
clearInterval(handle);             // stops intevel



https://www.youtube.com/shorts/gWFnX11kmtM