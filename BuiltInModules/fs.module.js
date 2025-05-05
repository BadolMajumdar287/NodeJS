import fs from "fs";

//Sync = One by one after completing one job. performance = slow. use = The little app is good. Sync = blocking.
//Async = Works a lot with one. performance = first.  use = The big app is good. Async = non-blocking



//write to file...............

//Sync
fs.writeFileSync("Sync.txt","dlyhewi");


//Async
fs.writeFile("Async.txt","helleo", (err) => {
   if(err){
   // console.log(err);
   }
   else{
   // console.log("file Is correct")
   }
    
});





//Read from file.................


//Sync

const Data = fs.readFileSync("Sync.txt","utf-8");
//console.log(Data);


//Async 

fs.readFile("Async.txt","utf-8",(err,data) => {
 
    if(err){
        //console.log(err);
    }else{
       // console.log(data);
    }

});



//Append to file..............

//Sync



fs.appendFileSync("Sync.txt","\n");


//Async 


 fs.appendFile("Async.txt","\nnew line",(err) => {
    
    if(err){

        // console.log(err);

    }else{

        // console.log("append file")

    }
 })


//unlinck/file delete.............

//Sync

fs.unlinkSync('Sync.txt');

//Async


fs.unlink("Async.txt",(err)=> {

      if(err){

       // console.log(err);

      }else{

       //  console.log("Delete file")

      }

});




//mkdir/folder create............
//Sync

//fs.mkdirSync('myFolder');

//Async

fs.mkdir("newFolder",(err) => {

  if(err){
   // console.log(err);
  }else{
   // console.log("create folder")
  }

});


//Folder delete..............












//Check whether there are files.............

//Sync 


if(fs.existsSync("Syn.txt")){
    
   // console.log("There are files");

}else{

  //  console.log("There is no file");
};



//file name change...............

//Sync

//fs.renameSync('Sync.txt', 'newname.txt');



//Async


fs.rename("newname.txt","Sync.txt",(err) => {
    if(err){

       // console.log(err);

    }else{

        //console.log("file name change")
    }
})