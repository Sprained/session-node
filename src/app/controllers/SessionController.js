const Users = require('../models/Users');

module.exports = {
    async store(req, res){
        const user = await Users.findOne({
            where: {
                nome: req.body.nome
            }
        });

        if(!user){
            return res.status(400).json({ message: 'Usuario não cadastrado' });
        }

        req.session.userId = user.id;
        console.log(req.session.userId)
        return res.json(user);
    }
}