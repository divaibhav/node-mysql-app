const pool = require('./db/db.js');

const {getAllStudents, getById} = require('./studentQueries.js');


getAllStudents()
    .then((students) => {
        console.log(students[0]);
        
    })
    .catch((err)=> {
        console.error("ERROR: " + err.message);
    });

getById(100)
.then((student) =>{
    console.log("get by id");
    console.log(student[0]);
})
.catch(err => {
    console.error("ERROR: " + err.message);
});



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