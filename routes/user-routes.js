const router = require('express').Router();
const { Model } = require('sequelize/types');
const {User} = require('../..models');

//getAPI 
router.get('/', (req, res)=> {});
//get api/users/1 
router.get('/:id', (req, res)=> {});
//post api users 
router.post('/', (req, res)=> {});
    // PUT API 
router.put('/:id', (req, res)=> {});
// delete API 
router.delete('/:id', (req, res)=> {});

Model.exports = router;