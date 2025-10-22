import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

/**
 * plugin do fastify: são funções adicionais que podem fornecer recursos ao framework.
 * Os plugins podem ser usados para adicionar funcionalidades como autenticação, log,
 * validação de dados, gerenciamento de erros, entre outras.
 */

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: '/transactions',
})
