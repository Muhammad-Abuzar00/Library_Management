const express = require('express');
const { addAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorControllers');
const router = express.Router();

router.post('/add', addAuthor);
router.put('/update/:id', updateAuthor);
router.delete('/delete/:id', deleteAuthor);

module.exports = router;
