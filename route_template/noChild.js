export default {
  path: '<%= pageRoute %>',
  name: '<%= pageName %>',
  component: () => import('<%= pageSrc %>'),
  title: '<%= pageTitle %>'
}