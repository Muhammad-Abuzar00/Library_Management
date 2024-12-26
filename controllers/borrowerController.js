const Borrower = require('../models/borrower');

// Add a new borrower
const addBorrower = async (req, res) => {
    try {
        const borrower = new Borrower(req.body);
        await borrower.save();
        res.status(201).json({ message: 'Borrower added successfully', borrower });
    } catch (error) {
        res.status(400).json({ message: 'Error adding borrower', error });
    }
};

// Update a borrower
const updateBorrower = async (req, res) => {
    try {
        const borrower = await Borrower.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!borrower) return res.status(404).json({ message: 'Borrower not found' });
        res.json({ message: 'Borrower updated successfully', borrower });
    } catch (error) {
        res.status(400).json({ message: 'Error updating borrower', error });
    }
};

module.exports = { addBorrower, updateBorrower };
