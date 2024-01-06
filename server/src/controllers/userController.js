import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const userActions = {
    createUser: async (req, res) => {
        try {
            const { username, email, password, role } = req.body
            const userExist = await userModel.findOne({username})
            if (userExist) {
                return res.status(404).json("User already exist")
            }
            const hashedPassword = await bcrypt.hash(password,10)

            const newUser = new userModel({
                username,
                email,
                password:hashedPassword,
                role
            })
            await newUser.save()
            res.send(`${username} added`)
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    login:async (req,res)=>{
        try {
            const {username,email,password} = req.body
            const findUser = await userModel.findOne({email})
            if (!findUser) {
                res.status(404).json({ error: "User not found" });
            }
            if (!(bcrypt.compare(password, findUser.password))) {
                return res.status(404).json({ error: "Password is not correct" });
            }
            const token = jwt.sign({ userId: findUser._id,email:findUser.email }, "secretKey", {
                expiresIn: "7d",
            });
            res.status(200).json(token)
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.find({})
            res.send(users)
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    getUserByID: async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            res.send(user)
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    updateUserbyID: async (req, res) => {
        try {
            const updateUser = await userModel.findByIdAndUpdate(req.params.id)
            if (updateUser) {
                updateUser.username = req.body.username
                updateUser.email = req.body.email
                updateUser.password = req.body.password
                updateUser.username = req.body.username
                await updateUser.save()
                res.send(`${req.params.username} updated to ${req.body.username}`)
            }
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    deleteUserByID: async (req, res) => {
        try {
            const deleteUser = await userModel.findByIdAndDelete(req.params.id)
            res.send(`${req.params.id} deleted`)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
}

export default userActions