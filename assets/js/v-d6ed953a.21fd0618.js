"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[8156],{421:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-d6ed953a",path:"/guide/repository.html",title:"仓储",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"特性",slug:"特性",children:[]},{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"定义",slug:"定义",children:[]},{level:2,title:"使用方法",slug:"使用方法",children:[]},{level:2,title:"状态管理",slug:"状态管理",children:[]},{level:2,title:"过滤与验证",slug:"过滤与验证",children:[]},{level:2,title:"分表与分库",slug:"分表与分库",children:[]},{level:2,title:"兼容问题",slug:"兼容问题",children:[]},{level:2,title:"联级保存",slug:"联级保存",children:[]},{level:2,title:"API",slug:"api",children:[]}],filePathRelative:"guide/repository.md",git:{updatedTime:1637115507e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]}}},2237:(n,s,a)=>{a.r(s),a.d(s,{default:()=>d});var t=a(6252);const e=(0,t.uE)('<h1 id="仓储" tabindex="-1"><a class="header-anchor" href="#仓储" aria-hidden="true">#</a> 仓储</h1><p>FreeSql.Repository 作为扩展，实现了通用仓储层功能。与其他规范标准一样，仓储层也有相应的规范定义。FreeSql.Repository 参考 abp vnext 接口，定义和实现基础的仓储层（CURD），应该算比较通用的方法吧。</p><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2><ul><li>Select/Attach 快照对象，Update 只更新变化的字段；</li><li>Insert 插入数据，适配各数据库优化执行 ExecuteAffrows/ExecuteIdentity/ExecuteInserted；</li><li>InsertOrUpdate 插入或更新；</li><li>SaveMany 方法快速保存导航对象（一对多、多对多）；</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> dotnet <span class="token function">add</span> package FreeSql.Repository\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=|DataDirectory|\\document.db;Pooling=true;Max Pool Size=10&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//自动迁移实体的结构到数据库</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Song</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><p>1、IFreeSql 的扩展方法；</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> curd <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>注意：Repository对象多线程不安全</p></blockquote><p>2、继承实现；</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SongRepository</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseRepository<span class="token punctuation">&lt;</span>Song<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">SongRepository</span><span class="token punctuation">(</span><span class="token class-name">IFreeSql</span> fsql<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n    <span class="token comment">//在这里增加 CURD 以外的方法</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>3、依赖注入；</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    \n    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>Fsql<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    services<span class="token punctuation">.</span><span class="token function">AddFreeRepository</span><span class="token punctuation">(</span>filter <span class="token operator">=&gt;</span> filter\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Apply</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ISoftDelete<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;SoftDelete&quot;</span><span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>IsDeleted <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Apply</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ITenant<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;Tenant&quot;</span><span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TenantId <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>\n        <span class="token punctuation">,</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//在控制器使用</span>\n<span class="token keyword">public</span> <span class="token function">SongsController</span><span class="token punctuation">(</span><span class="token class-name">IBaseRepository<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> repos1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote><p>依赖注入的方式可实现全局【过滤与验证】的设定，方便租户功能的设计；</p></blockquote>',17),p=(0,t.Uk)("更多内容可参阅："),o=(0,t.Uk)("《过滤器》"),c=(0,t.uE)('<h2 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理" aria-hidden="true">#</a> 状态管理</h2><p>只更新变化的属性：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> repo<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//此时快照 item</span>\nitem<span class="token punctuation">.</span>Title <span class="token operator">=</span> <span class="token string">&quot;newtitle&quot;</span><span class="token punctuation">;</span>\nrepo<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//对比快照时的变化</span>\n<span class="token comment">//UPDATE `tb_topic` SET `Title` = ?p_0</span>\n<span class="token comment">//WHERE (`Id` = 1)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>是不是觉得先查询再更新，啰嗦？</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nrepo<span class="token punctuation">.</span><span class="token function">Attach</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//此时快照 item</span>\nitem<span class="token punctuation">.</span>Title <span class="token operator">=</span> <span class="token string">&quot;newtitle&quot;</span><span class="token punctuation">;</span>\nrepo<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//对比快照时的变化</span>\n<span class="token comment">//UPDATE `tb_topic` SET `Title` = ?p_0</span>\n<span class="token comment">//WHERE (`Id` = 1)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="过滤与验证" tabindex="-1"><a class="header-anchor" href="#过滤与验证" aria-hidden="true">#</a> 过滤与验证</h2><p>假设我们有User(用户)、Topic(主题)两个实体，在领域类中定义了两个仓储：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> userRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> topicRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在开发过程中，总是担心 topicRepository 的数据安全问题，即有可能查询或操作到其他用户的主题。因此我们在v0.0.7版本进行了改进，增加了 filter lambda 表达式参数。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> userRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> topicRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>UserId <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>在查询/修改/删除时附加此条件，从而达到不会修改其他用户的数据；</li><li>在添加时，使用表达式验证数据的合法性，若不合法则抛出异常；</li></ul><h2 id="分表与分库" tabindex="-1"><a class="header-anchor" href="#分表与分库" aria-hidden="true">#</a> 分表与分库</h2><p>FreeSql 提供 AsTable 分表的基础方法，GuidRepository 作为分存式仓储将实现了分表与分库（不支持跨服务器分库）的封装。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> logRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Log<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> oldname <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">oldname</span><span class="token punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token string">&quot;YYYYMM&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>上面我们得到一个日志仓储按年月分表，使用它 CURD 最终会操作 Log_201903 表。</p><p>注意事项：</p><ul><li>v0.11.12以后的版本可以使用 CodeFirst 迁移分表；</li><li>不可在分表分库的实体类型中使用《延时加载》；</li></ul><h2 id="兼容问题" tabindex="-1"><a class="header-anchor" href="#兼容问题" aria-hidden="true">#</a> 兼容问题</h2><p>SqlServer 提供的 output inserted 特性，在表使用了自增或数据库定义了默认值的时候，使用它可以快速将 insert 的数据返回。PostgreSQL 也有相应的功能，如此方便但不是每个数据库都支持。</p><p>当采用了不支持该特性的数据库（Sqlite/MySql/Oracle/达梦/MsAccess），并且实体使用了自增属性，仓储批量插入将变为逐条执行，可以考虑以下改进：</p><ul><li>使用 uuid 作为主键（即 Guid）；</li><li>避免使用数据库的默认值功能；</li></ul><h2 id="联级保存" tabindex="-1"><a class="header-anchor" href="#联级保存" aria-hidden="true">#</a> 联级保存</h2>',22),l=(0,t.Uk)("请移步文档 "),i=(0,t.Uk)("《联级保存》"),u=(0,t.uE)('<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>属性</th><th>返回值</th><th>说明</th></tr></thead><tbody><tr><td>EntityType</td><td>Type</td><td>仓储正在操作的实体类型，注意它不一定是 TEntity</td></tr><tr><td>UnitOfWork</td><td>IUnitOfWork</td><td>正在使用的工作单元</td></tr><tr><td>Orm</td><td>IFreeSql</td><td>正在使用的 Orm</td></tr><tr><td>DbContextOptions</td><td>DbContextOptions</td><td>正在使用的 DbContext 设置，修改设置不影响其他</td></tr><tr><td>DataFilter</td><td>IDataFilter&lt;TEntity&gt;</td><td>仓储过滤器，本对象内生效</td></tr><tr><td>Select</td><td>ISelect&lt;TEntity&gt;</td><td>准备查询数据</td></tr></tbody></table><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>AsType</td><td>void</td><td>Type</td><td>改变仓储正在操作的实体类型</td></tr><tr><td>Get</td><td>TEntity</td><td>TKey</td><td>根据主键，查询数据</td></tr><tr><td>Find</td><td>TEntity</td><td>TKey</td><td>根据主键，查询数据</td></tr><tr><td>Delete</td><td>int</td><td>TKey</td><td>根据主键删除数据</td></tr><tr><td>Delete</td><td>int</td><td>Lambda</td><td>根据 lambda 条件删除数据</td></tr><tr><td>Delete</td><td>int</td><td>TEntity</td><td>删除数据</td></tr><tr><td>Delete</td><td>int</td><td>IEnumerable&lt;TEntity&gt;</td><td>批量删除数据</td></tr><tr><td>Insert</td><td>-</td><td>TEntity</td><td>插入数据，若实体有自增列，插入后的自增值会填充到实体中</td></tr><tr><td>Insert</td><td>-</td><td>IEnumerable&lt;TEntity&gt;</td><td>批量插入数据</td></tr><tr><td>Update</td><td>-</td><td>TEntity</td><td>更新数据</td></tr><tr><td>Update</td><td>-</td><td>IEnumerable&lt;TEntity&gt;</td><td>批量更新数据</td></tr><tr><td>InsertOrUpdate</td><td>-</td><td>TEntity</td><td>插入或更新数据</td></tr><tr><td>FlushState</td><td>-</td><td>无</td><td>清除状态管理数据</td></tr><tr><td>Attach</td><td>-</td><td>TEntity</td><td>附加实体到状态管理，可用于不查询就更新或删除</td></tr><tr><td>Attach</td><td>-</td><td>IEnumerable&lt;TEntity&gt;</td><td>批量附加实体到状态管理</td></tr><tr><td>AttachOnlyPrimary</td><td>-</td><td>TEntity</td><td>只附加实体的主键数据到状态管理</td></tr><tr><td>SaveMany</td><td>-</td><td>TEntity, string</td><td>保存实体的指定 ManyToMany/OneToMany 导航属性（完整对比）</td></tr><tr><td>BeginEdit</td><td>-</td><td>List&lt;TEntity&gt;</td><td>准备编辑一个 List 实体</td></tr><tr><td>EndEdit</td><td>int</td><td>无</td><td>完成编辑数据，进行保存动作</td></tr></tbody></table><blockquote><p>状态管理，可实现 Update 只更新变化的字段（不更新所有字段），灵活使用 Attach 和 Update 用起来非常舒服。</p></blockquote>',4),r={},d=(0,a(3744).Z)(r,[["render",function(n,s){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("p",null,[p,(0,t.Wm)(a,{to:"/guide/filters.html"},{default:(0,t.w5)((()=>[o])),_:1})]),c,(0,t._)("p",null,[l,(0,t.Wm)(a,{to:"/guide/cascade-saving.html"},{default:(0,t.w5)((()=>[i])),_:1})]),u],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);