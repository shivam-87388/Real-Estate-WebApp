const express = require('express');
const UserModel = require('../models/User');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const router = express.Router();

// CREATE ACCOUNT (SIGNUP)
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, city } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new UserModel({ name, email, password, city });
        const result = await newUser.save();

        res.status(200).json({ message: 'Account created successfully', user: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Account does not exist or wrong credentials' });
        }

        const { _id, name } = user;
        const token = jwt.sign({ _id, name }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err });
    }
});

module.exports = router;
