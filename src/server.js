const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/rates', async (req, res) => {
    const baseCurrency = req.query.base;
    const symbols = req.query.symbols || 'USD,PLN,EUR,JPY';
    try {
        const response = await axios.get(`https://api.frankfurter.app/latest?from=${baseCurrency}&to=${symbols}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch exchange rates' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
