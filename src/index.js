const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express!");
});
app.get("/learn", (req, res) => {
    res.send("Learning Express!");
});

const PORT = 3000;

const handleListen = () => {
    console.log(`[SUCCESS] The server is running on Port ${PORT}`);
}

app.listen(PORT, handleListen);

module.exports = app;