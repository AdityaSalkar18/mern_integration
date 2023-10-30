const express = require('express');
const router = express.Router();
const Notification = require('../models/notifi');



// Create a new profile
router.post('/', async (req, res) => {
  try {
    const { sname, rname, msg } = req.body;
    const notifi = new Notification({ sname, rname, msg });
    await notifi.save();
    res.status(201).json(notifi);
  } catch (error) {
    res.status(500).json({ error: 'Could not create profile' });
  }
});

// Fetch user profiles
router.get('/', async (req, res) => {
  try {
    const notifi = await Notification.find();
    res.status(200).json(notifi);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch profiles' });
  }
});

module.exports = router;