const url = require('url');

//URL Object conversion...........
//url.parse();

const myUrl = url.parse('https://www.example.com:3000/pathname?search=test#hash');

//console.log(myUrl);



//URLObject conversion URL String...........
//url.format();


const urlObject = {
    protocol: 'https://',
    hostname: 'www.example.com',
    pathname: '/pathname',
    search: '?search=test'
  };
  
  const formattedUrl = url.format(urlObject);
  
  //console.log(formattedUrl); 



  //Two url add....
//url.resolve();




  const base = 'https://www.example.com/path/';
const relative = 'anotherPath';


const resolvedUrl = url.resolve(base, relative);

//console.log(resolvedUrl); 



//URL DETAIL..............

const myUrl1 = new URL('https://www.example.com/pathname?search=test#hash');

// console.log(myUrl1.hostname);  
// console.log(myUrl1.pathname);  
// console.log(myUrl1.search);    


//url format()........................


const myUrl2 = new URL('https://www.example.com/pathname?search=test');

myUrl2.searchParams.append('newParam', 'value');  

//console.log(myUrl2.href);



const url = new URL('https://www.example.com/pathname?search=test#hash');

console.log(url.protocol); // 'https:'
console.log(url.hostname); // 'www.example.com'
console.log(url.pathname); // '/pathname'
console.log(url.search);   // '?search=test'
console.log(url.hash);     // '#hash'
