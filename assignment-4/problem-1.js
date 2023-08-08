function cubeNumber(num){
    if(typeof num != 'number'){
        return 'Please enter a valid number';
    }
    else{
        const result = Math.pow(num,3);
        return result;
    }
}
console.log(cubeNumber(3));