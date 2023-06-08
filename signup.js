const express = require('express');
const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'guandaru',
    database: 'dartgame_db', 
}

const app = express();
app.use (express.json());

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error ('Error creating connection to the database', err);
        return; 
    }
    console.log('Connected to database');
});

app.post('/logins', (req, res)  => {
    const sql = "INSERT INTO logins (name, email, password) VALUES(?,?,?)";
    const values = { name,email,password} = req.body; 
    db.query(sql, [values], (err, database) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;