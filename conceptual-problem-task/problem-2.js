/*

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/

function isJavaScriptFile(fileName){
    if(typeof fileName !=='string'){
        return 'Please enter a valid filename (string)....';
    }
    else{
        if((fileName.endsWith(".js"))){
            return true;
        }
        else{
            return false;
        }
        
    }
}
console.log(isJavaScriptFile('problem.js'));