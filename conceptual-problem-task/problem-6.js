/*
Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303

*/

function gemsToDiamond(number1, number2, number3){
    if(typeof number1 != 'number' || typeof number2 != 'number'  || typeof number3 != 'number'){
        return 'Enter valid gems number';
    }
    else if(number1 < 0 || number2 < 0 || number3 < 0){
        return "please provide me all positive numbers"
    }
    else if(number1%1 !== 0 || number2%1 !== 0 || number3%1 !== 0){
        return "please provide me all integer number"
    }    
    else{
        const friend1 = 21;
        const friend2 = 32;
        const friend3 = 43;

        const totalDiomond = (number1*friend1) + (number2*friend2) + (number3*friend3);
        if (totalDiomond <= 2000){
            return totalDiomond;
        }
        else{
            const remainDiomond = (totalDiomond - 2000);
            return remainDiomond;
        }

    }
}

console.log(gemsToDiamond(100,5,1));
