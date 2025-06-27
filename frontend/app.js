const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const axios = require('axios');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', async (req, res) => {
    // process.env.BACKEND_URL || "http://0.0.0.0:5000/" || 
    const URL= process.env.BACKEND_URL || "http://0.0.0.0:5000/" ;

    const formData = {
        name: req.body.name,
        email: req.body.email
    };


    try {
        const response = await fetch(`${URL}/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData)
        });
        const result = await response.text();

        res.send(result);
    } catch (err) {
        console.error('Error connecting to backend:', err);
        res.status(500).send('Error connecting to backend');
    }
});

app.listen(3000, () => console.log('Frontend running at http://localhost:3000'));
