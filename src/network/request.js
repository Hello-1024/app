import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://easy-mock.com/mock/5dbdd3dd1e7593458081af95/shopping/index',
        timeout: 5000
    })

    //请求拦截
    instance.interceptors.request.use(config => {
        return config;
    }, err => {
        // console.log(err)
    })
    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        // console.log(error)
    })


    return instance(config)
}
// import axios from 'axios'

// //方法1
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         //1.创建axios的实例
//         const instance = axios.create({
//             baseURL: 'https://easy-mock.com/mock/5dbdd3dd1e7593458081af95/shopping/index',
//             timeout: 5000
//         })

//         // 2.axios的拦截器
//         //请求拦截
//         // instance.interceptors.request.use(config => {
//         //     console.log(config)
//         //     return config
//         // }, err => {
//         //     console.log(err)
//         // })

//         //响应拦截
//         instance.interceptors.request.use(res => {
//                 console.log(res)
//                 return res
//             }, err => {
//                 console.log(err)
//             })
//             // 3.发送真正的网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }