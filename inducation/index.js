const express = require("express");
const app = express();
const db = require("./db"); // Import the database connection
const mongoose = require("mongoose");


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require("../models/Person"); // Import the Person model
const MenuItem = require("../models/MenuItem"); // Import the MenuItem model

app.get("/", (req, res) => {
    res.send("Welcome to My Hotel....");
});


app.post('/Person', async (req, res) => {
    try {
        const data = req.body //Assuming the request body contains the person data

    //Create a new person document using the Mongoose model
    const newPerson = new Person(data);
    

    // Save the new person document to the database
    const response = await newPerson.save();
    console.log('Person saved successfully:', response);
    res.status(200).json({ message: 'Person saved successfully', person: response });

    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }   

})

app.post('/MenuItem', async (req, res) => {
    try {
        const data = req.body //Assuming the request body contains the menu item data   

        // Create a new menu item document using the Mongoose model
        const newMenuItem = new MenuItem(data);

        // Save the new menu item document to the database
        const response = await newMenuItem.save();
        console.log('Menu item saved successfully:', response);
        res.status(200).json({ message: 'Menu item saved successfully', menuItem: response });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

//Get method to get the person
app.get('/person', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Person data retrieved successfully:', data);
        res.status(200).json(data);
    
    } 

    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        
    }
    })



app.listen(3000, () => {
    console.log(`Server is running on 3000`);
});
