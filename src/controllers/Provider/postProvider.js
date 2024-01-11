const { Provider } = require("../../db");

async function postProvider(req, res) {
  let { name, address, phone, rif, email } = req.body;
 
  // console.log(req.body)
   try {    

    // Crear el nuevo proveedor
    const newProvider = await Provider.create({
      name, address, phone, rif, email,
      
    });

    res.status(201).json({ provider: newProvider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  postProvider,
};
