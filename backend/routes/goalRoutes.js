const express = require('express')
const router = express.Router()
const {getGoals}  = require ('../controllers/goalControllers')

router.get('/', getGoals)
router.post('/', (req, res)=>{
    res.status(200).json({"message":"Set a goal"});
})
router.put('/:id', (req, res)=>{
    res.status(200).json({"message":`update Goal ${req.params.id}`});
})
router.delete('/:id', (req, res)=>{
    res.status(200).json({"message":`deleted goal ${req.params.id}`});
})
module.exports = router
