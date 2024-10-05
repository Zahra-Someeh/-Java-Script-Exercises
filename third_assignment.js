//Array and loops

//exercise 1:
var favoriteFruit=['appel','banan','grape','fig']
for(let i=0;i<=favoriteFruit.length;i++){
    console.log(favoriteFruit[i]);
}

//ex 2:

function avarageNum(numbers){
    var sum=0;
    for(let i=0;i<numbers.length;i++){
        sum=sum+numbers[i];
    }
        var average=sum/numbers.length;
        return average;
    

}
var nums=[2,4,8,5];
var avg=avarageNum(nums);
console.log(avg);

//ex 3:

function maxNum(arrayNum){
var max=arrayNum[0];
for(i=0;i<arrayNum.length;i++){
    if(arrayNum[i]>max){
        max=arrayNum[i]
}
    
}
return max;
}
var arrayNumbers=[2,8,3,20,9,10];
var maxNumber=maxNum(arrayNumbers);
console.log(maxNumber);


//ex 4:
var words=['Hallo','world','in','Java_script'];
var sentence='';
for(let i=0; i<words.length; i++){
    sentence=sentence + words[i] + ' ';
}
console.log(sentence);



//ex 5:
function namesExist(namesArray,name){
    for(i=0; i<namesArray.length; i++){
        if(name===namesArray[i]){
            return true;
        }
        }
            return false;
        }
  

var names=['zahar','ali','sara','dani'];
var result=namesExist(names,'sara');
console.log(result);

var result2=namesExist(names,'jan');
console.log(result2);

//ex 6:
for(let i=1; i<=20; i++){
    if(i % 2===0){
        
        console.log( i);
        

    }

}