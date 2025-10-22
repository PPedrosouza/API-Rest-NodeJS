import { config } from './src/database.js'

export default config

// para verificar o central do knex e suas configurações:
// npm run knex -- help ou npm run knex help

// para criar uma migration:
// npm run knex -- migrate:make nome-da-migration

// para rodar as migrations pendentes:
// npm run knex -- migrate:latest

// para desfazer a migration mais recente:
// npm run knex -- migrate:rollback
