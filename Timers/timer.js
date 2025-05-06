
//The console will be after 3 seconds.

const add = setTimeout((a,b) => {
    const add = a+b
    //console.log(add);
  },3000,5,7);


//The console will not be after 5 seconds.

  const timerId = setTimeout((a,b) => {
    //console.log(a-b);
  }, 5000,12,12);

  clearTimeout(timerId); 




  
  //The console will be 5 seconds...don't stop...


  const intervalId = setInterval((a,b) => {
    //console.log(a-b);
  }, 1000,2,2);




const mul = setImmediate((a,b) => {
   // console.log(a*b);
  },2,2);



const timeout = setTimeout((a,b) => {
   // console.log(a/b);
  }, 1000,10,5);
  