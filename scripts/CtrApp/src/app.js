const express = require('express')
const { exec } = require("child_process");

const path = require('path')

const app = express()
console.log(path.join(__dirname, '../public/about.html'));

app.use(express.static(path.join(__dirname, '../public')))


app.get('/startre', (req, res) => {
    exec(`C:/scripts/StartRE.cmd`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
	    res.send('Success')
})

app.get('/stopre', (req, res) => {
    exec(`C:/scripts/stopre.cmd`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    res.send('Success')
})

app.get('/remountu', (req, res) => {
    exec(`C:/scripts/Mount_U.cmd`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    res.send('Success')
})

app.listen(3001, () => {
    console.log('Server is listening on port 3001');
})