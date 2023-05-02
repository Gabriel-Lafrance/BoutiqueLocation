import express from "express";

import { getVoitureParFiltre, getVoitureParID, getVoitures } from "./database.js";

const app = express();

app.listen(8080, ()=>{
    console.log("Port 8080 pour le serveur database");
})

app.get("/api/get/voitures", async (req,res) => {
    const resultat = await getVoitures();
    console.log("Sending data")
    res.json(resultat);
})

app.get("/api/get/voitures/:id", async (req,res) => {
    const id = req.params.id;
    const resultat = await getVoitureParID(id);
    res.json(resultat);
})

app.get("/api/get/voitures/filtre/:annee/:marque", async (req,res) => {
    const annee = req.params.annee.toString();
    const marque = req.params.marque;
    const resultat = await getVoitureParFiltre(annee,marque);
    res.json(resultat);
})

