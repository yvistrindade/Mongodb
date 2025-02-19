/**
 * Processo principal 
 * Estudo do CRUD do mongoDB
 */

//importação do modulo de conexão (database.js)
const {conectar, desconectar} = require('./database.js')

//execução de aplicação
const app = async () => {
    await conectar()
    await desconectar()
}
console.clear()
app()