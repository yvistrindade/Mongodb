/**
 * Modulo de conexão com o banco de dados 
 * uso do framework mongodb
 */

//importação do mongoose
const mongoose = require('mongoose')

//configuração de banco de dados 
//ip/link do servidors, autenticação
//ao final da url definir o banco de dados 
//exemplo: /dbclientes
const url = 'mongodb+srv://admin:123Senac@cluster01.kxl89.mongodb.net/dbclientes'

//validação (evitar a abertura de varias conexões)
let conectado = false

//metodo para conectar com o banco de dados 
const conectar = async () => {
    //se nao estiver conectado
    if (!conectado) {
        //conectar com o banco de dados
        try {
            await mongoose.connect(url) //conectar
            conectado = true //setar a variavel
            console.log("MongoDB connect")
        } catch (erro) {
            console.error(error)
        }
    }
}

//metodo para desconectar com o banco de dados 
const desconectar = async () => {
    //se estiver conectaddo
    if (conectado) {
        //conectar com o banco de dados
        try {
await mongoose.disconnect(url) // desconectar
conectado = false //setar a variavel
console.log("MongoDB desconnect")
        } catch (erro) {
            console.error(error)
        }
    }
}

//exportar para o main os metodos conectar e desconectar
module.exports = {conectar, desconectar}

