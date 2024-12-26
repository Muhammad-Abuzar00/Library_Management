const express = require('express');
const { addBorrower, updateBorrower } = require('../controllers/borrowerController');
const router = express.Router();

router.post('/add', addBorrower);
router.put('/update/:id', updateBorrower);

module.exports = router;
