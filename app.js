const pool = require('./db/db.js');
const http = require('http');
const url = require('url');
const {getAllStudents, getById, deleteById, createStudent} = require('./studentQueries.js');
const { log } = require('console');

const myServer = http.createServer((req, res)=>{
    const prasedUrl = url.parse(req.url, true);//http://localhost:3000/students/1
    const path = prasedUrl.pathname;    // /students/1
    const method = req.method

    console.log(method + "-------" + path);
    
     if(method === 'GET' && prasedUrl.query.id){
       const id = prasedUrl.query.id;
        deleteById(id)
        .then((result)=>{
           if(result.affectedRows == 1){
            
            res.writeHead(200, 'application/json');
            res.end(JSON.stringify("Deleted student successfully"));
           }
           else{
            res.writeHead(404, 'application/json');
            res.end(JSON.stringify("Student not found"));
           }
            
        })
        .catch(err => {
            console.log("ERROR: " + err.message);
            
        })

    }
    else if(path === '/students' && method === 'GET'){
        getAllStudents()
        .then((students) =>{
            res.writeHead(200, 'application/json');
            res.end(JSON.stringify(students));
        })
        .catch(err=>{
            console.log("ERROR: " + err.message);
            
        })
    } else if(path.startsWith('/students/') && path.split('/')[2] != '' && method === 'GET'){
        
        
        const id = path.split('/')[2];
        getById(id)
        .then((student)=>{
            if(!student[0]){
                console.log('Not found');
                res.writeHead(404, 'application/plain');
                res.end(`Not Found with the the given id - ${id}`);
                
            }
            else{
                res.writeHead(200, 'application/json');
                res.end(JSON.stringify(student));
            }
        })
        

    }
    else{
        console.log("Else part running");
        res.writeHead(404, 'application/plain');
        res.end("Route Not Found");
    }

});

myServer.listen(3000, "localhost", ()=>{
    console.log(`server is running on http://localhost:3000`);
    
});



// getAllStudents()
//     .then((students) => {
//         console.log(students[0]);
        
//     })
//     .catch((err)=> {
//         console.error("ERROR: " + err.message);
//     });

// getById(1)
// .then((student) =>{
//     console.log("get by id");
//     console.log(student);
// })
// .catch(err => {
//     console.error("ERROR: " + err.message);
// });

// deleteById(1)
// .then(result =>{
//     console.log("Delete by id : ");
    
//     console.log(result);
    
// })
// .catch(err=>{
//     console.error("ERROR delete by id: " + err.message);
// })



// pool.query('SELECT * FROM students', (err, results) => {
//     if (err) {
//         console.error("Query Failed:" + err.message);
//         return;
//     }
//     console.log("Students");
    
//     console.log(results);
//     console.log('-------------------------------------------------------');
    

// });

// pool.query('SELECT * FROM students WHERE id = ?', [1], (err, result) => {
//     if (err) {
//         console.error("Query Failed:" + err.message);
//         return;
//     }
//     console.log("Student with id 1");
    
//     console.log(result);

// });


// // write a query to find the student by id