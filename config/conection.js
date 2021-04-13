import mysql from "mysql"

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "example",
    database: "agenda-petshop"
})

export default connection