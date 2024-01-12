const { Provider } = require("../../db");

async function getProviderId(req, res) {
   
    try {
        const { id } = req.params;
        const providerId = await Provider.findByPk(id);               
        return res.status(200).json(providerId);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProviderId
};