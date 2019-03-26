/**
 * 将一级路由的子路由文件解析后返回符合vue-router的路由配置信息（即某一级路由的children属性信息）
 * @param {obejct} files require.context()解析后的模块信息
 */
export default function getChildren (files) {
  let list = []
  const meta = { auth: true }

  files.keys().forEach(key => {
    let name = key.replace(/(\.\/|\.js)/g, '')
    if (name !== 'index') {
      let config = files(key).default
      list.push({
        path: config.path,
        name: config.name,
        component: config.component, // 动态import不支持非字面量的路径，因此直接将解析后的动态import函数传进来
        meta: {
          ...meta,
          title: config.title
        }
      })
    }
  })

  return list
}
