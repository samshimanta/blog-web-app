const UserModel = require('../model/user.model')

const UserController ={
    getAllUser: async (req, res) => {
        try {
          const users = await UserModel.getAll();
          res.status(200).json(users);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    } ,
    createUser: async (req, res) => {
        const { name, email, location } = req.body;
        console.log(req.body);
        
        try {
          const user = await UserModel.create(name, email, location);
          res.status(201).json(user);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }

    
}


module.exports =  UserController ;