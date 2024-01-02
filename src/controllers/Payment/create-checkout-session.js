const { KEY_SECRET_STRIPE } = require("../../config.js");
const stripe = require('stripe')(KEY_SECRET_STRIPE);
const { Payment } = require("../../db");

async function createCheckoutSession(req, res) {
    // console.log('Back', req.body);

    try {
        const { products, user } = req.body;

        // Mapea la información del carrito a la estructura requerida por Stripe
        const lineItems = products.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.product.name,
                    description: item.product.description,
                },
                unit_amount: item.product.price * 100, // El precio debe estar en centavos
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:4200/thank-you-page?idCompra={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:3001/payment/cancel',
        });

        // Registra la compra en la base de datos
        for (const item of products) {
            await Payment.create({
                user: user,
                productId: item.product.id,
                price: item.product.price,
                quantity: item.quantity,
                idBuy: session.id,
            });
        }
        // if(session) console.log(res.json({ session }));
        return res.json({ session });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        return res.status(500).send({ error: 'Error creating checkout session' });
    }
}

module.exports = {
    createCheckoutSession,
};
