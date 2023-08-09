function cubeNumber(num){
    if(typeof num != 'number'){
        return 'Please enter a valid number';
    }
    else{
        const result = Math.pow(num,3);
        return result;
    }
}



function matchFinder(string1, string2) {
    if(typeof string1 != 'string' || typeof string2 != 'string'){
        return 'Please enter string';
    }
    else{
        if (string1.includes(string2)) {
            return true;
        } else {
            return false;
        }
    }
}


function sortMaker(arr) {
    if(!Array.isArray(arr)){
        return 'Please enter a valid array';
    }
    else{
        for (const element of arr) {
            if(typeof element != 'number'){
                return 'Please enter a valid number array';
            }
            else if( arr[0] >= 0 && arr[1] > 0 && arr[0] !== arr[1]){
                return arr.sort((a, b) => b - a);
            }
            else if(arr[0] == arr[1]){
                return 'equal';
            }
            else if(arr[0] < 0 || arr[1] < 0){
                return 'Invalid Input';
            }
        }
        return arr;
    }
}


function findAddress(obj) {
    if (typeof obj != 'object'){
        return 'Enter a valid object';
    }else{
        const property1 = obj.street || "__";
        const property2 = obj.house || "__";
        const property3 = obj.society || "__";
        return property1+ ',' +property2+ ',' +property3;
    }
}


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