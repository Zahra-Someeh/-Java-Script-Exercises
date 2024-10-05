//Functions
//exercise 1:
function sumNumbers(num1,num2){
    return num1+num2;

}
var sum=console.log(sumNumbers(2,4));


//exercise 2:
function stringReversed(str){
    reverse="";
    for(var i=str.length-1;i>=0;i--){
        reverse=reverse+str[i];
    }
    return reverse;
}
var inputStr='Hello';
var stringReversed=stringReversed(inputStr);

console.log(stringReversed);