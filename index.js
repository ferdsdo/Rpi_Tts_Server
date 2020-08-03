const express = require('express')
const {spawn} = require('child_process');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("main page");
    res.header("Access-Control-Allow-Origin", "*");
})

app.get('/say', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
 var msg;
 msg = req.query.msg;
 if(msg) {
     // spawn new child process to call the python script
    const python = spawn('python', ['main.py', msg]);
    res.send({status: 'OK'});
 } else {
    res.send({status: 'FAIL'})
 }
 
})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))