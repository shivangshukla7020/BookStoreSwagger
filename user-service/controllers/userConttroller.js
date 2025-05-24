const users = require('../models/userModel');

const addUser = (req, res) =>{
    const user = {id : users.length + 1, ...req.body};
    users.push(user);
    res.json(user);
}

const updateUser = (req, res)=>{
    const index = users.findIndex(u => u.id == req.body.id);
    if(index == -1) return res.status(404).json({message : "User not found"});
    users[index] = req.body;
    res.json(req.body);
}

const findById = (req, res) => {
    const user = users.find(u => u.id == req.params.userId);
    if(!user) return res.status(404).json({message : "User not found"});
    res.json(user);
}

const deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id == req.params.userId);
    if(index == -1) return res.status(404).json({message : "User not found"});
    users.splice(index,1);
    res.json({message : "User deleted successfully"});
}

module.exports = {addUser, updateUser, findById, deleteUser};