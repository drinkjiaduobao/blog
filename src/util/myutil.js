export default {
    getQueryVariable:function(variable){
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=");
            if (pair[0] == variable) {
                return decodeURI(pair[1]); //对中文参数进行编码
            }
        }
        return (false);
    }
}