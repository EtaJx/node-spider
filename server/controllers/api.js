const Router = require('koa-router')
const router = new Router()
const Test = async (ctx, next) => {
  console.log('wa')
  ctx.body = {
    title: 'hello vue ssr'
  }
}

router.get('/', Test)
module.exports = router