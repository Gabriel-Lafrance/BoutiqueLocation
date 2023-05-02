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
    const [result] = await pool.query("SELECT * FROM table_voitures WHERE id = ?;", [id]);
    return result; 
}

export async function getVoitureParAnnee(filtreAnnee){
    const [result] = await pool.query("SELECT table_voitures.id, table_voitures.couleur, table_voitures.disponible, table_voitures.prixJour, table_voitures.prixWeekend, table_modeles.annee,table_modeles.marque , table_modeles.acceleration,table_modeles.puissance FROM table_voitures INNER JOIN table_modeles WHERE table_voitures.idModele = table_modeles.id AND table_modeles.annee = ? ", [filtreAnnee]);
    return result; 
}

export async function getVoitureParMarque(filtreMarque){
    const [result] = await pool.query("SELECT table_voitures.id, table_voitures.couleur, table_voitures.disponible, table_voitures.prixJour, table_voitures.prixWeekend, table_modeles.annee,table_modeles.marque , table_modeles.acceleration,table_modeles.puissance FROM table_voitures INNER JOIN table_modeles WHERE table_voitures.idModele = table_modeles.id  AND table_modeles.marque = ?;", [filtreMarque]);
    return result; 
}


export async function getVoitureParFiltre(filtreAnnee,filtreMarque){
    if ( filtreAnnee === "Tout" && filtreMarque === "Tout"){
        return getVoitures();
    }
    else if ( filtreAnnee !== "Tout" && filtreMarque === "Tout"){
        return getVoitureParAnnee(filtreAnnee)
    }
    else if ( filtreAnnee === "Tout" && filtreMarque !== "Tout"){
        return getVoitureParMarque(filtreMarque);
    }
    const [result] = await pool.query("SELECT table_voitures.id, table_voitures.couleur, table_voitures.disponible, table_voitures.prixJour, table_voitures.prixWeekend, table_modeles.annee,table_modeles.marque , table_modeles.acceleration,table_modeles.puissance FROM table_voitures INNER JOIN table_modeles WHERE table_voitures.idModele = table_modeles.id AND table_modeles.annee = ? AND table_modeles.marque = ?;", [filtreAnnee,filtreMarque]);
    return result; 
}