const { User } = require("../models");

const createUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const existingUser = await User.findOne({
            where: { email }
        });
        if (existingUser) {
            return res.status(409).json({ message: "Email is already used!" });
        }
        const newUser = await User.create({
            fullName: fullName,
            email: email,
            password: password
        });
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email, password }
        });

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Invalid User!" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const changeUserDetails = async (req, res) => {
    try {
        const { userId } = req.params;
        const [updatedRows] = await User.update(req.body, {
            where: { id: userId }
        });
        if (updatedRows === 0) {
            return res.status(404).json({ message: "User not found!" });
        }
        const updatedUser = await User.findByPk(userId);
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getUserInfo = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User Invalid!" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {createUser, login, changeUserDetails, getUserInfo};