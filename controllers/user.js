const User = require("../models/user");
// import user from "../models/user";

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers)
}

async function handleGetUserById(req, res) {
    const userById = await User.findById(req.params.id);
    // return res.json(userById);
     if (!userById) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.json(userById);
}

async function handleDeleteUserById(req, res) {
    const deleteUserById = await User.findByIdAndDelete(req.params.id);
    // return res.json(deleteUserById)
     if (!deleteUserById) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.json({ message: "User deleted successfully", deleteUserById });
}

async function handleUpdateUserById(req, res) {
    const updateUserById = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    // return res.json(updateUserById)
     if (!updateUserById) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.json(updateUserById);
}

async function handleCreateUser(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.job_role
    ){
        return res.status(400).json({msg: "All fields are required! "});
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobRole: body.job_role,
    });
    return res.status(201).json({msg: "Sucess", id: result._id});
}
  
module.exports = {
    handleCreateUser,   
    handleGetAllUsers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById
};

