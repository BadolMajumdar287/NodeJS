function evenNumber(a) {
    try {
      if (typeof a !== 'number' || isNaN(a)) {
        throw new Error("number");
      }
  
      if (a % 2 === 0) {
        console.log("Even");
      } else {
        console.log("Odd");
      }
    } catch (error) {
      console.log("Problem:", error.message);
    }
  }
//evenNumber(5);




async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log('DATA:', data);
    } catch (error) {
      console.error('Problem', error.message);
    }
  }
 // fetchData();





 










