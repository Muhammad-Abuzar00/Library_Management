const express = require('express');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const borrowerRoutes = require('./routes/borrowerRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(express.json());

mongoose
    .connect('mongodb://localhost:27017/library', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/borrowers', borrowerRoutes);
app.use('/transactions', transactionRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Library API');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
