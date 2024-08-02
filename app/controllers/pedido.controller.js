const Pedido = require('../models/pedido.model')

exports.create = async(req, res) => {
    const pedido = await Pedido.create(req.body)

    if(pedido){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.read = async(req, res) => {
    const pedido = await Pedido.read();
    res.status(200).send(pedido)
}

exports.update = async(req, res) => {
    const pedido = await Pedido.update(req.params.id, req.body)

    if(pedido){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const pedido = await Pedido.delete(req.params.id, req.body);

    if (pedido) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}


exports.readById = async(req, res) => {
    const pedido = await Pedido.readById(req.params.id)
    res.status(200).send(pedido)
}

exports.readAll = async(req, res) => {
    const pedido = await Pedido.readAll();
    res.status(200).send(pedido)
}