import http from "@/util/http";

//章节模块

//根据课程编号查询课程章节菜单的接口
export function queryChapterMenuByCid(params){
    return http.lget('/chapter/',params,'处理中，请稍后...');
}

export default {queryChapterMenuByCid};
