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


//Default response for any other req (not found)
app.use((req,res) => {
    res.status(404).end();
})



//Server Listening
app.listen(PORT, () => {
console.log(`Server successfully listening on: http://localhost:${PORT}/`);
});


