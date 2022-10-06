//保存用户名和密码到cookie
function setCookie(username, password, exdays) {
    var exdate = new Date() // 获取时间
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) // 保存的天数
    // 字符串拼接cookie
    // eslint-disable-next-line camelcase
    window.document.cookie = 'userName.myproject.com' + '=' + username + ';path=/;expires=' + exdate.toGMTString()
    // eslint-disable-next-line camelcase
    window.document.cookie = 'userPwd.myproject.com' + '=' + password + ';path=/;expires=' + exdate.toGMTString()
}
//从cookie中获取用户名和密码
function getCookie(loginUser) {
    if (document.cookie.length > 0) {
        var arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=') // 再次切割
            // 判断查找相对应的值
            if (arr2[0] === 'userName.myproject.com') {
                loginUser.identify = arr2[1] // 保存到保存数据的地方
            } else if (arr2[0] === 'userPwd.myproject.com') {
                loginUser.password = arr2[1]
            }
        }
    }
}
//从cookie中清除用户名和密码
function clearCookie() {
    setCookie('', '', -1) // 修改2值都为空，天数为负1天就好了
}

module.exports = {
    setCookie,
    getCookie,
    clearCookie
}