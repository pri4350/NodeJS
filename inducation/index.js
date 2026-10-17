const express = require("express");
const app = express();
const db = require("./db"); // Import the database connection
const mongoose = require("mongoose");
const port = 3000;


const Person = require("../models/Person"); // Import the Person model
app.get("/", (req, res) => {
    res.send("Welcome to My Hotel....");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});