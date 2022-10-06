import http from "@/util/http";

//博文或者文章模块

//查询所有板块的文章列表的接口
export function queryAllArticleList(params){
    return http.get("/article/",params);
}

//查询指定板块的文章列表的接口


//根据文章的编号查询文章详情的接口
export function queryArticleByAid(params){
    return http.lget('/article/details/',params,'加载中，请稍后')
}

//根据指定板块和分页号查询该分页文章列表的接口
export function queryArticlePagerByCatalog(params){
    return http.lget('/article/pager/',params,'加载中，请稍后');
}

//根据关键字进行模糊查询文章列表
export function searchArticlesWithKeyword(params){
    return http.lget('/article/search',params);
}

export default {queryArticlePagerByCatalog,queryAllArticleList,queryArticleByAid,searchArticlesWithKeyword};