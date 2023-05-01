import express from 'express';
import database from "../database";

const router =  express.Router();

router.get('/', (req,res,next) =>{
    res.json({test : 'test'});
})

router.get('/voitures', (req,res,next) =>{
    res.json({test : 'test'});
})

export default router;


