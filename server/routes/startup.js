// routes/startup.js
const express = require('express');
const router = express.Router();  
const Startup = require('../models/startup');


//Create a startup profile
router.post('/', async (req, res) => {
 
  try {
    const { compname,eyear,cno,add, email,web, bio,mteam,btitle,bdesc,ps,tm,cp,sms,
        bm,mjc,cad,tp,fdesc,rev,expen,net } = req.body;
    const startup = new Startup({ compname,eyear,cno,add, email,web, bio,mteam,btitle,bdesc,ps,tm,cp,sms,
        bm,mjc,cad,tp,fdesc,rev,expen,net });
    await startup.save();
    res.status(201).json(startup);
  } catch (error) {
    res.status(500).json({ error: 'Could not create startup profile' });
  }
});

// Fetch user startup profiles
router.get('/', async (req, res) => {
  try {
    const startup = await Startup.find();
    res.status(200).json(startup);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch startup profiles' });
  }
});


// Fetch a specific startup profile by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const startup = await Startup.findById(id);

    if (!startup) {
      return res.status(404).json({ error: 'Startup not found' });
    }

    res.status(200).json(startup);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch startup details' });
  }
});



module.exports = router;
