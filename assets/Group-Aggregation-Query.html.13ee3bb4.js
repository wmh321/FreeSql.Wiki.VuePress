import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,a as n,b as l,d as a,e as s}from"./app.a79ad73a.js";const u={},i=a(`<h1 id="group-aggregation-query" tabindex="-1"><a class="header-anchor" href="#group-aggregation-query" aria-hidden="true">#</a> Group Aggregation Query</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>
     <span class="token comment">//Be sure to define as singleton mode</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token keyword">class</span> <span class="token class-name">Topic</span> 
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="group-aggregation" tabindex="-1"><a class="header-anchor" href="#group-aggregation" aria-hidden="true">#</a> Group Aggregation</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> tt2 <span class="token operator">=</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">.</span><span class="token function">Substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mod4 <span class="token operator">=</span> a<span class="token punctuation">.</span>Id <span class="token operator">%</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">Max</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token operator">||</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>tt2<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OrderByDescending</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> cou1 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arg1 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Clicks<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//SELECT substr(a.\`Title\`, 1, 2) as1, count(1) as2, avg(a.\`Id\`) as3 </span>
<span class="token comment">//FROM \`Topic\` a </span>
<span class="token comment">//GROUP BY substr(a.\`Title\`, 1, 2), (a.\`Id\` % 4) </span>
<span class="token comment">//HAVING (count(1) &gt; 0 AND avg((a.\`Id\` % 4)) &gt; 0 AND max((a.\`Id\` % 4)) &gt; 0) AND (count(1) &lt; 300 OR avg((a.\`Id\` % 4)) &lt; 100) </span>
<span class="token comment">//ORDER BY substr(a.\`Title\`, 1, 2), count(1) DESC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>To find the aggregate value without grouping, please use <code>ToAggregate</code> instead of <code>ToList</code></p></blockquote><h2 id="navigation-property-grouping" tabindex="-1"><a class="header-anchor" href="#navigation-property-grouping" aria-hidden="true">#</a> Navigation Property Grouping</h2><p>If <code>Topic</code> has the navigation property <code>Category</code>, and <code>Category</code> has the navigation property <code>Area</code>, the navigation property grouping code is as follows:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Clicks<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: Write as above, an error will be reported and cannot be resolved <code>a.Key.Category.Area.Name</code>. The solution is to use <code>Include</code>:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area<span class="token punctuation">)</span>
    <span class="token comment">//This line must be added, </span>
    <span class="token comment">//otherwise only the Category will be grouped without its sub-navigation property Area</span>

    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Clicks<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, you can also solve it like this:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Clicks<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Area<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multi-table-grouping" tabindex="-1"><a class="header-anchor" href="#multi-table-grouping" aria-hidden="true">#</a> Multi-table Grouping</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">,</span> Category<span class="token punctuation">,</span> Area<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">,</span> c<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>g <span class="token operator">=&gt;</span> g<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token operator">||</span> g<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Item1<span class="token punctuation">.</span>Clicks<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>g <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> count <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> g<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>g.Value.Item1</code> corresponds to <code>Topic</code></li><li><code>g.Value.Item2</code> corresponds to <code>Category</code></li><li><code>g.Value.Item3</code> corresponds to <code>Area</code></li></ul><h2 id="aggregate" tabindex="-1"><a class="header-anchor" href="#aggregate" aria-hidden="true">#</a> Aggregate</h2><ul><li>distinct</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Aggregate</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> Convert<span class="token punctuation">.</span><span class="token function">ToInt32</span><span class="token punctuation">(</span><span class="token string">&quot;count(distinct title)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> count<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SqlExt.DistinctCount</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Aggregate</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> SqlExt<span class="token punctuation">.</span><span class="token function">DistinctCount</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Title<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>SELECT count(distinct a.&quot;title&quot;) as1 FROM &quot;Topic&quot; a</p></blockquote><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,22),r=n("thead",null,[n("tr",null,[n("th",null,"Method"),n("th",null,"Return"),n("th",null,"Parameter"),n("th",null,"Description")])],-1),k=n("tr",null,[n("td",null,"ToSql"),n("td",null,"string"),n("td"),n("td",null,"Return the SQL statement to be executed")],-1),d=n("tr",null,[n("td",null,"ToList<T>"),n("td",null,"List<T>"),n("td",null,"Lambda"),n("td",null,"Execute SQL query and return the records of the specified field. When the record does not exist, return a list with Count of 0.")],-1),g=n("tr",null,[n("td",null,"ToList<T>"),n("td",null,"List<T>"),n("td",null,"string field"),n("td",null,"Execute SQL query, and return the record of the field specified by field, and receive it as a tuple or basic type (int, string, long). If the record does not exist, return a list with Count of 0.")],-1),m=n("tr",null,[n("td",null,"ToAggregate<T>"),n("td",null,"List<T>"),n("td",null,"Lambda"),n("td",null,"Execute SQL query and return the aggregate result of the specified field. (Suitable for scenarios where GroupBy is not required)")],-1),v=n("tr",null,[n("td",null,"Sum"),n("td",null,"T"),n("td",null,"Lambda"),n("td",null,"Specify a column to sum.")],-1),h=n("tr",null,[n("td",null,"Min"),n("td",null,"T"),n("td",null,"Lambda"),n("td",null,"Specify a column to find the minimum.")],-1),b=n("tr",null,[n("td",null,"Max"),n("td",null,"T"),n("td",null,"Lambda"),n("td",null,"Specify a column to find the maximum.")],-1),y=n("tr",null,[n("td",null,"Avg"),n("td",null,"T"),n("td",null,"Lambda"),n("td",null,"Specify a column to average.")],-1),f=n("tr",null,[n("td",null,"\u3010Grouping\u3011"),n("td"),n("td"),n("td")],-1),w=n("td",null,"GroupBy",-1),_=n("td",null,"<this>",-1),T=n("td",null,"Lambda",-1),q=s("Group by the selected column, GroupBy(a => "),L={href:"http://a.Name",target:"_blank",rel:"noopener noreferrer"},C=s("a.Name"),S=s(")"),x=n("tr",null,[n("td",null,"GroupBy"),n("td",null,"<this>"),n("td",null,"string, parms"),n("td",null,'Group by raw sql statement, GroupBy("concat(name, @cc)", new { cc = 1 })')],-1),A=n("tr",null,[n("td",null,"Having"),n("td",null,"<this>"),n("td",null,"string, parms"),n("td",null,'Filter by raw SQL statement aggregation conditions, Having("count(name) = @cc", new { cc = 1 })')],-1),G=n("tr",null,[n("td",null,"\u3010Members\u3011"),n("td"),n("td"),n("td")],-1),I=n("tr",null,[n("td",null,"Key"),n("td"),n("td"),n("td",null,"Returns the object selected by GroupBy")],-1),B=n("tr",null,[n("td",null,"Value"),n("td"),n("td"),n("td",null,"Return to the main table or the field selector of From<T2,T3....>")],-1),N=a('<h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Query-from-Multi-Tablea">\u300AQuery from Multi Tables\u300B</a></li><li><a href="Return-Data">\u300AReturn Data\u300B</a></li><li><a href="Linq-to-Sql">\u300ALinqToSql\u300B</a></li><li><a href="Repository-Layer">\u300ARepository Layer\u300B</a></li><li><a href="Filters-and-Global-Filters">\u300AFilters and Global Filters\u300B</a></li><li><a href="Lazy-Loading">\u300AFreeSql Optimization: Lazy Loading\u300B</a></li><li><a href="Greed-Loading">\u300AFreeSql Optimization: Greed Loading\u300B</a></li><li><a href="Expression-Function">\u300AExpression Function\u300B</a></li><li><a href="Performance">\u300APerformance\u300B</a></li><li><a href="Tenant">\u300ATenant\u300B</a></li></ul>',2);function E(F,R){const t=p("ExternalLinkIcon");return o(),c("div",null,[i,n("table",null,[r,n("tbody",null,[k,d,g,m,v,h,b,y,f,n("tr",null,[w,_,T,n("td",null,[q,n("a",L,[C,l(t)]),S])]),x,A,G,I,B])]),N])}var M=e(u,[["render",E],["__file","Group-Aggregation-Query.html.vue"]]);export{M as default};