(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[9807],{9570:(e,l,t)=>{"use strict";t.r(l),t.d(l,{data:()=>r});const r={key:"v-fffb8e28",path:"/guide/",title:"指南",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"FreeSql",slug:"freesql",children:[]},{level:2,title:"特性",slug:"特性",children:[]},{level:2,title:"学习指南",slug:"学习指南",children:[]}],filePathRelative:"guide/README.md",git:{createdTime:1620373102e3,updatedTime:1620373102e3,contributors:[]}}},6481:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>I});var r=t(6252);const i=(0,r.Wm)("h1",{id:"指南"},[(0,r.Wm)("a",{class:"header-anchor",href:"#指南"},"#"),(0,r.Uk)(" 指南")],-1),u={href:"https://github.com/dotnetcore",target:"_blank",rel:"noopener noreferrer"},a=(0,r.Wm)("img",{src:"https://img.shields.io/badge/member%20project%20of-NCC-9e20c9.svg",alt:"Member project of .NET Core Community"},null,-1),m={href:"https://www.nuget.org/packages/FreeSql",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Wm)("img",{src:"https://img.shields.io/nuget/v/FreeSql.svg?style=flat-square",alt:"nuget"},null,-1),n={href:"https://www.nuget.org/stats/packages/FreeSql?groupby=Version",target:"_blank",rel:"noopener noreferrer"},d=(0,r.Wm)("img",{src:"https://img.shields.io/nuget/dt/FreeSql.svg?style=flat-square",alt:"stats"},null,-1),o={href:"https://github.com/dotnetcore/FreeSql/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"},h=(0,r.Wm)("img",{src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"License"},null,-1),W={href:"https://starchart.cc/dotnetcore/FreeSql",target:"_blank",rel:"noopener noreferrer"},g=(0,r.Wm)("img",{src:"https://starchart.cc/dotnetcore/FreeSql.svg",alt:"Stargazers over time"},null,-1),c=(0,r.uE)('<h2 id="freesql"><a class="header-anchor" href="#freesql">#</a> FreeSql</h2><p><code>FreeSql</code>是功能强大的 .NET ORM，支持 .NetFramework 4.0+、.NetCore 2.1+、Xamarin 等支持 NetStandard 所有运行平台。</p><ul><li><p>QQ群：4336577(已满)、8578575(在线)、52508226(在线)</p></li><li><p>欢迎微信关注 <strong>dotNET搬砖队</strong>，分享 .NET Core + FreeSql 相关技术栈</p></li></ul><p><img src="/wechat_qrcode.jpg" alt="分享.NET Core+FreeSql相关技术"></p><h2 id="特性"><a class="header-anchor" href="#特性">#</a> 特性</h2><ul><li>[x] 支持 CodeFirst 迁移；</li><li>[x] 支持 DbFirst 从数据库导入实体类，支持三种模板生成器；</li><li>[x] 采用 ExpressionTree 高性能读取数据；</li><li>[x] 支持深入的类型映射，比如pgsql的数组类型，堪称匠心制作；</li><li>[x] 支持丰富的表达式函数；</li><li>[x] 支持导航属性查询，和延时加载；</li><li>[x] 支持同步/异步数据库操作方法，丰富多彩的链式查询方法；</li><li>[x] 支持读写分离、分表分库，租户设计；</li><li>[x] 支持多种数据库，MySql/SqlServer/PostgreSQL/Oracle/Sqlite/Firebird/达梦/神通/人大金仓/翰高/华为GaussDB/MsAccess；</li></ul><h2 id="学习指南"><a class="header-anchor" href="#学习指南">#</a> 学习指南</h2>',7),f=(0,r.Uk)("FreeSql 除了支持基本的增删查改功能外，还支持基于现有数据库创建模型（"),p=(0,r.Uk)("DbFirst"),k=(0,r.Uk)("），和支持基于模型创建数据库（"),w=(0,r.Uk)("CodeFirst"),F=(0,r.Uk)(")。"),_=(0,r.Wm)("h4",{id:"基础"},[(0,r.Wm)("a",{class:"header-anchor",href:"#基础"},"#"),(0,r.Uk)(" 基础")],-1),U=(0,r.Uk)("《学习FreeSql之一：添加数据》"),q=(0,r.Uk)("《学习FreeSql之二：删除数据》"),b=(0,r.Uk)("《学习FreeSql之三：修改数据》"),S=(0,r.Uk)("《学习FreeSql之四：查询数据》"),C=(0,r.Uk)("《仓储层Repository》"),E=(0,r.Wm)("h4",{id:"进阶"},[(0,r.Wm)("a",{class:"header-anchor",href:"#进阶"},"#"),(0,r.Uk)(" 进阶")],-1),v=(0,r.Uk)("《CodeFirst模式开发介绍》"),x=(0,r.Uk)("《CodeFirst模式之一：实体特性》"),y=(0,r.Uk)("《CodeFirst模式之二：FluentApi》"),N=(0,r.Uk)("《CodeFirst模式之三：自定义特性》"),T=(0,r.Uk)("《CodeFirst模式之四：类型映射》"),B=(0,r.Uk)("《CodeFirst模式之五：迁移结构》"),M=(0,r.Uk)("《DbFirst模式开发介绍》"),A=(0,r.Wm)("h4",{id:"高级"},[(0,r.Wm)("a",{class:"header-anchor",href:"#高级"},"#"),(0,r.Uk)(" 高级")],-1),D=(0,r.Uk)("《数据库事务》"),L=(0,r.Uk)("《使用读写分离》"),P=(0,r.Uk)("《分表分库》"),R=(0,r.Uk)("《多租户》"),j=(0,r.Uk)("《返回数据》"),O=(0,r.Uk)("《优化之：延时加载》"),z=(0,r.Uk)("《优化之：贪婪加载》"),Q=(0,r.Uk)("《Expression 表达式函数》"),V=(0,r.Uk)("《AOP》"),I={render:function(e,l){const t=(0,r.up)("OutboundLink"),I=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[i,(0,r.Wm)("p",null,[(0,r.Wm)("a",u,[a,(0,r.Wm)(t)]),(0,r.Wm)("a",m,[s,(0,r.Wm)(t)]),(0,r.Wm)("a",n,[d,(0,r.Wm)(t)]),(0,r.Wm)("a",o,[h,(0,r.Wm)(t)])]),(0,r.Wm)("p",null,[(0,r.Wm)("a",W,[g,(0,r.Wm)(t)])]),c,(0,r.Wm)("p",null,[f,(0,r.Wm)(I,{to:"/guide/db-first.html"},{default:(0,r.w5)((()=>[p])),_:1}),k,(0,r.Wm)(I,{to:"/guide/code-first.html"},{default:(0,r.w5)((()=>[w])),_:1}),F]),_,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/insert.html"},{default:(0,r.w5)((()=>[U])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/delete.html"},{default:(0,r.w5)((()=>[q])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/update.html"},{default:(0,r.w5)((()=>[b])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/select.html"},{default:(0,r.w5)((()=>[S])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/repository.html"},{default:(0,r.w5)((()=>[C])),_:1})])]),E,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/code-first.html"},{default:(0,r.w5)((()=>[v])),_:1}),(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/entity-attribute.html"},{default:(0,r.w5)((()=>[x])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/fluent-api.html"},{default:(0,r.w5)((()=>[y])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/custom-attribute.html"},{default:(0,r.w5)((()=>[N])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/type-mapping.html"},{default:(0,r.w5)((()=>[T])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/code-first.html#%E8%BF%81%E7%A7%BB%E7%BB%93%E6%9E%84"},{default:(0,r.w5)((()=>[B])),_:1})])])])]),(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/db-first.html"},{default:(0,r.w5)((()=>[M])),_:1})])]),A,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/transaction.html"},{default:(0,r.w5)((()=>[D])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/read-write-splitting.html"},{default:(0,r.w5)((()=>[L])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/sharding.html"},{default:(0,r.w5)((()=>[P])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/multi-tenancy.html"},{default:(0,r.w5)((()=>[R])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/select-return-data.html"},{default:(0,r.w5)((()=>[j])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/select-lazy-loading.html"},{default:(0,r.w5)((()=>[O])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/select-include.html"},{default:(0,r.w5)((()=>[z])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/expression-function.html"},{default:(0,r.w5)((()=>[Q])),_:1})]),(0,r.Wm)("li",null,[(0,r.Wm)(I,{to:"/guide/aop.html"},{default:(0,r.w5)((()=>[V])),_:1})])])],64)}}}}]);