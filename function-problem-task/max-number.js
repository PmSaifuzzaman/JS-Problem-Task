// Max number print using if else statement
let jimMark = 69 ;
let delaMark = 97 ;
let chinkuMark = 99 ;

if (jimMark > delaMark && jimMark > chinkuMark){
    console.log('Jim get the Delicious Cake');
}
else if(delaMark > jimMark && delaMark > chinkuMark){
    console.log('Dela get the Delicious Cake');
}
else{
    console.log('Chinku get the Delicious Cake');
}


// Write a function that will take three numbers and will return the max number using if else statement

function maxNumber(jimMark, delaMark, chinkuMark){
    if (jimMark > delaMark && jimMark > chinkuMark){
        return jimMark;
    }
    else if(delaMark > jimMark && delaMark > chinkuMark){
        return delaMark;
    }
    else{
        return chinkuMark;
    }
}
// let jimMark = 69 ;
// let delaMark = 97 ;
// let chinkuMark = 99 ;
const result = maxNumber(jimMark, delaMark, chinkuMark);
console.log('The Maximum mark is :' , result,);


// Write a function that will take three numbers and will return the max number using math.max statement

function findMaxNumber(num1,num2,num3){
    return Math.max(num1,num2,num3);
}
let num1 = 25;
let num2 = 35;
let num3 = 50;

const output=findMaxNumber(num1,num2,num3);
console.log(output);