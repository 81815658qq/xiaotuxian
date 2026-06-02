基础 vue3 :5-vant-ui 全局和局部的使用\_哔哩哔哩\_bilibili

下载这个也行 ：

# 通过 git 从 gitee 克隆下载 git clone -b vite-ts https://gitee.com/dcloud/uni-preset-vue.git

    1. pnpm approve-builds  选两个
    ? Choose which packages to build (Press <space> to select, <a> to toggle all, <i> to invert selection) ... ❯ ○ core-js
    ○ esbuild

2.  pnpm dev:mp-weixin

    ### 鲜儿 day1-04 wx -> uni

    文件目录：E:\code_uni_app\uni-app-vue3-ts heima-shop

    ### day1-05 :

    方式 效果
    git clone 把整个仓库克隆下来，包含完整提交历史（.git 目录），体积大
    degit 只下载最新版本的文件快照，不包含 .git，干净利落

    好的，以下是上一课内容的 Markdown 原文，方便你直接复制：

        ○ type (类型)：必填，除了 feat，常见的还有：
            § fix：修复 bug。
            § docs：只修改了文档（如 README、注释）。
            § style：调整代码格式（不影响逻辑，如空格、分号）。
            § refactor：代码重构（既不是新增功能，也不是修复 bug）。
            § perf：提升性能的代码更改。
            § test：增加或修改测试代码。
            § chore：构建过程或辅助工具的变动。
        ○ scope (范围，可选)：用于说明本次改动的影响范围（如 feat(login): ... 表示登录模块的新功能）。
        ○ subject (描述)：对本次改动的简短描述。

    ***

    **核心主旨**

    本课讲解了不依赖 HBuilderX 工具，纯通过命令行方式创建、编译和运行 uni-app（Vue3 + TypeScript）项目的完整流程。

    **关键要点**

    - **命令行创建项目**：使用 `npx degit dcloudio/uni-preset-vue#vite-ts 项目名` 从 GitHub 直接拉取 uni-app 的 Vue3+TS 模板，无需安装 HBuilderX，且 `degit` 只下载最新代码快照，不带 `.git` 历史，比 `git clone` 更轻量
    - **配置小程序 AppID**：创建项目后需在 `src/manifest.json` 中填入微信小程序的 AppID，否则无法在微信开发者工具中正常导入
    - **安装依赖与编译**：通过 `pnpm install` 安装编译器等依赖包，再执行 `pnpm dev:mp-weixin` 将 Vue 代码编译成微信小程序可识别的代码，输出到 `dist/dev/mp-weixin` 目录 这我编译会失败，打开限制： pnpm approve-builds
    - **导入微信开发者工具**：必须精确选择 `dist/dev/mp-weixin` 文件夹导入微信开发者工具，不能选其他层级目录，否则无法识别项目
    - **dev 与 build 命令区分**：`dev` 开头的命令适合开发阶段使用（热更新、监听文件变化），`build` 开头的命令适合上线阶段（代码压缩、体积更小但不监听变化）

    **结论/建议**

    命令行方式相比 HBuilderX 可视化创建更加灵活，不绑定特定工具，开发者可以自由选择自己喜欢的编辑器（如 VS Code）进行开发。完整操作链路为：`npx degit` 拉取模板 → 配置 AppID → `pnpm install` 装依赖 → `pnpm dev:mp-weixin` 编译 → 微信开发者工具导入 `dist/dev/mp-weixin` 预览。

    ### day1-06 :

    还要装一个 Vue - Official 这个插件才可以工作

    ### day1-07 : 小程序端的 pinia 持久化

    ​storage 对象：Pinia 持久化插件默认使用浏览器的 localStorage，但小程序环境没有 localStorage，所以需要手动指定用什么方式来存取数据。
    ​getItem(key)​：当 Pinia 需要从本地读取之前保存的状态时，会调用这个方法。这里使用 uni.getStorageSync(key)，这是 uni-app 提供的同步读取本地存储的 API，会从小程序本地缓存中获取对应 key 的数据。
    ​setItem(key, value)​：当 Pinia 状态发生变化需要保存到本地时，会调用这个方法。这里使用 uni.setStorageSync(key, value)，这是 uni-app 提供的同步写入本地缓存的 API，把状态数据以 key-value 的形式写入小程序本地。
    总结：这段代码的本质是告诉 Pinia —— "不要用默认的 localStorage，改用 uni-app 小程序的 uni.getStorageSync 和 uni.setStorageSync 来存取数据"，从而实现小程序端的 Pinia 状态持久化。

    ### day1-10 :

    拦截器是什么？​
    你可以把拦截器理解成请求发出去之前的"统一检查站"​。
    就像你坐飞机前要经过安检一样——不是你自己逐项检查行李，而是统一由安检口帮你检查。拦截器就是 uni-app 提供的一个"安检口"，所有 uni.request（普通请求）和 uni.uploadFile（上传文件）在真正发给服务器之前，都会先经过这里

    • 拼接完整地址

