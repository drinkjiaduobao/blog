import axios from "axios";

const service = axios.create({
    //baseURL会自动加在接口地址上
    baseURL:"http://localhost:8091/myproject/",
    // baseURL:"http://43.143.117.31:8091/myproject/",
    // baseURL:"/",
    timeout:5000,//指定请求的超时毫秒数，如果请求超过这个时间，请求自定中断
    headers:{
        'Content-Type':'application/json; charset=utf-8',
        'Access-Control-Allow-Origin':'*'
    }
})

//添加请求拦截器
service.interceptors.request.use(function(config){
    //在请求之前做些什么
    return config
},function(error){
    //对请求错误做些什么
    return Promise.reject(error)
})

//添加响应拦截器
service.interceptors.response.use(function(response){
    //对响应数据做些什么
    return response
},function(error){
    //对响应错误做些什么
    return Promise.reject(error)
})

//封装完成后导出
export default service