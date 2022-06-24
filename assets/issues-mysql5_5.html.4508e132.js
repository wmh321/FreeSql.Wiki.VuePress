import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{d as n}from"./app.48fb4a12.js";const a={},p=n(`<h1 id="mysql-5-5-\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#mysql-5-5-\u517C\u5BB9\u6027" aria-hidden="true">#</a> Mysql 5.5 \u517C\u5BB9\u6027</h1><h2 id="mysql-5-5-\u4E0D\u652F\u6301-datetime-3-\u5BFC\u81F4-codefirst-\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#mysql-5-5-\u4E0D\u652F\u6301-datetime-3-\u5BFC\u81F4-codefirst-\u62A5\u9519" aria-hidden="true">#</a> Mysql 5.5 \u4E0D\u652F\u6301 datetime(3)\uFF0C\u5BFC\u81F4 codefirst \u62A5\u9519</h2><p>\u4E8C\u79CD\u89E3\u51B3\u529E\u6CD5\uFF1A</p><p>1\u3001[Column(DbType = &quot;DATETIME&quot;)]</p><p>2\u3001\u7EDF\u4E00\u5904\u7406\u7684\u8BDD\u5199\u4E2AAOP</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>ConfigEntityProperty <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span>PropertyType <span class="token operator">==</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">DateTime</span><span class="token punctuation">)</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span>PropertyType <span class="token operator">==</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">DateTime<span class="token punctuation">?</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
         e<span class="token punctuation">.</span>ModifyResult<span class="token punctuation">.</span>DbType <span class="token operator">=</span> <span class="token string">&quot;DATETIME&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,6);function t(e,o){return p}var l=s(a,[["render",t],["__file","issues-mysql5_5.html.vue"]]);export{l as default};
