const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pdf = require('html-pdf');
const template = require('./templates');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//GET Resume Route
app.get('/resume', (req, res) => {
    res.sendFile(`${__dirname}/ResumeOutput.pdf`);
});

//POST Resume Route
app.post('/resume', (req, res) => {
    pdf.create(template(req.body), {}).toFile('ResumeOutput.pdf', (err) => {
        if(err){
            res.send(err.measure);
            console.log(err);
        }
        res.json({ success: true });
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));