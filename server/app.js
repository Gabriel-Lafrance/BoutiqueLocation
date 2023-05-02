import express from "express";

import { getVoitureParID, getVoitures } from "./database.js";

const app = express();

app.listen(8080, ()=>{
    console.log("Port 8080 pour le serveur database");
})

app.get("/get/voitures", async (req,res) => {
    const voitures = await getVoitures();
   res.send(voitures);
})

