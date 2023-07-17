const e=JSON.parse('{"key":"v-62c92783","path":"/node/node.html","title":"node","lang":"zh-CN","frontmatter":{"title":"node","date":"2023-07-02T10:44:22.000Z","order":1,"category":["前端","学习笔记","node"],"tag":["node","JavaScript"],"description":"node node 的概念 node 并不是一门语言，运行时可以让 js 运行到服务端（底层用的是 v8 引擎构建的） node 的特点 非阻塞 i/o（异步的非阻塞） 事件驱动（支持 js 语法，但不支持 bom 和 dom） 具有内置模块（fs、path 等） node 中实现的 api 都是支持异步的，底层采用的是多线程模型 线程池 默认创建 10 个线程 多线程：可以同时执行多个任务，给每个请求分配一个线程，优点是可以并行，缺点是浪费资源。适合 cpu 密集型（压缩、加密） 单线程：只有一个，节约内存。不适合 cpu 密集型，适合 i/o 密集型。缺点是容易阻塞 事件驱动：按照事件的顺序来触发处理逻辑（事件环），读写操作完成后会放到对应的队列中，等待事件环来触发对应的事件","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/node/node.html"}],["meta",{"property":"og:site_name","content":"tang’blog"}],["meta",{"property":"og:title","content":"node"}],["meta",{"property":"og:description","content":"node node 的概念 node 并不是一门语言，运行时可以让 js 运行到服务端（底层用的是 v8 引擎构建的） node 的特点 非阻塞 i/o（异步的非阻塞） 事件驱动（支持 js 语法，但不支持 bom 和 dom） 具有内置模块（fs、path 等） node 中实现的 api 都是支持异步的，底层采用的是多线程模型 线程池 默认创建 10 个线程 多线程：可以同时执行多个任务，给每个请求分配一个线程，优点是可以并行，缺点是浪费资源。适合 cpu 密集型（压缩、加密） 单线程：只有一个，节约内存。不适合 cpu 密集型，适合 i/o 密集型。缺点是容易阻塞 事件驱动：按照事件的顺序来触发处理逻辑（事件环），读写操作完成后会放到对应的队列中，等待事件环来触发对应的事件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-12T04:55:46.000Z"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-07-02T10:44:22.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-12T04:55:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"node\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-02T10:44:22.000Z\\",\\"dateModified\\":\\"2023-07-12T04:55:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"node 的概念","slug":"node-的概念","link":"#node-的概念","children":[]},{"level":2,"title":"node 的特点","slug":"node-的特点","link":"#node-的特点","children":[{"level":3,"title":"线程池","slug":"线程池","link":"#线程池","children":[]},{"level":3,"title":"node 用处","slug":"node-用处","link":"#node-用处","children":[]},{"level":3,"title":"模块化","slug":"模块化","link":"#模块化","children":[]}]},{"level":2,"title":"包管理工具","slug":"包管理工具","link":"#包管理工具","children":[{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"依赖类型","slug":"依赖类型","link":"#依赖类型","children":[]},{"level":3,"title":"版本管理","slug":"版本管理","link":"#版本管理","children":[]}]},{"level":2,"title":"node 事件环","slug":"node-事件环","link":"#node-事件环","children":[]},{"level":2,"title":"node 和浏览器的差异","slug":"node-和浏览器的差异","link":"#node-和浏览器的差异","children":[]},{"level":2,"title":"node 基础使用","slug":"node-基础使用","link":"#node-基础使用","children":[{"level":3,"title":"读取文件","slug":"读取文件","link":"#读取文件","children":[]}]}],"git":{"createdTime":1689137746000,"updatedTime":1689137746000,"contributors":[{"name":"2290774107@qq.com","email":"2290774104@qq.com","commits":1}]},"readingTime":{"minutes":3.66,"words":1098},"filePathRelative":"node/node.md","localizedDate":"2023年7月2日","excerpt":"<h1> node</h1>\\n<h2> node 的概念</h2>\\n<p>node 并不是一门语言，运行时可以让 js 运行到服务端（底层用的是 v8 引擎构建的）</p>\\n<h2> node 的特点</h2>\\n<ol>\\n<li>非阻塞 i/o（异步的非阻塞）</li>\\n<li>事件驱动（支持 js 语法，但不支持 bom 和 dom）</li>\\n<li>具有内置模块（fs、path 等）</li>\\n</ol>\\n<p>node 中实现的 api 都是支持异步的，底层采用的是多线程模型</p>\\n<h3> 线程池</h3>\\n<p>默认创建 10 个线程</p>\\n<ol>\\n<li>多线程：可以同时执行多个任务，给每个请求分配一个线程，优点是可以并行，缺点是浪费资源。适合 cpu 密集型（压缩、加密）</li>\\n<li>单线程：只有一个，节约内存。不适合 cpu 密集型，适合 i/o 密集型。缺点是容易阻塞</li>\\n<li>事件驱动：按照事件的顺序来触发处理逻辑（事件环），读写操作完成后会放到对应的队列中，等待事件环来触发对应的事件</li>\\n</ol>","autoDesc":true}');export{e as data};