const User = require("../models/User");

module.exports = {
  async index(_req, res) {
    const users = await User.find({});
    return res.json(users);
  },

  async post(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  },

  async put(req, res) {
    const user = await User.findById(req.params.id);
    await User.findByIdAndUpdate(user._id, req.body);
    return res.json(req.body);
  },

  async delete(req, res) {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.json(user);
  },
  
};
