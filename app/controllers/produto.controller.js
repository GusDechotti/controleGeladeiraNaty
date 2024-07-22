const Produto = require('../models/produto.model')

exports.create = async(req, res) => {
    const produto = await Produto.create(req.body)

    if(produto){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.read = async(req, res) => {
    const produto = await Produto.read();
    res.status(200).send(produto)
}

exports.update = async(req, res) => {
    const produto = await Produto.update(req.params.id, req.body)

    if(produto){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const produto = await Produto.delete(req.params.id, req.body);

    if (produto) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}


exports.readById = async(req, res) => {
    const produto = await Produto.readById(req.params.id)
    res.status(200).send(produto)
}