import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('@/views/home/Home')
const Cart = () =>
    import ('@/views/cart/Cart')
const Profile = () =>
    import ('@/views/profile/Profile')
const Category = () =>
    import ('@/views/category/Category')
const Details = () =>
    import ('@/views/details/details')
const Register = () =>
    import ('@/views/profile/register')
const Listpage = () =>
    import ('@/views/category/Listpage')
const My = () =>
    import ('@/views/profile/my')

// 1.安装插件 
Vue.use(Router)

// 3.抽离 routes (个人习惯)
const routes = [{
            path: '',
            redirect: '/home',
        }, {
            path: '/home',
            component: Home,
            meta: { index: 1 }, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
        }, {
            path: '/cart',
            component: Cart,
        }, {
            path: '/profile',
            component: Profile,
        }, {
            path: '/category',
            component: Category,
            meta: { index: 2 },
        }, {
            //动态路由携带id
            name: 'details',
            path: '/details/:id',
            component: Details,
        },
        {
            name: "Listpage",
            path: '/Listpage/:id',
            component: Listpage
        },
        {
            path: '/register',
            component: Register
        }, {
            path: '/My',
            component: My
        }
    ]
    // 2.创建路由对象并且导出路由
export default new Router({
    routes,
    mode: 'history'
})