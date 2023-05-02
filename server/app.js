import express from "express";

import { getVoitureParID, getVoitures } from "./database.js";

const app = express();

app.listen(8080, ()=>{
    console.log("Port 8080 pour le serveur database");
})

app.get("/get/voitures", async (req,res) => {
    const resultat = await getVoitures();
   res.send(resultat);
})

app.get("/get/voitures/:id", async (req,res) => {
    const id = req.params.id;
    const resultat = await getVoitureParID(id);
    res.send(resultat);
})

