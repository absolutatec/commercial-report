const express = require('express');
const ejs = require('ejs');
const app = express();
const connection = require('./database/database');

//view engine
app.set('view engine', 'ejs');

//Database

connection
   .authenticate()
   .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//Routes

app.get('/', (req, res) => {
    fetch('https://api.helena.run/core/v1/agent', {
            method: 'GET',
            headers: {
                'Authorization': 'pn_bAxnZ0gjGAdwaMqH52usE9rYuEvQp9u5iFeF3dvf7nM',
                'accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            res.render('index',{users:data});
            console.log(data); // Aqui você pode manipular os dados recebidos
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});