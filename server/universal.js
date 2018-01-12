const path = require('path')
const fs = require('fs')

const React = require('react')
const {Provider} = require('react-redux')
const {renderToString} = require('react-dom/server')
const {StaticRouter} = require('react-router-dom')
import Helm from 'react-helmet';

const {default: configureStore} = require('../src/store')
const {default: App} = require('../src/containers/App')

module.exports = function universalLoader(req, res) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

  const helmetMeta = Helm.rewind();

  fs.readFile(filePath, 'utf8', (err, htmlData)=>{
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }
    const context = {}
    const store = configureStore()
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App/>
        </StaticRouter>
      </Provider>
    )

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      res.redirect(301, context.url)
    } else {
      // we're good, send the response
      const head = helmetMeta.meta.toString() + helmetMeta.script.toString() + helmetMeta.title.toString() + helmetMeta.noscript.toString();
      htmlData = htmlData.replace('{{Head}}', head)
      const RenderedApp = htmlData.replace('{{SSR}}', markup)
      console.log("RenderedApp", RenderedApp);
      res.send(RenderedApp)
    }
  })
}
