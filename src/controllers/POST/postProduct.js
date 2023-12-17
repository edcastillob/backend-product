const { Product } = require("../../db");

async function postProduct(req, res) { 
  console.log('first')
  console.log(req.body);
  let imgAlt= "https://raw.githubusercontent.com/edcastillob/backend-product/main/src/img/noimage.png"
  try {
    let { name, category, price, description, images } = req.body;
    
    if (!name || !description || !price || !category) {
      return res.status(401).send("Missing Data");
    }  
   
    if(!images || images.length == 0){
      images= [imgAlt];
    }
    
    const product = await Product.create({
      name,      
      description,      
      price,
      images,
      isActive: true,
      category
      
    });   

    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  postProduct,
};