你平时写的是短路径 /home/banner，拦截器自动在前面加上服务器基地址，变成 https://xxx.com/home/banner。这样以后换服务器只需改一处。
• 设置超时时间
把默认的 60 秒改成 10 秒（10000 毫秒），防止用户网络不好时等太久。
• 添加来源标识
在请求头里加上 source-client: miniApp，告诉后端"我是小程序端来的"，方便后端做统计或返回不同数据。
• 自动携带 Token
从 Pinia 的 profile 里取出登录 token，加到请求头 Authorization 里。这样你不用每次手动写，没登录时也不会报错。

    ### day1-11 :

### day2-03 :

页面中 distributionSite=2 如何写调用？

1. 直接在 onLoad 或其他函数中调用
   这是最常用的方式，你只需要在调用 getHomeBannerAPI 时传入

   ```JavaScript
   // 在页面逻辑中
   onLoad(async () => {
   // 传入 2，明确告诉后端你要获取“分类页”的轮播图
   const res = await getHomeBannerAPI(2)
   console.log(res)
   })
   ```

2. 如果页面中有多个获取逻辑
   如果你的页面逻辑需要根据不同的条件（比如点击切换）来获取不同的轮播图，可以这样写：

```JavaScript
    // 示例：点击不同的按钮，传入不同的 site 编号
    const switchBanner = async (site) => {
    // site 会接收你传入的 1 或 2
    const res = await getHomeBannerAPI(site)
    // ... 处理返回的轮播图数据
    }

    // 调用时：
    switchBanner(2) // 切换到分类页

```

### day2-04 :

在 TS 中，类型名[] 就代表“该类型的数组”。所以 BannerItem[] 的含义就是：“一个由 BannerItem 对象组成的数组”。
BannerItem[] 数组（推荐） 多个轮播图组成的列表（你的场景）

#### 定义类型 -> 获取数据 -> 传递给子组件 -> 子组件遍历渲染

1.  定义轮播图数据类型 (Type Definition) 这个来自于接口文件。
    在 types/home.d.ts 文件中，通过 export type 定义 BannerItem 对象，明确了每一张图片包含哪些数据：

        id (字符串)

        imgUrl (图片链接)

        hrefUrl (跳转链接)

        type (跳转类型)

    这样写的好处是，后续代码中所有引用此类型的地方都会有智能代码提示。

2.  准备数据并传给组件 (Data Binding)
    在父组件（如首页 index.vue）中：

定义变量：使用 ref<BannerItem[]>([]) 创建一个空数组。注意这里的 BannerItem[] 表示这是一个数组，专门用来存放多个轮播图对象。

传递属性：通过 <XtxSwiper :list="bannerList" /> 将请求到的数据数组 bannerList 传递给子组件 XtxSwiper。

3. 组件内部渲染 (Component Rendering)
   在子组件 XtxSwiper.vue 中：

接收参数：使用 defineProps 声明接收 list，类型同样是 BannerItem[]。

循环渲染：在 <template> 中使用 v-for="item in list" 来遍历数组。

绑定属性：使用 :src="item.imgUrl" 将每一项的数据渲染到页面上。

4. 总结：数据流动的全过程

   父组件：

   准备数据：const bannerList = ref<BannerItem[]>([])

   寄出数据：<XtxSwiper :list="bannerList" />

   Vue 内部传输：Vue 自动将父组件的 bannerList 引用传递给子组件的 list 插槽。

   子组件：

   接收规范：const props = defineProps<{ list: BannerItem[] }>()

   使用数据：在模板中通过 list 直接遍历，或者通过 props.list 在 JS 中逻辑处理。
