const { User } = require("../../db");

async function getAllUsers(req, res) {
  try { 
    const users = await User.findAll({
        attributes: [
        "id",
        "fullname",
        "username",
        "role",
        "image",
      ],      
    });

    return res
      .status(200)
      .json( users );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
module.exports = {
  getAllUsers,
};
