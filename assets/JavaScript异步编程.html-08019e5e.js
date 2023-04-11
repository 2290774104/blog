const e=JSON.parse('{"key":"v-a3d51a78","path":"/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E5%9F%BA%E7%A1%80/JavaScript%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B.html","title":"JavaScript异步编程","lang":"zh-CN","frontmatter":{"title":"JavaScript异步编程","date":"2022-01-22T10:21:24.000Z","order":1,"category":["前端","学习笔记"],"tag":["JavaScript","es6"],"description":"JavaScript 异步编程 JavaScript 事件循环模型 1. JavaScript 运行机制 介绍 JavaScript 是单线程语言（默认情况下，同一时间节点只能做一件事），造成一定局限性，如果按照单线程同步的方式运行，一旦有 HTTP 请求向服务器发送，就会出现等待数据返回之前网页假死的效果出现，但实际开发中，并没有遇见这种情况。 同步和异步 基于以上描述，因此在 JavaScript 中存在一种解决方案，用来处理单线程造成的诟病，这就是同步【阻塞】和异步【非阻塞】执行模式的出现。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E5%9F%BA%E7%A1%80/JavaScript%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"tang’blog"}],["meta",{"property":"og:title","content":"JavaScript异步编程"}],["meta",{"property":"og:description","content":"JavaScript 异步编程 JavaScript 事件循环模型 1. JavaScript 运行机制 介绍 JavaScript 是单线程语言（默认情况下，同一时间节点只能做一件事），造成一定局限性，如果按照单线程同步的方式运行，一旦有 HTTP 请求向服务器发送，就会出现等待数据返回之前网页假死的效果出现，但实际开发中，并没有遇见这种情况。 同步和异步 基于以上描述，因此在 JavaScript 中存在一种解决方案，用来处理单线程造成的诟病，这就是同步【阻塞】和异步【非阻塞】执行模式的出现。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-11T13:14:16.000Z"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"es6"}],["meta",{"property":"article:published_time","content":"2022-01-22T10:21:24.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-11T13:14:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript异步编程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-22T10:21:24.000Z\\",\\"dateModified\\":\\"2023-04-11T13:14:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"JavaScript 事件循环模型","slug":"javascript-事件循环模型","link":"#javascript-事件循环模型","children":[{"level":3,"title":"1. JavaScript 运行机制","slug":"_1-javascript-运行机制","link":"#_1-javascript-运行机制","children":[]},{"level":3,"title":"2. 阻塞式代码与非阻塞式代码","slug":"_2-阻塞式代码与非阻塞式代码","link":"#_2-阻塞式代码与非阻塞式代码","children":[]},{"level":3,"title":"3. JavaScript 线程模型","slug":"_3-javascript-线程模型","link":"#_3-javascript-线程模型","children":[]},{"level":3,"title":"4. 线程执行栈","slug":"_4-线程执行栈","link":"#_4-线程执行栈","children":[]},{"level":3,"title":"5. 递归深度问题","slug":"_5-递归深度问题","link":"#_5-递归深度问题","children":[]},{"level":3,"title":"6. 宏任务和微任务","slug":"_6-宏任务和微任务","link":"#_6-宏任务和微任务","children":[]},{"level":3,"title":"7. 面试","slug":"_7-面试","link":"#_7-面试","children":[]}]},{"level":2,"title":"Promise 演进史","slug":"promise-演进史","link":"#promise-演进史","children":[{"level":3,"title":"1. 回调地狱","slug":"_1-回调地狱","link":"#_1-回调地狱","children":[]},{"level":3,"title":"2. 为什么使用 Promise","slug":"_2-为什么使用-promise","link":"#_2-为什么使用-promise","children":[]},{"level":3,"title":"3. 使用 Promise 解决异步代码","slug":"_3-使用-promise-解决异步代码","link":"#_3-使用-promise-解决异步代码","children":[]},{"level":3,"title":"4. Promise 内部结构","slug":"_4-promise-内部结构","link":"#_4-promise-内部结构","children":[]},{"level":3,"title":"5. Promise 链式调用","slug":"_5-promise-链式调用","link":"#_5-promise-链式调用","children":[]},{"level":3,"title":"6. Promise API","slug":"_6-promise-api","link":"#_6-promise-api","children":[]},{"level":3,"title":"7. Generator 函数","slug":"_7-generator-函数","link":"#_7-generator-函数","children":[]},{"level":3,"title":"8. Generator 规避繁琐链式调用","slug":"_8-generator-规避繁琐链式调用","link":"#_8-generator-规避繁琐链式调用","children":[]},{"level":3,"title":"9. Async/Await","slug":"_9-async-await","link":"#_9-async-await","children":[]}]},{"level":2,"title":"从 0 开始实现 Promise 对象","slug":"从-0-开始实现-promise-对象","link":"#从-0-开始实现-promise-对象","children":[{"level":3,"title":"1. 分析 Promise 对象要点","slug":"_1-分析-promise-对象要点","link":"#_1-分析-promise-对象要点","children":[]},{"level":3,"title":"2. 实现基本 then 函数执行","slug":"_2-实现基本-then-函数执行","link":"#_2-实现基本-then-函数执行","children":[]},{"level":3,"title":"3. 实现 then 函数链式调用","slug":"_3-实现-then-函数链式调用","link":"#_3-实现-then-函数链式调用","children":[]},{"level":3,"title":"4. 实现 catch 函数功能","slug":"_4-实现-catch-函数功能","link":"#_4-实现-catch-函数功能","children":[]},{"level":3,"title":"5. 实现跨对象 catch 捕捉流程","slug":"_5-实现跨对象-catch-捕捉流程","link":"#_5-实现跨对象-catch-捕捉流程","children":[]},{"level":3,"title":"6. 实现 then 函数链式调用中断","slug":"_6-实现-then-函数链式调用中断","link":"#_6-实现-then-函数链式调用中断","children":[]},{"level":3,"title":"7. Generator 同步化 Promise","slug":"_7-generator-同步化-promise","link":"#_7-generator-同步化-promise","children":[]}]}],"git":{"createdTime":1681034173000,"updatedTime":1681218856000,"contributors":[{"name":"2290774107@qq.com","email":"2290774104@qq.com","commits":3},{"name":"唐皓晨","email":"2290774104@qq.com","commits":1}]},"readingTime":{"minutes":35.89,"words":10766},"filePathRelative":"学习笔记/基础/JavaScript异步编程.md","localizedDate":"2022年1月22日","excerpt":"<h1> JavaScript 异步编程</h1>\\n<h2> JavaScript 事件循环模型</h2>\\n<h3> 1. JavaScript 运行机制</h3>\\n<h4> 介绍</h4>\\n<p>JavaScript 是单线程语言（默认情况下，同一时间节点只能做一件事），造成一定局限性，如果按照单线程同步的方式运行，一旦有 HTTP 请求向服务器发送，就会出现等待数据返回之前网页假死的效果出现，但实际开发中，并没有遇见这种情况。</p>\\n<h4> 同步和异步</h4>\\n<p>基于以上描述，因此在 JavaScript 中存在一种解决方案，用来处理单线程造成的诟病，这就是同步【阻塞】和异步【非阻塞】执行模式的出现。</p>","autoDesc":true}');export{e as data};
