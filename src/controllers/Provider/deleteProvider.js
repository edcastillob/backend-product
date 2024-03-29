const { Provider } = require("../../db");

async function deleteProvider(req, res) {
    const { id } = req.params;
  
    try {
      await Provider.destroy({ where: { id } });
      const providers = await Provider.findAll();
      return res.status(200).json(providers);
    } catch (error) {
      return res.status(500).json({ message: "Failed to Delete Provider", error });
    }
};

module.exports = {
    deleteProvider
};