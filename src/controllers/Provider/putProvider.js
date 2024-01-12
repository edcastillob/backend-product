const { Provider } = require("../../db");

async function updateProvider(req, res) {
  const providerId = req.params.id;
  const newData = req.body;
  // console.log(req.body);

  // Convertir campos numéricos de tipo string a números


  // if (typeof newData.price === "string") {
  //   newData.price = parseFloat(newData.salePrice);
  // }
  // if (newData.images && typeof newData.images === 'string') {
  //   newData.images = [newData.images];
  // }

  try {
    const provider = await Provider.findOne({
      where: { id: providerId },
    });

    if (!provider) {
      return res.status(404).json({ error: "Provider not Found" });
    }

    // Actualizar todos los campos, incluyendo categoryId
    await Provider.update(newData, {
      where: { id: providerId },
    });

    // Obtener el producto actualizado después de la actualización
    const putProvider = await Provider.findByPk(providerId);

    return res.status(200).json(putProvider);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  updateProvider,
};
