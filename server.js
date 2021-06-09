const express = require ('express');
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

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


