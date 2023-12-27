const { Product } = require("../../../db");

async function putProduct(req, res) {
  const productId = req.params.id;
  const newData = req.body;
  console.log(req.body);

  // Convertir campos numéricos de tipo string a números


  if (typeof newData.price === "string") {
    newData.price = parseFloat(newData.salePrice);
  }
  if (newData.images && typeof newData.images === 'string') {
    newData.images = [newData.images];
  }

  try {
    const product = await Product.findOne({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not Found" });
    }

    // Actualizar todos los campos, incluyendo categoryId
    await Product.update(newData, {
      where: { id: productId },
    });

    // Obtener el producto actualizado después de la actualización
    const updatedProduct = await Product.findByPk(productId);

    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  putProduct,
};
