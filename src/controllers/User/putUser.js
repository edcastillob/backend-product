const { User } = require("../../db");

async function updateUser(req, res) {
    console.log('first')
  const userID = req.params.id;
  console.log(userID)
  const newData = req.body;
  console.log(req.body);

  // Convertir campos numéricos de tipo string a números


 
  if (newData.image && typeof newData.image === 'string') {
    newData.image = [newData.image];
  }

  try {
    const user = await User.findOne({
      where: { id: userID },
    });

    if (!user) {
      return res.status(404).json({ error: "user not Found" });
    }

    // Actualizar todos los campos, incluyendo categoryId
    await User.update(newData, {
      where: { id: userID },
    });

    // Obtener el producto actualizado después de la actualización
    const updatedUser = await User.findByPk(userID);

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  updateUser,
};
