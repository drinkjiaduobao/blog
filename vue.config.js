const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  //webpack配置
  configureWebpack: {
    //忽略将这些加入打包
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        'element-ui': 'ELEMENT',
        axios: 'axios',
        lodash: '_'
    },
    devServer: {
           port: 8081,   // 端口号
        },
    // 
        resolve: {
          alias: {},
          fallback: {
              //其他的如果不启用可以用 keyname :false，例如：crypto:false,
              "crypto": require.resolve("crypto-browserify"),
              "stream": require.resolve("stream-browserify")
          },
      },
      plugins: [new NodePolyfillPlugin()]
},

transpileDependencies: true,

chainWebpack: (config) => {
    config.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.drop_console = true
        return args
    })
}
})

const cdn = {
  //douyin
  css: ["https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/element-ui/2.15.7/theme-chalk/index.min.css"],
  js: [
      "https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/2.6.11/vue.min.js",
      "https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue-router/3.5.2/vue-router.min.js",
      "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/vuex/3.6.2/vuex.min.js",
      "https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/axios/0.21.1/axios.min.js",
      "https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/element-ui/2.15.7/index.min.js",
      "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/lodash.js/4.17.21/lodash.min.js"
  ]
};




