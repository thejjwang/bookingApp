import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();

// create
router.post('/', async (req, res) => {

    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})
// update
router.put('/:id', async (req, res) => {
    try {
        const updatedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

// delete 
// get
// get all

export default router 