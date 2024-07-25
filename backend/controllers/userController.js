const { User } = require('../models');

exports.addUser = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, address, role });
    res.status(201).json({ message: 'User added successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the user' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { userId, newPassword } = req.body;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.update({ password: hashedPassword }, { where: { id: userId } });
    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while changing the password' });
  }
};
