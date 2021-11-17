"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[1656],{8991:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-7919c9a2",path:"/guide/delete.html",title:"删除",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"动态条件",slug:"动态条件",children:[]},{level:2,title:"删除条件",slug:"删除条件",children:[]},{level:2,title:"ISelect.ToDelete 高级删除",slug:"iselect-todelete-高级删除",children:[]},{level:2,title:"API",slug:"api",children:[]}],filePathRelative:"guide/delete.md",git:{updatedTime:1637115507e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]}}},4122:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h1><p>删除是一个非常危险的操作，<code>FreeSql</code>对删除支持并不强大，默认仅支持单表、且有条件的删除方法。</p><p>若<code>Where</code>条件为空的时候执行，仅返回0或默认值，不执行真正的SQL删除操作。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//自动同步实体结构到数据库</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="动态条件" tabindex="-1"><a class="header-anchor" href="#动态条件" aria-hidden="true">#</a> 动态条件</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> dywhere<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>dywhere 支持</p><ul><li>主键值</li><li>new[] { 主键值1, 主键值2 }</li><li>Topic对象</li><li>new[] { Topic对象1, Topic对象2 }</li><li>new { id = 1 }</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1 OR `Id` = 2)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1 OR `Id` = 2)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t4 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="删除条件" tabindex="-1"><a class="header-anchor" href="#删除条件" aria-hidden="true">#</a> 删除条件</h2><blockquote><p>出于安全考虑，没有条件不执行删除动作，避免误删除全表数据。删除全表数据：fsql.Delete&lt;T&gt;().Where(&quot;1=1&quot;).ExecuteAffrows()</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t5 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t6 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;id = ?id&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (id = ?id)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token string">&quot;newtitle&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> t7 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> items<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;newtitle</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> Clicks <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> t8 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` IN (1,2,3,4,5,6,7,8,9,10))</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="iselect-todelete-高级删除" tabindex="-1"><a class="header-anchor" href="#iselect-todelete-高级删除" aria-hidden="true">#</a> ISelect.ToDelete 高级删除</h2><p>IDelete 默认不支持导航对象，多表关联等。ISelect.ToDelete 可将查询转为 IDelete，以便使用导航对象删除数据，如下：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T1<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Options<span class="token punctuation">.</span>xxx <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>注意：此方法不是将数据查询到内存循环删除，上面的代码产生如下 SQL 执行：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token punctuation">`</span>T1<span class="token punctuation">`</span> <span class="token keyword">WHERE</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">select</span> a<span class="token punctuation">.</span>id <span class="token keyword">from</span> T1 a <span class="token keyword">left</span> <span class="token keyword">join</span> Options b <span class="token keyword">on</span> b<span class="token punctuation">.</span>t1id <span class="token operator">=</span> a<span class="token punctuation">.</span>id <span class="token keyword">where</span> b<span class="token punctuation">.</span>xxx <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>复杂删除使用此方法的好处：</p><ul><li>删除前可预览测试数据，防止错误删除操作；</li><li>支持复杂的删除操作，例如：ISelect 上使用 Limit(10) 删除附合条件的前 10 条记录；</li></ul><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>Where</td><td>&lt;this&gt;</td><td>Lambda</td><td>表达式条件，仅支持实体基础成员（不包含导航对象）</td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>string, parms</td><td>原生sql语法条件，Where(&quot;id = ?id&quot;, new { id = 1 })</td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>T1 | IEnumerable&lt;T1&gt;</td><td>传入实体或集合，将其主键作为条件</td></tr><tr><td>WhereExists</td><td>&lt;this&gt;</td><td>ISelect</td><td>子查询是否存在</td></tr><tr><td>CommandTimeout</td><td>&lt;this&gt;</td><td>int</td><td>命令超时设置(秒)</td></tr><tr><td>WithTransaction</td><td>&lt;this&gt;</td><td>DbTransaction</td><td>设置事务对象</td></tr><tr><td>WithConnection</td><td>&lt;this&gt;</td><td>DbConnection</td><td>设置连接对象</td></tr><tr><td>ToSql</td><td>string</td><td></td><td>返回即将执行的SQL语句</td></tr><tr><td>ExecuteAffrows</td><td>long</td><td></td><td>执行SQL语句，返回影响的行数</td></tr><tr><td>ExecuteDeleted</td><td>List&lt;T1&gt;</td><td></td><td>执行SQL语句，返回被删除的记录</td></tr></tbody></table>',21),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);