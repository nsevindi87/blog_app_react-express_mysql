import mysql from "mysql";


export const db = mysql.createConnection({
    host: 'localhost',
    user:"root",
    password:"bodrum0937",
    database: "blog"
})

db.connect(function(err) {
    if (err) throw err;
    console.log("SERVER BAGLANDI");
  });