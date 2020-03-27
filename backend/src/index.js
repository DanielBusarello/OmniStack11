const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);  //app.listen(port) vai escutar uma porta do localhost no navegador

/**
 * Rota / Recurso
 * localhost:3333 = Rota
 * localhost:3333/users = Recurso
 */

 /**
  * Métodos HTTP
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação). (request.query para utilizar o Query)
   * Route Params: Parâmetros utilizdos para identificar recursos. (request.params para utilizar o Route)
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. (request.body para utilizar o Request Body)
   */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: (SELECT * FROM users)
    * Query Builder: table('users').select('*').where()
    */



