import mysql from "mysql";

const pool = mysql.createPool({
    connectionLimit : 10,
    password: "_Viewer123",
    user: "viewver",
    database: "superloc",
    host: "54.39.96.105",
    port: "3306"
})

let superlocDB : any = {};

superlocDB.all = () => {
    return new Promise((resolve,reject) => {
        pool.query('SELECT * FROM table_voitures', (err,results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    });
}

export default superlocDB;