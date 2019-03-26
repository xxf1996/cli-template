import layoutHeaderAside from '@/layout/header-aside'
import getChildren from '@/router/children'

const meta = { auth: true }

export default {
  path: '<%= pageRoute %>',
  name: '<%= pageName %>',
  meta,
  redirect: { name: 'index' },
  component: layoutHeaderAside,
  children: getChildren(require.context(`./`, false, /\.js$/))
}