import http from "@/util/http";
//课程模块

//查询所有板块课程列表的接口

//查询指定板块课程列表的接口
export function queryCourseListByCatalog(params){
    return http.lget('/course/catalog/',params,'处理中，请稍后...');
}

export default {queryCourseListByCatalog};





