"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// async and wait 
function hello() {
    return __awaiter(this, void 0, void 0, function* () {
        if (5 > 3) {
            console.log("first");
        }
        yield console.log("in function");
    });
}
hello();
console.log("line 1");
console.log("line 2");
// setTimeout(function,time)
console.log("before asyn function");
function dosomething() {
    console.log("print something");
}
setTimeout(() => {
    console.log("after asyn function");
}, 5000); //1000=1ms
console.log("end");
// set interval
function _hello() {
    console.log("is set timee out 5");
}
setInterval(_hello, 7000);
console.log("after asyn function");
console.log("line 2");
//clear interval:
const handle = setInterval(() => {
    console.log('This will be displayed every 1000ms (1s).');
}, 1000);
clearInterval(handle); // stops intevel
// https://www.youtube.com/shorts/gWFnX11kmtM
