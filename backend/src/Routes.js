const express = require('express')
const routes = express.Router();
const OngController = require('./Controllers/OngController')
const IncidentsController = require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')

routes.post('/sessions',SessionController.create)


routes.get('/ongs',OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile',ProfileController.index)


routes.post('/incidents',IncidentsController.create)
routes.get('/incidents',IncidentsController.index)
routes.delete('/incidents/:id',IncidentsController.delete)





module.exports = routes;
/**
 * Rota / Recurso
 * 
 */

 /**
  * Métodos HTTP:
  * GET: Busca/listar uma informação do backend
  * POST: Cria uma informação no backend
  * PUT: Altera uma informação no backend
  * DELETE: deleta uma informação no backend
  */

  /**
   * Tipos de paramentros
   * Query Params: Paramentros nomeados enviados nas rota "?" (filtro,paginação)
   * Route Params: Parametros utilizados para indentifcar recursos
   * Request Body: Corpo da requisiçaõ, utilizado para criar ou alterar recursos
   */

   /**
    * SQL:Mysql, SQlite, PostgreSQL, Oracle,Microsoft SQL Server
    * noSql:MongoDB, CouchDB
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*')
     */




