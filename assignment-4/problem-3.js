function sortMaker(arr) {
    if(!Array.isArray(arr)){
        return 'Please enter a valid array';
    }
    else{
        for (const element of arr) {
            // console.log(element);
            if(typeof element != 'number'){
                return 'Please enter a valid number array';
            }
            else if( arr[0] > 0 && arr[1] > 0 && arr[0] !== arr[1]){
                return arr.sort((a, b) => b - a);
            }
            else if(arr[0] == arr[1]){
                return 'equal';
            }
            else if(arr[0] < 0 || arr[1] < 0){
                return 'Invalid Input';
            }
        }
    }
}
console.log(sortMaker([4,-2]));
