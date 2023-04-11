import{aP as n,P as s,Q as a,aQ as t}from"./framework-6619071e.js";const e={},p=t(`<p>以引入 day.js 为例</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> day <span class="token keyword">from</span> <span class="token string">&#39;day.js&#39;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;$day&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> day <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">关于$前缀</p><p>主要是帮助区分Vuejs 的一些内部属性和方法.</p></div><p>在所有组件/实例中都可以通过 this.$day: 的方式访问 day.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$day</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","Vue优雅的引入第三方库.html.vue"]]);export{d as default};
