const Order = require('../models/order');
const sqlConnection = require('../config/mysqlConfig');
const { generateTrackingNumber } = require('../utils/generateTrackingNumber');

exports.submitOrder = async (req, res) => {
  const data = req.body;

  try {
    // Generate auto fields
    data.fullName = `${data.firstName} ${data.lastName}`;
    data.tracking = generateTrackingNumber();

    // Save to MongoDB
    const mongoOrder = new Order(data);
    await mongoOrder.save();

    // Save to MySQL
    sqlConnection.query(
      'INSERT INTO orders (email, first_name, last_name, full_name, status, tracking, address, address2, city, state, zip, county) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        data.email,
        data.firstName,
        data.lastName,
        data.fullName,
        data.status,
        data.tracking,
        data.address,
        data.address2,
        data.city,
        data.state,
        data.zip,
        data.county
      ]
    );

    res.status(200).json({ message: 'Order submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit the order' });
  }
};
