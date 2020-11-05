module.exports = {
    async index(req, res) {
        return res.json(req.session.userId);
    }
}