import UserModel from "../models/UserModel.js";

const createUser = async(req, res) => {
    try{
        const {FullName, Email, Password} = req.body;
        const user = await UserModel.findOne({
            Email: Email
        })
        if (user){
            return res.status(500).json({message: "Email is already used!"});
        }
        const newUser = await UserModel.create({
            FullName: FullName,
            Email: Email,
            Password: Password
        })
        res.status(200).json(newUser);
    } catch(err){
        res.status(500).json({message: err.message});
    }
}

const login = async(req, res) => {
    try{
        const {Email, Password} = req.body;
        const user = await UserModel.findOne({
            Email: Email,
            Password: Password
        })
        if (user){
            res.status(200).json(user);
        } else {
            res.status(404).json({message: "Invalid User!"});
        }
    } catch(err){
        res.status(200).json({message: err.message});
    }
}

const changeUserDetails = async(req, res) => {
    try{
        const {UserId} = req.params;
        const result = await UserModel.findByIdAndUpdate(UserId, req.body);
        res.status(200).json(result);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const getUserInfo = async(req, res) => {
    try{
        const {UserId} = req.params;
        const user = await UserModel.findById(UserId);

        if (!user){
            return res.status(404).json({message: "User Invalid!"});
        }
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export default {createUser, login, changeUserDetails, getUserInfo};