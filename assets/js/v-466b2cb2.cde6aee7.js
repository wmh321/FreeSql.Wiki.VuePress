"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[7047],{6712:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-466b2cb2",path:"/guide/transaction.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"0、ASP.NET Core配置DI使用UnitOfWorkManager，此方法更简单",slug:"_0、asp-net-core配置di使用unitofworkmanager-此方法更简单",children:[]},{level:2,title:"1、UnitOfWork 事务",slug:"_1、unitofwork-事务",children:[]},{level:2,title:"2、DbContext 事务",slug:"_2、dbcontext-事务",children:[]},{level:2,title:"3、同线程事务",slug:"_3、同线程事务",children:[]},{level:2,title:"4、外部事务",slug:"_4、外部事务",children:[]},{level:2,title:"5、更新排他锁",slug:"_5、更新排他锁",children:[]},{level:2,title:"6、示范代码",slug:"_6、示范代码",children:[]}],git:{updatedTime:1651390576e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmai.com",commits:1}]},filePathRelative:"guide/transaction.md"}},853:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var p=a(6252);const t=(0,p.uE)('<p>本文所有内容基于单机数据库事务，分布式数据库 TCC/SAGA 方案请移步：https://github.com/2881099/FreeSql.Cloud</p><h2 id="_0、asp-net-core配置di使用unitofworkmanager-此方法更简单" tabindex="-1"><a class="header-anchor" href="#_0、asp-net-core配置di使用unitofworkmanager-此方法更简单" aria-hidden="true">#</a> 0、<a href="DI-UnitOfWorkManager%E4%BA%8B%E5%8A%A1">ASP.NET Core配置DI使用UnitOfWorkManager，此方法更简单</a></h2><h2 id="_1、unitofwork-事务" tabindex="-1"><a class="header-anchor" href="#_1、unitofwork-事务" aria-hidden="true">#</a> 1、UnitOfWork 事务</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> uow <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">CreateUnitOfWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token class-name"><span class="token keyword">var</span></span> songRepo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token class-name"><span class="token keyword">var</span></span> userRepo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  songRepo<span class="token punctuation">.</span>UnitOfWork <span class="token operator">=</span> uow<span class="token punctuation">;</span> <span class="token comment">//手工绑定工作单元</span>\n  userRepo<span class="token punctuation">.</span>UnitOfWork <span class="token operator">=</span> uow<span class="token punctuation">;</span>\n\n  songRepo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  userRepo<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  uow<span class="token punctuation">.</span>Orm<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//注意：uow.Orm 和 fsql 都是 IFreeSql</span>\n  <span class="token comment">//uow.Orm CRUD 与 uow 是一个事务（理解为临时 IFreeSql）</span>\n  <span class="token comment">//fsql CRUD 与 uow 不在一个事务</span>\n\n  uow<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',4),o=(0,p.Uk)("参考："),c={href:"https://github.com/dotnetcore/FreeSql/issues/289",target:"_blank",rel:"noopener noreferrer"},e=(0,p.Uk)("在 asp.net core 中使用 TransactionalAttribute + UnitOfWorkManager 实现多种事务传播"),u=(0,p.uE)('<h2 id="_2、dbcontext-事务" tabindex="-1"><a class="header-anchor" href="#_2、dbcontext-事务" aria-hidden="true">#</a> 2、DbContext 事务</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> ctx <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">CreateDbContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token class-name"><span class="token keyword">var</span></span> song <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Set</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token class-name"><span class="token keyword">var</span></span> user <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Set</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  song<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  user<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  ctx<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3、同线程事务" tabindex="-1"><a class="header-anchor" href="#_3、同线程事务" aria-hidden="true">#</a> 3、同线程事务</h2><p>同线程事务，由 fsql.Transaction 管理事务提交回滚（缺点：不支持异步），比较适合 WinForm/WPF UI 主线程使用事务的场景。</p><p>用户购买了价值100元的商品：扣余额、扣库存。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token punctuation">{</span>\n  <span class="token comment">//fsql.Ado.TransactionCurrentThread 获得当前事务对象</span>\n\n  <span class="token class-name"><span class="token keyword">var</span></span> affrows <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Wealth <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Wealth <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//判断别让用户余额扣成负数</span>\n    \n  <span class="token keyword">if</span> <span class="token punctuation">(</span>affrows <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;用户余额不足&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//抛出异常，回滚事务，事务退出</span>\n\n  affrows <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Goods<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Stock <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Stock <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//判断别让用库存扣成负数</span>\n    \n  <span class="token keyword">if</span> <span class="token punctuation">(</span>affrows <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;商品库存不足&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//抛出异常，回滚事务，事务退出</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>同线程事务使用简单，需要注意的限制：</p><ul><li><p>事务对象在线程挂载，每个线程只可开启一个事务连接，嵌套使用的是同一个事务；</p></li><li><p>事务体内代码不可以切换线程，因此不可使用任何异步方法，包括FreeSql提供的数据库异步方法（可以使用任何 Curd 同步方法）；</p></li></ul><h2 id="_4、外部事务" tabindex="-1"><a class="header-anchor" href="#_4、外部事务" aria-hidden="true">#</a> 4、外部事务</h2><p>在与其他开源项目一起使用时，事务由外部开启，使用 WithTransaction 将事务对象传入执行。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">await</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>xxx<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">WithTransaction</span><span class="token punctuation">(</span>指定事务<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Clicks <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">ExecuteAffrowsAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>ISelect、IInsert、IUpdate、IDelete，都支持 WithTransaction 方法。</p><h2 id="_5、更新排他锁" tabindex="-1"><a class="header-anchor" href="#_5、更新排他锁" aria-hidden="true">#</a> 5、更新排他锁</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> user <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ForUpdate</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//SELECT ... FROM User a for update nowait</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>for update 在 Oracle/PostgreSQL/MySql 是通用的写法，我们对 SqlServer 做了特别适配，执行的 SQL 语句大致如下：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">FROM</span> <span class="token punctuation">[</span><span class="token keyword">User</span><span class="token punctuation">]</span> a <span class="token keyword">With</span><span class="token punctuation">(</span>UpdLock<span class="token punctuation">,</span> RowLock<span class="token punctuation">,</span> NoWait<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_6、示范代码" tabindex="-1"><a class="header-anchor" href="#_6、示范代码" aria-hidden="true">#</a> 6、示范代码</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//使用 全局线程事务</span>\nfsql<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token comment">//使用 UnitOfWork 事务</span>\n<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> uow <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">CreateUnitOfWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> uow<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Products<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    repo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    uow<span class="token punctuation">.</span>Orm<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//正常</span>\n    fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//错误，没有传事务</span>\n    fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithTransaction</span><span class="token punctuation">(</span>uow<span class="token punctuation">.</span><span class="token function">GetOrBeginTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//正常</span>\n\n    uow<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment">//使用 DbContext 事务</span>\n<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> ctx <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">CreateDbContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    ctx<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    ctx<span class="token punctuation">.</span>Orm<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//正常</span>\n    fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//错误，没有传事务</span>\n    fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithTransaction</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>UnitOfWork<span class="token punctuation">.</span><span class="token function">GetOrBeginTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//正常</span>\n\n    ctx<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment">//使用 UnitOfWorkManager 管理类事务</span>\n<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> uowManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">UnitOfWorkManager</span><span class="token punctuation">(</span>fsql<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> uow <span class="token operator">=</span> uowManager<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        uow<span class="token punctuation">.</span>Orm<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//正常</span>\n        fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//错误，没有传事务</span>\n        fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithTransaction</span><span class="token punctuation">(</span>uow<span class="token punctuation">.</span><span class="token function">GetOrBeginTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//正常</span>\n\n        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> uow2 <span class="token operator">=</span> uowManager<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//与 uow 同一个事务</span>\n        <span class="token punctuation">{</span>\n            <span class="token class-name"><span class="token keyword">var</span></span> repo1 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Products<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            repo1<span class="token punctuation">.</span>UnitOfWork <span class="token operator">=</span> uow2<span class="token punctuation">;</span>\n            repo1<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            uow2<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//事务还未提交</span>\n        <span class="token punctuation">}</span>\n\n        uow<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//事务提交</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><ul><li>IFreeSql Curd 方法若不是使用同线程事务，需要指定 WithTransaction 传入事务；</li><li>IUnitOfWork Orm 与工作单元事务一致；</li><li>FreeSql.IBaseRepository curd 方法需要指定 UnitOfWork 传递工作单元事务；</li><li>FreeSql.DbContext 自带事务；</li><li>UnitOfWorkManager 适合做跨方法事务；</li></ul>',19),l={href:"https://github.com/dotnetcore/FreeSql/issues/322",target:"_blank",rel:"noopener noreferrer"},i=(0,p.Uk)("扩展阅读 1：IFreeSql 事务另类玩法，理解上面各种事务场景之后再看会更佳"),r={href:"https://www.cnblogs.com/kellynic/p/13551855.html",target:"_blank",rel:"noopener noreferrer"},k=(0,p.Uk)("扩展阅读 2：对以上各种事务的理解及演变"),m={},b=(0,a(3744).Z)(m,[["render",function(n,s){const a=(0,p.up)("ExternalLinkIcon");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[o,(0,p._)("a",c,[e,(0,p.Wm)(a)])]),u,(0,p._)("p",null,[(0,p._)("a",l,[i,(0,p.Wm)(a)])]),(0,p._)("p",null,[(0,p._)("a",r,[k,(0,p.Wm)(a)])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);