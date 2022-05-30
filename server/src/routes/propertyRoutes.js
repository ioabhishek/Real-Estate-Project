const router = require('express').Router();
const Property = require('../models/property');

router.post('/addproperty', async(req, res) => {
  const { property_type, mobile, total_area } = req.body;

  try {
    let property = new Property ({
      property_type: property_type,
      mobile: mobile,
      total_area: total_area
    });

    await property.save();
    res.status(201).send();

  } catch(e) {
    res.status(500).send('Something went wrong, Try again later.')
  }
})

router.get('/', async(req, res) => {
  try {
    let property = await Property.find();
    res.send(property);
    // res.json(post);
  } catch(e) {
    console.log(e)
  }
});

module.exports = router;