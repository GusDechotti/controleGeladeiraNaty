module.exports = app => {
    const pessoaController = require('../controllers/pessoa.controller');
    const produtoController = require('../controllers/produto.controller');
    const pedidoController = require('../controllers/pedido.controller');
    const disparoController = require(`../controllers/disparo.controller`);

    //Pessoas
    app.route('/api/pessoa')
        .post(pessoaController.create)
        .get(pessoaController.read)

    app.route('/api/pessoas/detalhes')
        .get(pessoaController.readDetalhe)

    app.route('/api/pessoa/:id')
        .put(pessoaController.update)
        .delete(pessoaController.delete)
        .get(pessoaController.readById)

    //Produtos
    app.route('/api/produto')
        .post(produtoController.create)
        .get(produtoController.read)

    app.route('/api/produto/:id')
        .put(produtoController.update)
        .delete(produtoController.delete)
        .get(produtoController.readById)

    app.route('/api/produtos/todos')
        .get(produtoController.readAll)

    //Pedidos
    app.route('/api/pedidos')
        .get(pedidoController.readAll)

    app.route('/api/pedido')
        .post(pedidoController.create)
        .get(pedidoController.read)

    app.route('/api/pedido/:id')
        .put(pedidoController.update)
        .delete(pedidoController.delete)
        .get(pedidoController.readById)

    app.route('/api/pedidos/deleteAll')
        .delete(pedidoController.deleteAll)

    //Disparos Naty
    app.route('/api/disparoNaty/padrao')
        .post(disparoController.compra)
    
    app.route('/api/disparoNaty/pix')
        .post(disparoController.compraPix)
}