import http from "@/util/http";

//查询所有板块列表
export function queryAllCatalogList(params){
    return http.get('/catalog/',params);
}

export default {queryAllCatalogList};