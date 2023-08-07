/*

তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ

সংখ্যাটি integer হলে true রিটার্ন করবে। অন্যথায় false রিটার্ন করবে।

*/

function isInteger(number){
    if(typeof number !== 'number'){
        return 'Please inter a intiger number...' ;
    }
    else{
        if(number%1 == 0){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(isInteger(10.8));