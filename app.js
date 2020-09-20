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
let count = "SELECT COUNT(Code) FROM clients";
let DBcode = 0;
let name = "";
let lastname = "";
let MiddleName = "";
let DateOfBirth;
let Gender = "Женский";
let pasSer = 0;
let pasNUM = 0;
let issued = "";
let dateIss;
let idNum = "";
let placeBirth = "";
let placeLiv = "";
let address = "";
let home;
let mobile;
let mail;
let mar;
let ship;
let diss;
let ret;
let salary;
let mil;

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

app.post('/db', urlencodedParser, (req, res) => {
    console.log(req.body)
    
    if(req.body.Code == DBcode){
        res.send(`
        Код записи: ${DBcode}<br>
        <br>Имя: ${name}
        <br>Фамилия: ${lastname}
        <br>Отчество: ${MiddleName}
        <br>Дата рождения: ${DateOfBirth}
        <br>Пол: ${Gender}
        <br>Номер паспорта: ${pasSer}${pasNUM}
        <br>Место выдачи: ${issued}
        <br>Дата выдачи: ${dateIss}
        <br>Идентификационный номер: ${idNum}
        <br>Город рождения: ${placeBirth}
        <br>Город проживания: ${placeLiv}
        <br>Адрес проживания: ${address}
        <br>Домашний телефон: ${home}
        <br>Мобильный телефон: ${mobile}
        <br>E-mail: ${mail}
        <br>Семейное положение: ${mar}
        <br>Гражданство: ${ship}
        <br>Инвалидность: ${diss}
        <br>Пенсионер: ${ret}
        <br>Месячный доход: ${salary}
        <br>Военный: ${mil}`);
    } else {
        res.send('Запись с таким кодом отсутствует!');
    }

    connection.query(zapros, (err, result)=>{
        if (err) {
            console.log(err);
        }
        else {
            name = result[req.body.Code - 1]["Firstname"];
            lastname = result[req.body.Code - 1]["Lastname"];
            MiddleName = result[req.body.Code - 1]["MiddleName"];
            DBcode = result[req.body.Code - 1]["Code"];
            DateOfBirth = result[req.body.Code - 1]["DateOfBirth"];
            if (result[req.body.Code]["Gender"] === 1){
                Gender = "Мужской";
            } else {
                Gender = "Женский";
            }
            pasSer = result[req.body.Code - 1]["PassportSerial"];
            pasNUM = result[req.body.Code - 1]["Passport NUM"];
            issued = result[req.body.Code - 1]["IssuedBy"];
            dateIss  = result[req.body.Code - 1]["DateOfIssue"];
            idNum  = result[req.body.Code - 1]["Identification No"];
            placeBirth  = result[req.body.Code - 1]["PlaceOfBirth"];
            placeLiv  = result[req.body.Code - 1]["TheCityOfLiving"];
            address  = result[req.body.Code - 1]["TheAdressOfLiving"];
            if (result[req.body.Code - 1]["HomePhone"] === null){
                home = "Не указан";
            } else {
                home  = result[req.body.Code - 1]["HomePhone"];
            }

            if (result[req.body.Code - 1]["MobilePhone"] === null){
                mobile = "Не указан";
            } else {
                mobile  = result[req.body.Code - 1]["MobilePhone"];
            } 

            if (result[req.body.Code - 1]["E-mail"] === null){
                mail = "Не указан";
            } else {
                mail  = result[req.body.Code - 1]["E-mail"];
            } 

            if (result[req.body.Code - 1]["Marial Status"] === 0){
                mar = "Не женат/Не замужем";
            } else if (result[req.body.Code - 1]["Marial Status"] === 1) {
                mar = "Женат/Замужем";
            } else if (result[req.body.Code - 1]["Marial Status"] === 1){
                mar = "Разведен/Разведена";
            } else {
                mar  = "Вдова/Вдовец";
            }

            if (result[req.body.Code - 1]["Citizenship"] === 1){
                ship = "Белорусское";
            } else {
                ship  = "Не белорус";
            }

            if (result[req.body.Code - 1]["Disability"] === 0){
                diss = "Отсутствует";
            } else {
                diss  = "Присутствует";
            } 

            if (result[req.body.Code - 1]["Retiree"] === 0){
                ret = "Нет";
            } else {
                ret  = "Да";
            } 

            if (result[req.body.Code - 1]["Salary"] === null){
                salary = "Не указан";
            } else {
                salary  = result[req.body.Code - 1]["Salary"];
            } 

            if (result[req.body.Code - 1]["Militarian"] === 0){
                mil = "Нет";
            } else {
                mil  = "Да";
            }
        }
    })
})

