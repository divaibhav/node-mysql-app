// all the interaction with db
const pool = require('./db/db');

async function getAllStudents() {
    try{
        const students = await pool.promise().query('SELECT * FROM students');
        return students[0];
    }
    catch(err){
        console.log("Error:" + err.message);
    }
}

async function getById(id) {
    try{
        
        
        const result = await pool.promise().query('SELECT * FROM students WHERE id = ?', [id]);
        return result[0];
    }
    catch(err){
         console.log("Error:" + err.message);
    }
}

async function deleteById(id) {
    try{
        const result = await pool.promise().query('DELETE FROM students WHERE id = ?', [id]);
        return result;
    }catch(err){
        console.log("Error:" + err.message);
    }
    
}
async function createStudent(student) {
    const { name, email, age } = student;
    const [result] = await pool.promise().query(
        'INSERT INTO students (name, email, age) VALUES (?, ?, ?)',
        [name, email, age]
    );
    return { id: result.insertId, ...student };
}

module.exports = {getAllStudents, getById, deleteById, createStudent};