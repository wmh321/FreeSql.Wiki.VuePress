"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[3139],{9841:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-786147a6",path:"/guide/custom-attribute.html",title:"自定义特性",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"优先级",slug:"优先级",children:[]}],filePathRelative:"guide/custom-attribute.md",git:{updatedTime:1637115507e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]}}},4233:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="自定义特性" tabindex="-1"><a class="header-anchor" href="#自定义特性" aria-hidden="true">#</a> 自定义特性</h1><p>本功能可实现与其他 ORM 使用一套 Attribute，避免维护两份实体特性的烦恼：</p><blockquote><p>v1.4.0+ 已自动识别 EFCore 实体特性 Key/Required/NotMapped/MaxLength/StringLength/DatabaseGenerated/Table/Column</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>ConfigEntity <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token class-name"><span class="token keyword">var</span></span> attr <span class="token operator">=</span> e<span class="token punctuation">.</span>EntityType<span class="token punctuation">.</span><span class="token function">GetCustomAttributes</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">MyTableAttribute</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">MyTableAttribute</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>attr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n    e<span class="token punctuation">.</span>ModifyResult<span class="token punctuation">.</span>Name <span class="token operator">=</span> attr<span class="token punctuation">.</span>Name<span class="token punctuation">;</span> <span class="token comment">//表名</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nfsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>ConfigEntityProperty <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token class-name"><span class="token keyword">var</span></span> attr <span class="token operator">=</span> e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span><span class="token function">GetCustomAttributes</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">MyColumnAttribute</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">MyColumnAttribute</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>attr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n    e<span class="token punctuation">.</span>ModifyResult<span class="token punctuation">.</span>Name <span class="token operator">=</span> attr<span class="token punctuation">.</span>Name<span class="token punctuation">;</span> <span class="token comment">//字段名</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">MyTable</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">YourEntity</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">MyColumn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> pkid <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyTableAttribute</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Attribute</span></span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token function">MyTableAttribute</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>Name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">MyColumnAttribute</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Attribute</span></span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token function">MyColumnAttribute</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>Name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2><p>数据库特性 &gt; 实体特性 &gt; FluentApi（配置特性） &gt; AOP（配置特性）</p>',6),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);