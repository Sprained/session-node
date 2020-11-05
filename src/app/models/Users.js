const Sequelize = require('sequelize');
const { Model } = Sequelize;
const bcrypt = require('bcryptjs');

class Users extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: Sequelize.STRING,
            senha_virtual: Sequelize.VIRTUAL,
            senha: Sequelize.STRING
        }, {
            sequelize,
            modelName: 'users'
        });

        this.addHook('beforeSave', async (usuario) => {
            if (usuario.senha_virtual) {
                usuario.senha = await bcrypt.hash(usuario.senha_virtual, 8);
            }
        });

        return this;
    }

    checkPass(senha_virtual) {
        return bcrypt.compare(senha_virtual, this.senha);
    }
}

module.exports = Users;