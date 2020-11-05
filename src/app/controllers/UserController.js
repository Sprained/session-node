const Users = require('../models/Users');

module.exports = {
    async register(req, res) {
        await Users.create(req.body)

        return res.json({ message: 'Usuario criado com sucesso' });
    }
}