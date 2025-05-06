//event handle..........
//Process Object Event serve as meters,,so events is possible.


// process.on('exit', (code) => {
//     console.log(`process exit code: ${code}`);
//   });



  //exit code management......
  //Setting Process.exitcode before using process.exit() is a good prsctice,
  //because it helps control the process of the process properly.


  //process.exit() ব্যবহার করার আগে process.exitCode সেট করা ভালো অভ্যাস, কারণ এটি প্রসেসের টার্মিনেশনকে সঠিকভাবে নিয়ন্ত্রণ করতে সাহায্য করে:


  // if(someConditionNotMet()) {
  //   printUsageToStdout();
  //   process.exitCode = 1;
  // }


 // process.exit(0)=  program is all right in everything.
 //process.exit(1) =   program is not all right.


   async function userCreate(req,res) {
    try {
          
        const body = req.body
        const db = await readFromFile()
          db.push(body);
          await writeToFile(db)
          
           
          if(db){
            res.status(200).json("Create a new user");
          }else{
            res.status(404).json("Not Found");
          }
        
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json("INTERNAL SERVER ERROR");
        process.exitCode = 1; 

    }


}



  
 





  //performance
 //Hi-resolution timing is available using process.hrtime.bigint(),
 //which is helpful in performing performance testing.


 
//   const start = process.hrtime.bigint();
// const end = process.hrtime.bigint();
// console.log(`Time: ${end - start} nanosecond`);
