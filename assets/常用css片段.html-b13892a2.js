const n=JSON.parse('{"key":"v-35852b6b","path":"/%E5%89%8D%E7%AB%AF/css/%E5%B8%B8%E7%94%A8css%E7%89%87%E6%AE%B5.html","title":"常用css片段","lang":"zh-CN","frontmatter":{"title":"常用css片段","date":"2022-02-08T10:02:15.000Z","order":1,"category":["前端","css"],"tag":["css","scss"],"description":"常用css片段 1. 样式初始化 目的： 消除不同浏览器对html文本呈现的差异 清除标签默认样式 body { height: 100%; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif; } html { height: 100%; } #app { height: 100%; overflow: auto; &amp; &gt; .layout { height: 100%; } } * { margin: 0; padding: 0; } *, *:before, *:after { -moz-box-sizing: border-box; box-sizing: border-box; } a, a:focus, a:hover { color: inherit; outline: none; text-decoration: none; cursor: pointer; } div:focus { outline: none; } label { font-weight: 700; } ul, ol, li { list-style-type: none; }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/%E5%89%8D%E7%AB%AF/css/%E5%B8%B8%E7%94%A8css%E7%89%87%E6%AE%B5.html"}],["meta",{"property":"og:site_name","content":"tang’blog"}],["meta",{"property":"og:title","content":"常用css片段"}],["meta",{"property":"og:description","content":"常用css片段 1. 样式初始化 目的： 消除不同浏览器对html文本呈现的差异 清除标签默认样式 body { height: 100%; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif; } html { height: 100%; } #app { height: 100%; overflow: auto; &amp; &gt; .layout { height: 100%; } } * { margin: 0; padding: 0; } *, *:before, *:after { -moz-box-sizing: border-box; box-sizing: border-box; } a, a:focus, a:hover { color: inherit; outline: none; text-decoration: none; cursor: pointer; } div:focus { outline: none; } label { font-weight: 700; } ul, ol, li { list-style-type: none; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-22T12:47:08.000Z"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:tag","content":"scss"}],["meta",{"property":"article:published_time","content":"2022-02-08T10:02:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-22T12:47:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用css片段\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-08T10:02:15.000Z\\",\\"dateModified\\":\\"2023-02-22T12:47:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 样式初始化","slug":"_1-样式初始化","link":"#_1-样式初始化","children":[]},{"level":2,"title":"2. 通用css片段","slug":"_2-通用css片段","link":"#_2-通用css片段","children":[]}],"git":{"createdTime":1677070028000,"updatedTime":1677070028000,"contributors":[{"name":"唐皓晨","email":"2290774104@qq.com","commits":1}]},"readingTime":{"minutes":0.87,"words":260},"filePathRelative":"前端/css/常用css片段.md","localizedDate":"2022年2月8日","excerpt":"<h1> 常用css片段</h1>\\n<h2> 1. 样式初始化</h2>\\n<p>目的：</p>\\n<ol>\\n<li>消除不同浏览器对html文本呈现的差异</li>\\n<li>清除标签默认样式</li>\\n</ol>\\n<div class=\\"language-scss line-numbers-mode\\" data-ext=\\"scss\\"><pre class=\\"language-scss\\"><code><span class=\\"token selector\\">body </span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">height</span><span class=\\"token punctuation\\">:</span> 100%<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">-moz-osx-font-smoothing</span><span class=\\"token punctuation\\">:</span> grayscale<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">-webkit-font-smoothing</span><span class=\\"token punctuation\\">:</span> antialiased<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">font-family</span><span class=\\"token punctuation\\">:</span> -apple-system<span class=\\"token punctuation\\">,</span> BlinkMacSystemFont<span class=\\"token punctuation\\">,</span> Segoe UI<span class=\\"token punctuation\\">,</span> Helvetica Neue<span class=\\"token punctuation\\">,</span>\\n    Helvetica<span class=\\"token punctuation\\">,</span> PingFang SC<span class=\\"token punctuation\\">,</span> Hiragino Sans GB<span class=\\"token punctuation\\">,</span> Microsoft YaHei<span class=\\"token punctuation\\">,</span> Arial<span class=\\"token punctuation\\">,</span> sans-serif<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">html </span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">height</span><span class=\\"token punctuation\\">:</span> 100%<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">#app </span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">height</span><span class=\\"token punctuation\\">:</span> 100%<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">overflow</span><span class=\\"token punctuation\\">:</span> auto<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token selector\\"><span class=\\"token parent important\\">&amp;</span> &gt; .layout </span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">height</span><span class=\\"token punctuation\\">:</span> 100%<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">* </span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">margin</span><span class=\\"token punctuation\\">:</span> 0<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">padding</span><span class=\\"token punctuation\\">:</span> 0<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">*,\\n*:before,\\n*:after </span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">-moz-box-sizing</span><span class=\\"token punctuation\\">:</span> border-box<span class=\\"token punctuation\\">;</span>\\n       <span class=\\"token property\\">box-sizing</span><span class=\\"token punctuation\\">:</span> border-box<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">a,\\na:focus,\\na:hover </span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> inherit<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">outline</span><span class=\\"token punctuation\\">:</span> none<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">text-decoration</span><span class=\\"token punctuation\\">:</span> none<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">cursor</span><span class=\\"token punctuation\\">:</span> pointer<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">div:focus </span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">outline</span><span class=\\"token punctuation\\">:</span> none<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">label </span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">font-weight</span><span class=\\"token punctuation\\">:</span> 700<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">ul,\\nol,\\nli </span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">list-style-type</span><span class=\\"token punctuation\\">:</span> none<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
