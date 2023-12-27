const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
// const jwt = require('jsonwebtoken');
const { User } = require("../../db");

async function postUser(req, res) {
  let { username, email, password, role, image, fullname } = req.body;
 
  console.log(req.body)
  let imgAlt= 'https://raw.githubusercontent.com/edcastillob/angular-product-project/main/src/assets/noimage.jpeg';
  try {
    if(!image || image.length == 0){
      image= [imgAlt];
    }
    // Verificar si el usuario ya existe por su email o username
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return res.status(409).json({ error: 'User with this email or username already exists' });
    }

    // Cifrar la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crear el nuevo usuario
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || 'default',
      image,
      fullname,
    });

    // Generar un token de autenticación
    // const token = jwt.sign({ userId: newUser.id }, 'angularPssw', { expiresIn: '1h' });

    // Devolver la respuesta con el nuevo usuario y el token
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  postUser,
};