app.post('/add', urlencodedParser, (req, res) => {
    res.sendFile(__dirname + "/add.html");
});

app.post('/submit', urlencodedParser, (req, res) =>{
    res.send('Запись прошла успешно')
    console.log(req.body);

    if(req.body.Gender === "Мужской") {
        req.body.Gender = 1;
    } else { 
        req.body.Gender = 0;
    }

    if(req.body.MarialStatus === "Не женат/Не замужем") {
        req.body.MarialStatus = 0;
    } else if (req.body.MarialStatus === "Женат/Замужем"){ 
        req.body.MarialStatus = 1;
    } else if (req.body.MarialStatus === "Разведен/Разведена"){
        req.body.MarialStatus = 2;
    } else req.body.MarialStatus = 3;

    if(req.body.Citizenship === "Белорусское") {
        req.body.Citizenship = 1;
    } else { 
        req.body.Citizenship = 0;
    }

    if(req.body.Disability === "Нет") {
        req.body.Disability = 0;
    } else { 
        req.body.Disability = 1;
    }

    if(req.body.Retiree === "Нет") {
        req.body.Retiree = 0;
    } else { 
        req.body.Retiree = 1;
    }

    if(req.body.Militarian === "Нет") {
        req.body.Militarian = 0;
    } else { 
        req.body.Militarian = 1;
    }


    var sql = "INSERT INTO `lab1`.`clients` (`Code`, `Lastname`, `Firstname`, `MiddleName`, `DateOfBirth`, `Gender`, `PassportSerial`, `Passport NUM`, `IssuedBy`, `DateOfIssue`, `Identification No`, `PlaceOfBirth`, `TheCityOfLiving`, `TheAdressOfLiving`, `HomePhone`, `MobilePhone`, `E-mail`, `Marial Status`, `Citizenship`, `Disability`, `Retiree`, `Salary`, `Militarian`) VALUES (null, '" + req.body.lastname +
    "','" + req.body.firstname +
    "','" + req.body.middleName +
    "','" + req.body.DateOfBirth +
    "','" + req.body.Gender +
    "','" + req.body.PasSerial + 
    "','" + req.body.PasNUM +
    "','" + req.body.IssuedBy +
    "','" + req.body.DateOfIssue +
    "','" + req.body.idNum +
    "','" + req.body.PlaceOfBirth +
    "','" + req.body.TheCityOfLiving +
    "','" + req.body.TheAdressOfLiving +
    "','" + req.body.HomePhone +
    "','" + req.body.MobilePhone +
    "','" + req.body.Email +
    "','" + req.body.MarialStatus +
    "','" + req.body.Citizenship +
    "','" + req.body.Disability +
    "','" + req.body.Retiree +
    "','" + req.body.Salary +
    "','" + req.body.Militarian + "')";
    connection.query(sql, (err) => {
        if (err) {
            throw err
        } else {
            res.status(200);
        }
    })
})

app.post('/remove', urlencodedParser, (req, res) => {
    res.sendFile(__dirname + "/remove.html");
});

app.post('/remove/success', urlencodedParser, (req, res) => {
    
    console.log(req.body);
    
    res.send("Удаление прошло успешно!");
    sqlRemoval = "DELETE FROM `lab1`.`clients` WHERE (`Code` = '" + req.body.removalCode + "')";
    connection.query(sqlRemoval, (err) => {
        if (err) {
            throw err
        } else {
            res.status(200);
        }
    });
});

app.get('/closed', urlencodedParser, (req, res)=>{
        connection.end(err =>{
        if (err) {
            console.log(err);
            return err;
        }
        else{
            console.log("\nDatabase connection closed");
        }
        res.send("Соединение закрыто успешно!");
    });
})


