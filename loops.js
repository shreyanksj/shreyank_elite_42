// const { PieController } = require("chart.js");


// let add = (a, b) => {
//     return a+b;
// }

// let res = add(10 , 2);

// console.log(res)

// let a = 4;
// let b = 4;
// let c = 5;
// let d = 6;

// let a = 4, b = 4.3,
//     c = 5,
//     d = 6;

// if(a === b){
//     console.log("if block is executed")
// } else if(c == d) {
//     console.log("else if block is executed")
// }else {
//     console.log("else block is executed")
// }

// var obj = {
//     name: "suhail",
//     designation: "plumber",
//     address: {
//         pincode: 420,
//     },
// };

// console.log(obj.name)
// console.log(obj.address.pincode)


// let { name, designation, address: {pincode} } = obj;

// console.log(pincode)


// let arr = [10, 20, 30, 40, 50]

// arr.push(60);


// let [first, second, third, fourth] = arr;

// console.log(first)
// console.log(third)
// console.log(fourth)

// for(let i in arr){
//     console.log(i, arr[i])
// }

// let i = 0

// while(i < 5){
//     console.log(i++)
// }


// let aa = [1, 2, 3, 4, 5]

// let c = aa.map((value) => { return value * 2; })

// console.log(c)

// let d = aa.filter(value => value > 3)

// console.log(d)

// map functions is used when we need to do any operation on all the elements in the array whereas filter is used to operate on certain elements in array depending on condtions

var a = [1, 2, 3, 4, 5]

console.log(a.map(value => value * 3))

console.log(a.indexOf(6) != -1)

console.log(a.includes(3))