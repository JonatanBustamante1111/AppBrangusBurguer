const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'brangusb_jona',
    password: 'Bustamante1994.',
    database: 'brangusb_master'
})
conection.connect((err)=>{
    if(err)throw err
    console.log('la conexion funciona');
});


    