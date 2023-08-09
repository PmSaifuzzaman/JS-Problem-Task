function canPay(changeArray, totalDue) {
    if(Array.isArray(changeArray)!==true || typeof totalDue != 'number'){
        return 'Please enter first element array and second element number';
    }
    else if(changeArray.length === 0 ){
        return 'The array you enter is empty, please enter a valid number array';
    }
    else{
        let totalChange = 0;
        for (const element of changeArray) {
            totalChange += element;
            if(typeof element != 'number'){
                return 'Please enter number type element in the array';
            }
        }
        return totalChange >= totalDue;  
    }
    
}
console.log(canPay([1,5,5],10));




















