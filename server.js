const express = require ('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require ('mysql2');

//Express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Connect to database (mysql)
const db = mysql.createConnection ({
    host: 'localhost',
    //Your mysql username
    user: 'root',
    //Your mysql password
    password: 'gamecocks',
    database: 'election'
},
    console.log('Connected to the election database.')
)


//Request to main to see if server is working correctly (test example)
// app.get('/', (req, res) => {
//     res.json({
//        message: 'Hello World!'
//     })
// })

//Uses mysql2 nodepackage module to return candidates (all)
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
//   });


//GET a single candidate
// db.query('SELECT * FROM candidates WHERE id=1', (err,row) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(row);
// })

//DELETE a candidate
// db.query('DELETE FROM candidates WHERE id = ?', 1, (err,result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })

//Create a candidate
// const sql = 'INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES (?, ?, ?, ?)';
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });



//Default response for any other req (not found)
app.use((req,res) => {
    res.status(404).end();
})



//Server Listening
app.listen(PORT, () => {
console.log(`Server successfully listening on: http://localhost:${PORT}/`);
});


