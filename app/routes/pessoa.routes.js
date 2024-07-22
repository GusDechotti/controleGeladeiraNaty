module.exports = app => {
    const pessoaController = require('../controllers/pessoa.controller');
    const produtoController = require('../controllers/produto.controller');
    const pedidoController = require('../controllers/pedido.controller');

    app.route('/pessoa')
        .post(pessoaController.create)
        .get(pessoaController.read)

    app.route('/pessoa/:id')
        .put(pessoaController.update)
        .delete(pessoaController.delete)
        .get(pessoaController.readById)

    app.route('/produto')
        .post(produtoController.create)
        .get(produtoController.read)

    app.route('/produto/:id')
        .put(produtoController.update)
        .delete(produtoController.delete)
        .get(produtoController.readById)

    app.route('/pedido')
        .post(pedidoController.create)
        .get(pedidoController.read)

    app.route('/pedido/:id')
        .put(pedidoController.update)
        .delete(pedidoController.delete)
        .get(pedidoController.readById)
}