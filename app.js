const mysql = require('mysql');


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

connection.query(zapros, (err, result)=>{
    if (err) {
        console.log(err);
    }
    else {

        console.log(result[1]['Фамилия'], result[1]['Имя'], result[1]['Отчество']);     
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
