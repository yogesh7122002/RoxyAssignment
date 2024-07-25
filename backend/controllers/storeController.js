const { Store, Rating, User } = require('../models');

exports.addStore = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const store = await Store.create({ name, email, address });
    res.status(201).json({ message: 'Store added successfully', store });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the store' });
  }
};

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.findAll({
      include: [{
        model: Rating,
        include: [User]
      }]
    });
    res.status(200).json({ stores });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching stores' });
  }
};

exports.submitRating = async (req, res) => {
  try {
    const { userId, storeId, rating } = req.body;
    const newRating = await Rating.create({ userId, storeId, rating });
    res.status(201).json({ message: 'Rating submitted successfully', newRating });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while submitting the rating' });
  }
};
