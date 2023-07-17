const e=JSON.parse('{"key":"v-3d232c5c","path":"/node/Promise.html","title":"Promise","lang":"zh-CN","frontmatter":{"title":"Promise","date":"2023-06-19T10:53:22.000Z","order":1,"category":["前端","学习笔记","node"],"tag":["node","JavaScript"],"description":"Promise Promise 是一种用于异步编程的 JavaScript 对象，主要用于处理异步操作的结果 Promise 导致的问题 回调地狱（代码难以阅读） 错误处理（无法统一处理错误） 多个异步操作（“同步结果”困难） Promise 可以使用.then()方法链式处理异步逻辑 Promise 可以使用.catch()方法处理异步操作失败 Promise 提供.all()、.race()方法支持处理多个 Promise 对象逻辑","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/node/Promise.html"}],["meta",{"property":"og:site_name","content":"tang’blog"}],["meta",{"property":"og:title","content":"Promise"}],["meta",{"property":"og:description","content":"Promise Promise 是一种用于异步编程的 JavaScript 对象，主要用于处理异步操作的结果 Promise 导致的问题 回调地狱（代码难以阅读） 错误处理（无法统一处理错误） 多个异步操作（“同步结果”困难） Promise 可以使用.then()方法链式处理异步逻辑 Promise 可以使用.catch()方法处理异步操作失败 Promise 提供.all()、.race()方法支持处理多个 Promise 对象逻辑"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-02T02:36:17.000Z"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-06-19T10:53:22.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-02T02:36:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Promise\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-19T10:53:22.000Z\\",\\"dateModified\\":\\"2023-07-02T02:36:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Promise 的链式调用","slug":"promise-的链式调用","link":"#promise-的链式调用","children":[{"level":3,"title":"Promise 调用形式","slug":"promise-调用形式","link":"#promise-调用形式","children":[]},{"level":3,"title":"中断链式","slug":"中断链式","link":"#中断链式","children":[]}]},{"level":2,"title":"Promise 的方法","slug":"promise-的方法","link":"#promise-的方法","children":[{"level":3,"title":"Promise.resolve()","slug":"promise-resolve","link":"#promise-resolve","children":[]},{"level":3,"title":"Promise.reject()","slug":"promise-reject","link":"#promise-reject","children":[]},{"level":3,"title":"Promise.all()","slug":"promise-all","link":"#promise-all","children":[]},{"level":3,"title":"Promise.race()","slug":"promise-race","link":"#promise-race","children":[]},{"level":3,"title":"Promise.prototype.finally()","slug":"promise-prototype-finally","link":"#promise-prototype-finally","children":[]}]},{"level":2,"title":"Generator","slug":"generator","link":"#generator","children":[]},{"level":2,"title":"async/await","slug":"async-await","link":"#async-await","children":[]},{"level":2,"title":"事件环","slug":"事件环","link":"#事件环","children":[{"level":3,"title":"进程","slug":"进程","link":"#进程","children":[]},{"level":3,"title":"EventLoop","slug":"eventloop","link":"#eventloop","children":[]}]}],"git":{"createdTime":1688265377000,"updatedTime":1688265377000,"contributors":[{"name":"2290774107@qq.com","email":"2290774104@qq.com","commits":1}]},"readingTime":{"minutes":30.19,"words":9058},"filePathRelative":"node/Promise.md","localizedDate":"2023年6月19日","excerpt":"<h1> Promise</h1>\\n<p>Promise 是一种用于异步编程的 JavaScript 对象，主要用于处理异步操作的结果</p>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">Promise 导致的问题</p>\\n<ul>\\n<li>回调地狱（代码难以阅读）</li>\\n<li>错误处理（无法统一处理错误）</li>\\n<li>多个异步操作（“同步结果”困难）</li>\\n</ul>\\n</div>\\n<ul>\\n<li>Promise 可以使用.then()方法链式处理异步逻辑</li>\\n<li>Promise 可以使用.catch()方法处理异步操作失败</li>\\n<li>Promise 提供.all()、.race()方法支持处理多个 Promise 对象逻辑</li>\\n</ul>","autoDesc":true}');export{e as data};