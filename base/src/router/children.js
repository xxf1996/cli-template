export default function getChildren () {
  const files = require.context('./', false, /\.js$/)
  const children = []
  const meta = { auth: true }

  files.keys().forEach(key => {
    let name = key.replace(/(\.\/|\.js)/g, '')
    if (name !== 'index') {
      let config = files(name).default
      children.push({
        path: config.path,
        name: config.name,
        component: () => import(config.componentSrc),
        meta: {
          ...meta,
          title: config.title
        }
      })
    }
  })

  return children
}
