const { Provider } = require("../../db");

async function getAllProvider(req, res) {
  try { 
    const providers = await Provider.findAll({
    
      attributes: [
        "id",
        "name",
        "address",
        "phone",
        "rif",
        "email",
      ],      
    });

    return res
      .status(200)
      .json( providers );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
module.exports = {
  getAllProvider,
};
