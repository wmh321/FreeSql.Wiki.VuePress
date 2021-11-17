"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[273],{3619:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-275e2a2f",path:"/guide/unit-of-work.html",title:"UnitOfWork",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"如何使用",slug:"如何使用",children:[]},{level:2,title:"接口定义",slug:"接口定义",children:[]},{level:2,title:"实体变化事件",slug:"实体变化事件",children:[]}],filePathRelative:"guide/unit-of-work.md",git:{updatedTime:1637115507e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]}}},5295:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var p=a(6252);const t=(0,p.uE)('<h1 id="unitofwork" tabindex="-1"><a class="header-anchor" href="#unitofwork" aria-hidden="true">#</a> UnitOfWork</h1><p>UnitOfWork 可将多个仓储放在一个单元管理执行，最终通用 Commit 执行所有操作，内部采用了数据库事务；</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> connstr <span class="token operator">=</span> <span class="token string">&quot;Data Source=127.0.0.1;Port=3306;User ID=root;Password=root;&quot;</span> <span class="token operator">+</span> \n  <span class="token string">&quot;Initial Catalog=cccddd;Charset=utf8;SslMode=none;Max pool size=10&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connstr<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//自动同步实体结构到数据库</span>\n  <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> uow <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">CreateUnitOfWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token class-name"><span class="token keyword">var</span></span> songRepo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  songRepo<span class="token punctuation">.</span>UnitOfWork <span class="token operator">=</span> uow<span class="token punctuation">;</span>\n  <span class="token class-name"><span class="token keyword">var</span></span> userRepo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  userRepo<span class="token punctuation">.</span>UnitOfWork <span class="token operator">=</span> uow<span class="token punctuation">;</span>\n\n  songRepo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  userRepo<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  uow<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',5),e=(0,p.Uk)("参考："),o={href:"https://github.com/dotnetcore/FreeSql/issues/289",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("在 asp.net core 中使用 TransactionalAttribute + UnitOfWorkManager 实现多种事务传播"),l=(0,p.uE)('<h2 id="接口定义" tabindex="-1"><a class="header-anchor" href="#接口定义" aria-hidden="true">#</a> 接口定义</h2><p>uow.GetOrBeginTransaction() 方法可获取事务对象。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IUnitOfWork</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDisposable</span></span> <span class="token punctuation">{</span>\n\n  <span class="token return-type class-name">DbTransaction</span> <span class="token function">GetOrBeginTransaction</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">bool</span></span> isCreate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token return-type class-name">IsolationLevel<span class="token punctuation">?</span></span> IsolationLevel <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// 是否启用工作单元</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token return-type class-name"><span class="token keyword">bool</span></span> Enable <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n  <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// 禁用工作单元</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exception</span> <span class="token attr-name">cref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Exception<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exception</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>para</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>para</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// 若已开启事务（已有Insert/Update/Delete操作），调用此方法将发生异常，建议在执行逻辑前调用</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// 开启工作单元</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// 此工作单元内的实体变化跟踪</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token return-type class-name">DbContext<span class="token punctuation">.</span>EntityChangeReport</span> EntityChangeReport <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="实体变化事件" tabindex="-1"><a class="header-anchor" href="#实体变化事件" aria-hidden="true">#</a> 实体变化事件</h2><p>全局设置：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token function">SetDbContextOptions</span><span class="token punctuation">(</span>opt <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  opt<span class="token punctuation">.</span>OnEntityChange <span class="token operator">=</span> report <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>report<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>单独设置：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> uow <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">CreateUnitOfWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuow<span class="token punctuation">.</span>OnEntityChange <span class="token operator">=</span> report <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>report<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>参数 report 是一个 List 集合，集合元素的类型定义如下：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChangeInfo</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> Object <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token return-type class-name">EntityChangeType</span> Type <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// Type = Update 的时候，获取更新之前的对象</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> BeforeObject <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">EntityChangeType</span> <span class="token punctuation">{</span> Insert<span class="token punctuation">,</span> Update<span class="token punctuation">,</span> Delete<span class="token punctuation">,</span> SqlRaw <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><table><thead><tr><th>变化类型</th><th>说明</th></tr></thead><tbody><tr><td>Insert</td><td>实体对象被插入</td></tr><tr><td>Update</td><td>实体对象被更新</td></tr><tr><td>Delete</td><td>实体对象被删除</td></tr><tr><td>SqlRaw</td><td>执行了SQL语句</td></tr></tbody></table><p>SqlRaw 目前有两处地方比较特殊：</p><ul><li>多对多联级更新导航属性的时候，对中间表的全部删除操作；</li><li>通用仓储类 BaseRepository 有一个 Delete 方法，参数为表达式，而并非实体；</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token class-name">Expression<span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span>TEntity<span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> predicate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>DbContext.SaveChanges，或者 Repository 对实体的 Insert/Update/Delete，或者 UnitOfWork.Commit 操作都会最多触发一次该事件。</p>',15),u={},r=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[e,(0,p._)("a",o,[c,(0,p.Wm)(a)])]),l],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);