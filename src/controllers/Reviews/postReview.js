const { Review, Payment } = require('../../db');

const createReview = async (req, res) => {
  try {
    const { rating, comment, username, productId, image } = req.body;

    // Verificar si existe una compra del usuario para el producto en la tabla Payment
    const payment = await Payment.findOne({
      where: {
        user: username,
        productId: productId,
      },
    });

    if (!payment) {
      return res.status(400).json({ error: 'No se encontró una compra para este usuario y producto.' });
    }

    // Convertir la imagen a un array si no lo es
    const imageArray = Array.isArray(image) ? image : [image];

    // Crear la review
    const review = await Review.create({
      rating,
      comment,
      username,
      productId,
      image: imageArray, // Almacenar la imagen como un array
    });

    return res.status(201).json({ message: 'Review creada exitosamente', review });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  createReview,
};
