import layoutHeaderAside from '@/layout/header-aside'
import getChildren from '@/router/children'

const meta = { auth: true }

export default {
  path: '/demo',
  name: 'demo',
  meta,
  redirect: { name: 'page1' },
  component: layoutHeaderAside,
  children: getChildren(require.context(`./`, false, /\.js$/))
}
