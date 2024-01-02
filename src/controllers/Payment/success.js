// En el controlador de success_url
async function success(req, res) {
    try {
        // Realiza acciones necesarias en el backend (registra la compra, etc.)

        // Simula la obtención del id de la compra (reemplázalo con tu lógica real)
        const idCompra = 'kdfbdsfsefs-esfsefse-2156s4fe61wef';

        // Envía una respuesta al frontend con el id de la compra
        return res.status(200).json({ idCompra });
    } catch (error) {
        console.error('Error en la ruta de éxito:', error);
        return res.status(500).json({ error: 'Error en la ruta de éxito' });
    }
}
module.exports = {
    success,
};

// En el controlador de success_url
// async function success(req, res) {
//     try {
//         // Realiza acciones necesarias en el backend (registra la compra, etc.)

//         // Obtén el id de la compra de la última entrada en la base de datos
//         const lastPayment = await Payment.findOne({
//             order: [['createdAt', 'DESC']],
//         });

//         if (!lastPayment) {
//             throw new Error('No se encontró ninguna compra registrada.');
//         }

//         const idCompra = lastPayment.idBuy;

//         // Envía una respuesta al frontend con el id de la compra
//         return res.status(200).json({ idCompra });
//     } catch (error) {
//         console.error('Error en la ruta de éxito:', error);
//         return res.status(500).json({ error: 'Error en la ruta de éxito' });
//     }
// }

// module.exports = {
//     success,
// };
