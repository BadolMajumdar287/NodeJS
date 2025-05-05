const path = require("path");

//File name............
//path.basename();

const filepath = "/folder1/folder2/file.txt";

const fileName = path.basename(filepath);
//console.log(fileName);


//File The Directory of File...........
//path.dirname();


const dirName = path.dirname(filepath);
//console.log(dirName);


//file leaf extention out...........
//path.extname

const fileExtention = path.extname(filepath);
//console.log(fileExtention);


//join ..........
//path.join();


const pathJoin = path.join("folder","user","/file.txt");
//console.log(pathJoin);



//Absolute sheet to make.................
//path.resolve();


const pathResolve = path.resolve("folder","user","/file.txt");
//console.log(pathResolve);



//Convert the sheet to the object......
//path.parse();


const parsePath = path.parse(filepath);
//console.log(parsePath);




const folderPath = path.join(__dirname, 'newFolder')
//console.log(folderPath);





const fs = require ("fs");

const path_join = path.join("folder","user","file.json")
//console.log(path_join);


fs.mkdir(path_join,{recursive:true},(error) => {
      
    if(error){
        console.log(error);
    }else(
        console.log("create file")
    )
      

});




