import mysql from "mysql2"

import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise();


export async function getVoitures(){
    const [result] = await pool.query("SELECT * FROM table_voitures INNER JOIN table_modeles WHERE table_voitures.idModele = table_modeles.id;"); 
    return result; // Destructuration avec les [] pour avoir juste le contenue intéressant
}

export async function getVoitureParID(id){
    const result = await pool.query("SELECT * FROM table_voitures WHERE id = ?", [id]);
    return result[0]; // [0] pour retourner le premier array. QOL
}
