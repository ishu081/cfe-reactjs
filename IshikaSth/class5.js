const ar1=[1,2,3]
const arr2=["a","b","c"]
const arr3=["hello", "worls"]

const string=[ar1,arr2,arr3]
console.log(string)
const string1=[...ar1, ...arr2, ...arr3]
console.log(string1)

let divert=[1,2,"w","k","hello","world"]

divert.sort();
console.log(divert);



let spliceArr=[1,2,3,4,5,6,7,8,9,10]
spliceArr.splice(2,0, 33,55,566);
console.log(spliceArr);

let sliceArr=[1,2,3,4,5,6,7,8,9,10]
sliceArr.slice(2,3);
console.log(sliceArr);

//filter()
let filterArr=[1,2,3,4,5,6,7,8,9]
let filtered=filterArr.filter((item)=>item % 2==0);
console.log(filtered);



