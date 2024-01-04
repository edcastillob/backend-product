const { User } = require("../../db");
const jwt = require("jsonwebtoken");

async function loginGoogle(req, res) {
  try {
    console.log('2sa')
    console.log(req.body)
    const { email, email_verified, name, picture } = req.body;

    // Verificar que los datos requeridos estén presentes y que el correo esté verificado
    if (!email || !email_verified) {
      return res.status(400).json({ message: "Invalid Google login data" });
    }

    // Buscar al usuario por su correo electrónico
    // const foundUser = await User.findOne({
    //   where: {
    //     email: email,
    //   },
    // });

    // Si el usuario no existe, crearlo (puedes ajustar esto según tus necesidades)
    // if (!foundUser) {
    //   const newUser = await User.create({
    //     email: email,
    //     // Puedes añadir más campos según los datos que obtienes de Google
    //     // name: name,
    //     // picture: picture,
    //   });
      // También puedes agregar la lógica para asignar un rol predeterminado u otros detalles
    // }

    // Generar un token de autenticación
    const token = jwt.sign({ email: email }, "secretKey", {
      expiresIn: "1h",
    });

     // Crear el objeto de respuesta según el formato deseado
     const response = {
        user: {
          email,
          image: [picture],
          fullname: name, 
        },
        token,
      };
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  
  module.exports = {
    loginGoogle,
  };