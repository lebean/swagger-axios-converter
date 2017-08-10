# 用swagger.json生成axios api访问包

​	之前我让公司的开发团队做了前后端分离，前后端的调用协议通过swagger来设计，swagger可以导出后端可用的java代码，于是就想了，如果也能生成前端使用的axios代码就好（swagger原生支持许多客户端代码生成，但目前还没有axios的）。

​	到github上找了一上，发现一哥们写了个swagger-vue，可使用swagger生成基于axios的网络请求代码，于是乎，下了他的代码下来研究，这个哥们的东西写的不错，[地址在这儿](https://github.com/chenweiqun/swagger-vue) 。不过这哥们的东西下下来，还是要自己处理处理，为了方便有需要的朋友们能直接下载就可以用，我在他的东西上整理了一下，需要的哥哥们下载下来，把swagger.josn文件复制到目录下，运行几行命令就可以生成api请求代码了。

**项目文件目录如下：**

>swagger-axios-converter

>--lib
>
>----codgen.js
>
>----parse.js
>
>----template
>
>------api.hbs
>
>------method.hbs
>
>------methods.hbs
>
>--Gruntfile.js
>
>--index.js
>
>--package.json
>
>--package-lock.json
>
>--README.md
>

- 复制swagger.json到swagger-vue目录下

- 运行以下命令初始化项目

  ```
  npm init
  ```

- 安装grunt

  ```
  npm install grunt --save-dev
  ```

- 安装 swagger-vue

  ```
  npm install swagger-vue --save-dev
  ```

- 生成api.js文件

  ```
  grunt vue
  ```

> 到这里，你就可以在swagger-vue目录下发现多了一个vue-api-client.js文件，这个文件就是生成的axios客户端api请求代码哟！对于这个文件怎么使用什么的就不多说了，你了可以去看这里<https://github.com/chenweiqun/swagger-vue>

> [有需要的哥们来我的github下载源码吧，可以的话也给点个星星哇！](https://github.com/lebean/swagger-axios-converter)