const router = require('koa-router')()
const path = require('path')
const fs = require('fs')

class AutoRouter {
  constructor(options, app) {
    this.options = options
    this.app = app
  }
  auto() {
    let files = fs.readdirSync(path.join(__dirname, '../server/controllers'))
    let jsFiles = files.filter((f) => {
      return f.endsWith('.js')
    }, files)
    for (let item of jsFiles) {
      const name = item.substring(0, item.length - 3)
      const selfRouter = require('../server/controllers/' + item)
      router.use('/' + name, selfRouter.routes(), selfRouter.allowedMethods())
      this.app.use(selfRouter.routes(), selfRouter.allowedMethods())
    }
  }
}

module.exports = AutoRouter
