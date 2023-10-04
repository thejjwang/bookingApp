import express from 'express';

const router = express.Router();

router.get('/', (req, send) => {
    res.send("hello, this is the auth endpoint");
})