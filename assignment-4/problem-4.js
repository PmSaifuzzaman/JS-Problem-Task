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
const obj = {
    street:10,
    house:"15A",
    society:"Earth Perfect"
}
console.log(findAddress(obj));


