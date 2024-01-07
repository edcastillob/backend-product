const { Payment } = require('../../db');

const postReviewProduct = async (req, res) => {
    console.log(req.body)
  try {
    const { username, productId } = req.body;

    // Verificar si existe una compra del usuario para el producto en la tabla Payment
    const payment = await Payment.findOne({
      where: {
        user: username,
        productId: productId,
      },
    });

    if (!payment) {
      console.log(false)
      return res.status(200).json({ hasPurchased: false });
    }

    // Verificar si ya existe una review para ese usuario y producto en la tabla Review
    
    console.log(true)
    return res.status(200).json({ hasPurchased: true});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  postReviewProduct,
};
