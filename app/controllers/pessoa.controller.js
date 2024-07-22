const Pessoa = require('../models/pessoa.model')

exports.create = async(req, res) => {
    const pessoa = await Pessoa.create(req.body)

    if(pessoa){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.read = async(req, res) => {
    const pessoa = await Pessoa.read();
    res.status(200).send(pessoa)
}

exports.update = async(req, res) => {
    const pessoa = await Pessoa.update(req.params.id, req.body)

    if(pessoa){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const pessoa = await Pessoa.delete(req.params.id, req.body);

    if (pessoa) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}


exports.readById = async(req, res) => {
    const pessoa = await Pessoa.readById(req.params.id)
    res.status(200).send(pessoa)
}