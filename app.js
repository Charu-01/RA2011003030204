const express = require("express");
const app = express();
const axios = require('axios');
const port = 8008;

app.get('/numbers', async (req, res) => {
    const urls = req.query.url || [];
    const results = [];
    for (const url of urls) {
        try {
            console.log(`Fetching data from: ${url}`);

            const response = await axios.get(url);

            console.log(`Received data from: ${url}`);

            results.push(response.data);
        } catch (error) {

            console.error(`Error fetching data from ${url}: ${error.message}`);
            results.push({ error: `Error retrieving JSON from ${url}: ${error.message}` });
        }
    }
    res.json(results);
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
