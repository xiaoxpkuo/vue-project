//push pop shift unshift join splice slice indexOf concat
//some every reduce forEach map
let obj1={
    school:'zfpx',
    age:8
};
let obj=[{school:'zfpx'},{age:8}];

/*for (let val of obj){
    console.log(val);
}*/
obj.b="b";
let objKeys=Object.keys(obj);
console.log(objKeys);
//`${item}`

let arr3 =[1,2,3,4,55,555];
let result = arr3.find(function (item,index) {
   return item.toString().indexOf(5)>-1;
});
console.log(result);
