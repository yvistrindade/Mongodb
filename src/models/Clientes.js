/**
 * Modelo de dados (coleção)
 * Clientes
 */
 
// importação da biblioteca
const { model, Schema } = require('mongoose')
 
// criação da estrutura de dados ("coleção") que será usada no banco
const clienteSchema = new Schema({
    nomeCliente: {
        type: String
    },
    foneCliente: {
        type: String
    },
}, {versionKey: false})
 
// importação do modelo de dados
// obs: Clientes será o nome da coleção
module.exports = model('Clientes', clienteSchema)