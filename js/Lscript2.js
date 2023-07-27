"use strict";

console.log(15/0);

const object = { 
	name: "Vlad", 
	age: 19, 
	working: false 
};
console.log(object.age);

let arr = ["Vlad", "Ivan", 123, "Lol", {}, []];
console.log(arr[3]);

const obj = {
    a: 1,
    b: 2,
    67: "dd"
};
obj.d = "blabla";
console.log(obj["67"]);

const wtf = {
    a: 1,
    b: 2,
    c: 3
};
const d = 4;
wtf[d] = 5;
console.log(d);
console.log(wtf[d]);