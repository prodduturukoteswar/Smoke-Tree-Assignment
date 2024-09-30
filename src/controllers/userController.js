const User = require('../models/User');
const Address = require('../models/Address');

exports.createUserAndAddress = async (req, res) => {
    const { name, address } = req.body;
    
    try {
        const user = await User.create({ name });
        await Address.create({ userId: user.id, address });
        res.status(201).json({ message: 'User and Address created successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
