const pool = require('./db/db.js');

const {getAllStudents, getById, deleteById} = require('./studentQueries.js');


getAllStudents()
    .then((students) => {
        console.log(students[0]);
        
    })
    .catch((err)=> {
        console.error("ERROR: " + err.message);
    });

getById(1)
.then((student) =>{
    console.log("get by id");
    console.log(student);
})
.catch(err => {
    console.error("ERROR: " + err.message);
});

deleteById(1)
.then(result =>{
    console.log("Delete by id : ");
    
    console.log(result);
    
})
.catch(err=>{
    console.error("ERROR delete by id: " + err.message);
})



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