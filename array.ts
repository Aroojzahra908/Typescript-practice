    // Question no 1:
// Write a typescript to check whether an `input` is an array or not.
var array1 = [11, 22, 33, 44];
console.log(Array.isArray(array1)); // Output: true
//is not
var array1 = [11, 22, 33, 44];
console.log(!Array.isArray(array1));  //output false
// for number 
var a = 11
console.log(typeof(a)); 

// Question no 2:
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
arr1.sort()
console.log("the sorted array is:",arr1)

// Question no 3:
// Write a TypeScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var arr2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
    var newarray=Array.from(new Set(arr2))
    console.log(newarray)

// Question no 4:
// Write a typeScript program to compute the sum and product of an array of integers.
var array3=[1,3,4,6,7,8,4]
var sum=0;
var product=1;  // 1*2 that's why we initialize by 1
for (var i=0; i<array3.length; i++){
    sum=sum+array3[i];
    product *=array3[i];
    // product=product*array3[i];
}
console.log("the sum is" ,sum ,"and the product is", product)

//Question no 5:
// There are two arrays with individual values. Write a JavaScript program 
// to compute the sum of each individual index value in the given array.
var aa = [1, 0, 2, 3, 4];
var bb = [3, 5, 6, 7, 8, 13];
var minvalue=Math.min(aa.length, bb.length)
var resultant_array:number[]=[];
for (var i = 0; i < minvalue; i++) {
    resultant_array.push(aa[i]+bb[i])
}
console.log("the sum of two arrays is", resultant_array)


//Question no 6:
// There are two arrays with individual values. Write a JavaScript program to concatenate two arrays of each individual index value in the given
// array.

//method : for concatenate two arrays:
var aaa = [1, 0, 2, 3, 4];
var bbb = [3, 5, 6, 7, 8, 13];
var result = aaa.concat(bbb);
console.log(result); // Output: [1, 0, 2, 3, 4, 3, 5, 6, 7, 8, 13]

//Question no 7:
// Write a JavaScript program to find duplicate values in a typeScript array.

var arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var duplicates: any[] = [];
var uniqueDuplicates: any[] = [];
for (var i = 0; i < arr2.length; i++) {
    if (arr2.indexOf(arr2[i]) !== i && duplicates.indexOf(arr2[i]) === -1) {
        duplicates.push(arr2[i]);
        uniqueDuplicates.push(arr2[i]);
    }
}
console.log(uniqueDuplicates);

