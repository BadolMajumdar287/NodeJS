
function show(result){
    //console.log(result);
}

function add(a,b,callback){
    const sum = a+b;
    callback(sum);

}
add(2,2,show);










function Display(result){

    console.log(result);

};




function sub(a,b,callback){
    const sub = a-b;
    callback(sub);
};
sub(10,5,Display);




function mul(a,b,callback){
    const mul = a*b;
    callback(mul);

}
mul(10,10,Display);





///write a callback function that will taka a string and convert to uppercase letters.....



function uppercase(result){
    
    console.log(result);

};






function STRING(value,callback){
  
    const string_upporcase = value.toUpperCase();
    callback(string_upporcase);


};
STRING("badol",uppercase)






const  myarr = [12,34,37,24,29,19];





function EvenNumber(arr,callback){

    let evenNumber = [];

    for(let i = 0; i < arr.length; i++){

           if(arr[i] % 2 === 0){
               
            evenNumber.push(arr[i]);
            

           }

    }
  
callback(evenNumber);


}
EvenNumber(myarr,ShowEvenNumberInDisplay);


function ShowEvenNumberInDisplay(result){
    console.log(result);
}
