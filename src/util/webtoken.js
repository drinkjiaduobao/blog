export default {
    //生成一个webtoken
    generateWebToken: function () {
        const jwt = require("jsonwebtoken"); // 引入jwt
        const secret = "www.simoniu.com"; // 指定一个用于生成token的密钥字符串
        const token = jwt.sign({foo: new Date().toLocaleTimeString()}, secret, {
           expiresIn: 5, // 单独一个数字表示多少秒
        });
        return token;
    }
};