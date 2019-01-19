const express = require('express')

const create  = require('../controllers/users/create')
const readAll = require('../controllers/users/readAll')
const readOne = require('../controllers/users/readOne')
const update  = require('../controllers/users/update')
const del     = require('../controllers/users/delete')

const router  = express.Router()

router.post('/', create)
router.get('/', readAll)
router.get('/:id', readOne)
router.put('/:id', update)
router.delete('/:id', del)

module.exports = router
