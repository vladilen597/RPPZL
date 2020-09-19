const mysql = require('mysql');

const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('./'));

app.set('view engine', 'pug');

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.listen(port, () => {
    console.log(`Port - ${port}`)
});

app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname })
})

const connection = mysql.createConnection({
    host: "DESKTOP-DV80UAL",
    user: "vlagor",
    database: "lab1",
    password: "zapusta"
});


let zapros = "SELECT * FROM clients";
let DBcode = 0;
let name = "";
let lastname = "";

connection.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else{
        console.log("Database connected\n");
    }
});

// app.get('/', (req, res) => {
//     res.send("Имя: " + firstName);
// });  

app.get('/db', urlencodedParser, (req, res)=>{
    res.sendFile(__dirname + "/db.html");
})

app.post('/db', urlencodedParser, function (req, res){


    connection.query(zapros, (err, result)=>{
        if (err) {
            console.log(err);
        }
        else {
            name = result[1]["Firstname"];
            lastname = result[1]["Lastname"];

            DBcode = result[1]["Code"];

            console.log(DBcode);
        }
    })
    
    console.log(req.body);
    if(req.body.Code == DBcode){
        res.send(`Имя: ${name}<br>Фамилия: ${lastname}`);
    } else {
        res.send('Запись с таким кодом отсутствует!');
    }
<<<<<<< HEAD
    
})

// connection.end(err =>{
//     if (err) {
//         console.log(err);
//         return err;
//     }
//     else{
//         console.log("\nDatabase connection closed");
//     }
// });
=======
});

app.get('/', (require, result) => {
    result.send("Имя: " + blyat);
});  
>>>>>>> 45be92fe5175f970bdf472313b4b01228a5d8de5
