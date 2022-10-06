// 导入封装好的axios实例
// import service from './service'
import axios from 'axios' //引入 axios

//引入饿了么UI组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 创建 axios 实例
const http = axios.create({
    baseURL:"http://localhost:8091/myproject/",
    // baseURL:"http://43.143.117.31:8091/myproject/",
    timeout: 60000, // 请求超时时间
    headers:{
        'Content-Type':'application/json; charset=utf-8',
        'Access-Control-Allow-Origin':'*'
    }
})

//封装get请求
http.get = (url,params)=>{
    const config = {
        method: 'get',
        url: url
    }
    if (params) config.params = params
    return http(config)
}

//longGet ==>长请求。请求的时间可能会比较长。需要用户耐心等待。
http.lget = (url,params,loading)=>{
    let options = {
            lock: true,
            text: loading,
            spinner: "el-icon-loading",
            background: "rgba(255,255,255,0)",
            customClass: "loadingMask",
        },
        loader = ElementUI.Loading.service(options)
    const config = {
        method: 'get',
        url: url,
        timeout: 60000
    }
    if (params) config.params = params
    return http(config).then(resp=>{
        loader.close();
        return resp;
    })
}

//封装post请求
http.post = (url,params)=>{
    const config = {
        method: 'post',
        url: url
    }
    if (params) config.data = params
    return http(config)
}


//封装长post请求，需要用户耐心等待。
http.lpost = (url,params,loading)=>{
    let options = {
            lock: true,
            text: loading,
            spinner: "el-icon-loading",
            background: "rgba(255,255,255,0)",
            customClass: "loadingMask",
        },
        loader = ElementUI.Loading.service(options)
    const config = {
        method: 'post',
        url: url,
        timeout: 60000
    }
    if (params) config.params = params
    return http(config).then(resp=>{
        loader.close();
        return resp;
    })
}

//封装put请求
http.put = (url,params)=>{
    const config = {
        method: 'put',
        url: url
    }
    if (params) config.data = params
    return http(config)
}

//封装delete请求
http.delete = (url,params)=>{
    const config = {
        method: 'delete',
        url: url
    }
    if (params) config.data = params
    return http(config)
}
//导出
export default http
