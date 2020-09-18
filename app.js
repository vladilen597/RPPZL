const mysql = require('mysql');

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Port - ${port}`)
})


const connection = mysql.createConnection({
    host: "DESKTOP-DV80UAL",
    user: "vlagor",
    database: "lab1",
    password: "zapusta"
});

connection.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else{
        console.log("Database connected\n");
    }
})

let zapros = "SELECT * FROM clients";
let blyat;

connection.query(zapros, (err, result)=>{
    if (err) {
        console.log(err);
    }
    else {
        console.log(blyat = result[2]["Firstname"]);
         
    }
})

connection.end(err =>{
    if (err) {
        console.log(err);
        return err;
    }
    else{
        console.log("\nDatabase connection closed");
    }
});

app.get('/', (require, result) => {
    result.send("Имя: " + blyat);
});  
