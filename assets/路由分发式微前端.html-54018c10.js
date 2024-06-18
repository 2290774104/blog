import{_ as n,o as a,c as s,d as i}from"./app-ce950eb2.js";const e={},l=i(`<h1 id="路由分发式微前端" tabindex="-1"><a class="header-anchor" href="#路由分发式微前端" aria-hidden="true">#</a> 路由分发式微前端</h1><p>路由分发式微前端，即通过路由将不同的业务分发到不同的独立前端应用上。最常用的方案是通过 <code>HTTP 服务的反向代理</code> 来实现。</p><h2 id="配置-nginx" tabindex="-1"><a class="header-anchor" href="#配置-nginx" aria-hidden="true">#</a> 配置 nginx</h2><p>通过 nginx 代理多个服务地址，不同页面的请求就可以分发到不同的服务器上。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
  server <span class="token punctuation">{</span>
      listen <span class="token number">80</span><span class="token punctuation">;</span>
      server_name  xxx.xxx.com<span class="token punctuation">;</span>
      location /api/ <span class="token punctuation">{</span>
          proxy_pass http://localhost:3001/api<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      location /web/admin <span class="token punctuation">{</span>
          proxy_pass http://localhost:3002/api<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      location / <span class="token punctuation">{</span>
          proxy_pass /<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><ul><li>实现简单</li><li>不需要对现有应用进行改造</li><li>完全技术栈无关</li></ul><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2><ul><li>用户体验不好，每次切换应用时，浏览器都需要重新加载页面</li><li>多个子应用无法并存</li><li>局限性比较大</li><li>子应用之间的通信比较困难</li><li>子应用切换时需要重新登录</li></ul>`,9),t=[l];function c(d,o){return a(),s("div",null,t)}const u=n(e,[["render",c],["__file","路由分发式微前端.html.vue"]]);export{u as default};
