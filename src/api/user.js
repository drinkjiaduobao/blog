//用户模块的所有接口都定义在这里
// import service from '@/util/service';
import http from "@/util/http";

//登录接口
export function login(params){
    return http.get('/users/auth',params);
}
//注册接口
export function reg(params){
    return http.post('/users/',params);
}
//检查是否已经注册
export function checkIsReg(params){
    return http.get('/users/check/',params);
}

//检查是否已经登录的接口
export function isLogin(params){
    return http.get('/users/isLogin')
}

//执行用户注销的接口
export function logout(params){
    return http.get('/users/logout');
}

//修改用户信息
export function update(params){
    return http.put('/users/',params);
}

//刷新用户资料
export function refresh(params){
    return http.get('/users/query',params);
}



