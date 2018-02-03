# pc/mb适配静态页面
1、pc端未使用vue，手动配置webpack进行打包（主要遇到的坑是背景图片问题，在分离css文件的插件ExtractTextPlugin.extract({publicPath:'../'})）解决问题
2、mb端使用的vue进行开发
3、进入各自文件夹之后npm run dev打开项目
