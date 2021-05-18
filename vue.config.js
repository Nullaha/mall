module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',
            }
        }
    },
    devServer:{
        port:8081,
    },
    lintOnSave:false, //避免Eslint报错
}