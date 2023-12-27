const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { user, password } = req.body;

    if (!user) {
      return res
        .status(400)
        .json({ message: "User is required in the request body" });
    }

    let foundUser;

    // Verificar si el user es un email
    if (isValidEmail(user)) {
      foundUser = await User.findOne({
        where: {
          email: user,
        },
      });
    } else {
      // Si no es un email, buscar por username
      foundUser = await User.findOne({
        where: {
          username: user,
        },
      });
    }

    if (!foundUser) {
      return res.status(404).json({ message: "Error user/password" });
    }

    const eq = bcrypt.compareSync(password, foundUser.password);

    if (!eq) {
      return res.status(404).json({ message: "Error user/password" });
    }

    // Generar un token de autenticación
    const token = jwt.sign({ userId: foundUser.id }, "angularPssw", {
      expiresIn: "1h",
    });

    // Crear un nuevo objeto de usuario sin la propiedad password y role
    const userWithoutPasswordAndRole = { ...foundUser.toJSON() };
    delete userWithoutPasswordAndRole.password;
    delete userWithoutPasswordAndRole.role;

    return res.status(200).json({
      user: userWithoutPasswordAndRole,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

function isValidEmail(str) {
  return str.includes("@");
}

module.exports = {
  login,
};
