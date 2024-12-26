const express = require('express');
const { addBook, updateBook, deleteBook } = require('../controllers/bookControllers');
const router = express.Router();

router.post('/add', addBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;
