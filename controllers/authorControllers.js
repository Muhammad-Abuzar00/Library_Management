const Author = require('../models/author');


const addAuthor = async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json({ message: 'Author added successfully', author });
    } catch (error) {
        res.status(400).json({ message: 'Error adding author', error });
    }
};


const updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.json({ message: 'Author updated successfully', author });
    } catch (error) {
        res.status(400).json({ message: 'Error updating author', error });
    }
};

// Delete an author
const deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.json({ message: 'Author deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting author', error });
    }
};

module.exports = { addAuthor, updateAuthor, deleteAuthor };
