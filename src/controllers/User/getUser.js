    const { User } = require("../../db");

    async function getUser(req, res) {
        try {
            const { user } = req.body;
    
            if (!user) {
                return res.status(400).json({ message: 'User is required in the request body' });
            }
    
            let foundUser;
    
            // Verificar si el user es un email
            if (isValidEmail(user)) {
                foundUser = await User.findOne({
                    where: {
                        email: user
                    }
                });
            } else {
                // Si no es un email, buscar por username
                foundUser = await User.findOne({
                    where: {
                        username: user
                    }
                });
            }
    
            if (!foundUser) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            return res.status(200).json(foundUser);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }    
 
    function isValidEmail(str) {       
        return str.includes('@');
    }

    module.exports = {
        getUser
    };
