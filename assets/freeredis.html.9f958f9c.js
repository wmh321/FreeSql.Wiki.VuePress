import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as p,c as o,a as n,b as c,e as s,d as l}from"./app.a79ad73a.js";const i={},u=n("h1",{id:"freeredis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#freeredis","aria-hidden":"true"},"#"),s(" FreeRedis")],-1),r=n("p",null,[n("code",null,"CSRedisCore"),s(" \u662F .NETFramework 4.0 \u53CA\u4EE5\u4E0A \u8BBF\u95EE redis-server \u7684\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u4E5F\u662F FreeSql \u4F5C\u8005\u65E9\u5E74\u53D1\u5E03\u7684 nuget \u7248\u672C\u3002")],-1),d=n("p",null,[s("\u540E\u6765\u91CD\u6784\u4E86\u66F4\u7B80\u6613\u7684 "),n("code",null,"FreeRedis"),s("\uFF0C\u76EE\u524D\u63A8\u8350\u5927\u5BB6\u4F7F\u7528 "),n("code",null,"FreeRedis"),s("\u3002")],-1),k=s("\u5F00\u6E90\u5730\u5740\uFF1A"),v={href:"https://github.com/2881099/FreeRedis",target:"_blank",rel:"noopener noreferrer"},g=s("https://github.com/2881099/FreeRedis"),m=l(`<ul><li>\u{1F308} \u6240\u6709\u65B9\u6CD5\u540D\u4E0E redis-cli \u4FDD\u6301\u4E00\u81F4</li><li>\u{1F30C} \u652F\u6301 Redis \u96C6\u7FA4\uFF08\u670D\u52A1\u7AEF\u8981\u6C42 3.2 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF09</li><li>\u26F3 \u652F\u6301 Redis \u54E8\u5175\u6A21\u5F0F</li><li>\u{1F3A3} \u652F\u6301\u4E3B\u4ECE\u5206\u79BB\uFF08Master-Slave\uFF09</li><li>\u{1F4E1} \u652F\u6301\u53D1\u5E03\u8BA2\u9605\uFF08Pub-Sub\uFF09</li><li>\u{1F4C3} \u652F\u6301 Redis Lua \u811A\u672C</li><li>\u{1F4BB} \u652F\u6301\u7BA1\u9053\uFF08Pipeline\uFF09</li><li>\u{1F4F0} \u652F\u6301\u4E8B\u52A1</li><li>\u{1F334} \u652F\u6301 GEO \u547D\u4EE4\uFF08\u670D\u52A1\u7AEF\u8981\u6C42 3.2 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF09</li><li>\u{1F332} \u652F\u6301 STREAM \u7C7B\u578B\u547D\u4EE4\uFF08\u670D\u52A1\u7AEF\u8981\u6C42 5.0 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF09</li><li>\u26A1 \u652F\u6301\u672C\u5730\u7F13\u5B58\uFF08Client-side-cahing\uFF0C\u670D\u52A1\u7AEF\u8981\u6C42 6.0 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF09</li><li>\u{1F333} \u652F\u6301 Redis 6 \u7684 RESP3 \u534F\u8BAE</li></ul><h2 id="\u{1F680}-\u5FEB\u901F\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#\u{1F680}-\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a> \u{1F680} \u5FEB\u901F\u5165\u95E8</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">RedisClient</span> cli <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisClient</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:6379,password=123,defaultDatabase=13&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//cli.Serialize = obj =&gt; JsonConvert.SerializeObject(obj);</span>
<span class="token comment">//cli.Deserialize = (json, type) =&gt; JsonConvert.DeserializeObject(json, type);</span>
cli<span class="token punctuation">.</span>Notice <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Log<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6253\u5370\u547D\u4EE4\u65E5\u5FD7</span>

cli<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cli<span class="token punctuation">.</span><span class="token function">MSet</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;key2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">string</span></span> value1 <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> vals <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">MGet</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;key2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u652F\u6301 STRING\u3001HASH\u3001LIST\u3001SET\u3001ZSET\u3001BITMAP\u3001HyperLogLog\u3001GEO\u3001Stream \u4EE5\u53CA\u5E03\u9686\u8FC7\u6EE4\u5668\u7B49\u3002</p></blockquote><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">protocol</td><td style="text-align:right;">RESP2</td><td style="text-align:left;">\u82E5\u4F7F\u7528 RESP3 \u534F\u8BAE\uFF0C\u4F60\u9700\u8981 Redis 6.0 \u73AF\u5883</td></tr><tr><td style="text-align:left;">user</td><td style="text-align:right;">&lt;empty&gt;</td><td style="text-align:left;">Redis \u670D\u52A1\u7AEF\u7528\u6237\u540D\uFF0C\u8981\u6C42 Redis 6.0 \u73AF\u5883</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:right;">&lt;empty&gt;</td><td style="text-align:left;">Redis \u670D\u52A1\u7AEF\u5BC6\u7801</td></tr><tr><td style="text-align:left;">defaultDatabase</td><td style="text-align:right;">0</td><td style="text-align:left;">Redis \u670D\u52A1\u7AEF\u6570\u636E\u5E93</td></tr><tr><td style="text-align:left;">max poolsize</td><td style="text-align:right;">100</td><td style="text-align:left;">\u8FDE\u63A5\u6C60\u6700\u5927\u8FDE\u63A5\u6570</td></tr><tr><td style="text-align:left;">min poolsize</td><td style="text-align:right;">5</td><td style="text-align:left;">\u8FDE\u63A5\u6C60\u6700\u5C0F\u8FDE\u63A5\u6570</td></tr><tr><td style="text-align:left;">idleTimeout</td><td style="text-align:right;">20000</td><td style="text-align:left;">\u8FDE\u63A5\u6C60\u4E2D\u5143\u7D20\u7684\u7A7A\u95F2\u65F6\u95F4\uFF08\u5355\u4F4D\u4E3A\u6BEB\u79D2 ms\uFF09\uFF0C\u9002\u7528\u4E8E\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668</td></tr><tr><td style="text-align:left;">connectTimeout</td><td style="text-align:right;">10000</td><td style="text-align:left;">\u8FDE\u63A5\u8D85\u65F6\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\uFF08ms\uFF09</td></tr><tr><td style="text-align:left;">receiveTimeout</td><td style="text-align:right;">10000</td><td style="text-align:left;">\u63A5\u6536\u8D85\u65F6\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\uFF08ms\uFF09</td></tr><tr><td style="text-align:left;">sendTimeout</td><td style="text-align:right;">10000</td><td style="text-align:left;">\u53D1\u9001\u8D85\u65F6\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\uFF08ms\uFF09</td></tr><tr><td style="text-align:left;">encoding</td><td style="text-align:right;">utf-8</td><td style="text-align:left;">\u5B57\u7B26\u4E32\u5B57\u7B26\u96C6</td></tr><tr><td style="text-align:left;">retry</td><td style="text-align:right;">0</td><td style="text-align:left;">\u534F\u8BAE\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u91CD\u8BD5\u6267\u884C\u7684\u6B21\u6570</td></tr><tr><td style="text-align:left;">ssl</td><td style="text-align:right;">false</td><td style="text-align:left;">\u542F\u7528\u52A0\u5BC6\u4F20\u8F93</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:right;">&lt;empty&gt;</td><td style="text-align:left;">\u8FDE\u63A5\u540D\uFF0C\u4F7F\u7528 CLIENT LIST \u547D\u4EE4\u67E5\u770B</td></tr><tr><td style="text-align:left;">prefix</td><td style="text-align:right;">&lt;empty&gt;</td><td style="text-align:left;"><code>key</code> \u524D\u8F8D\uFF0C\u6240\u6709\u65B9\u6CD5\u90FD\u4F1A\u9644\u5E26\u6B64\u524D\u8F8D\uFF0Ccli.Set(prefix + &quot;key&quot;, 111);</td></tr></tbody></table><blockquote><p>IPv6: [fe80::b164:55b3:4b4f:7ce6%15]:6379</p></blockquote><h2 id="\u{1F3A3}-master-slave-\u8BFB\u5199\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#\u{1F3A3}-master-slave-\u8BFB\u5199\u5206\u79BB" aria-hidden="true">#</a> \u{1F3A3} Master-Slave (\u8BFB\u5199\u5206\u79BB)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">RedisClient</span> cli <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisClient</span><span class="token punctuation">(</span>
    <span class="token string">&quot;127.0.0.1:6379,password=123,defaultDatabase=13&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;127.0.0.1:6380,password=123,defaultDatabase=13&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;127.0.0.1:6381,password=123,defaultDatabase=13&quot;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> <span class="token keyword">value</span> <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5199\u5165\u65F6\u8FDE\u63A5 127.0.0.1:6379\uFF0C\u8BFB\u53D6\u65F6\u968F\u673A\u8FDE\u63A5 6380 6381</p></blockquote><h2 id="\u26F3-redis-sentinel-\u54E8\u5175\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#\u26F3-redis-sentinel-\u54E8\u5175\u9AD8\u53EF\u7528" aria-hidden="true">#</a> \u26F3 Redis Sentinel (\u54E8\u5175\u9AD8\u53EF\u7528)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">RedisClient</span> cli <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisClient</span><span class="token punctuation">(</span>
    <span class="token string">&quot;mymaster,password=123&quot;</span><span class="token punctuation">,</span> 
    <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;192.169.1.10:26379&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.169.1.11:26379&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.169.1.12:26379&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token boolean">true</span> <span class="token comment">//\u662F\u5426\u8BFB\u5199\u5206\u79BB</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F30C}-redis-cluster-\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u{1F30C}-redis-cluster-\u96C6\u7FA4" aria-hidden="true">#</a> \u{1F30C} Redis Cluster (\u96C6\u7FA4)</h2><p>\u5047\u5982\u4F60\u6709\u4E00\u4E2A Redis Cluster \u96C6\u7FA4\uFF0C\u5176\u4E2D\u6709\u4E09\u4E2A\u4E3B\u8282\u70B9(7001-7003)\u3001\u4E09\u4E2A\u4ECE\u8282\u70B9(7004-7006)\uFF0C\u5219\u8FDE\u63A5\u6B64\u96C6\u7FA4\u7684\u4EE3\u7801\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">RedisClient</span> cli <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisClient</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConnectionStringBuilder<span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;192.168.0.2:7001&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.2:7002&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.2:7003&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u26A1-client-side-cahing-\u672C\u5730\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u26A1-client-side-cahing-\u672C\u5730\u7F13\u5B58" aria-hidden="true">#</a> \u26A1 Client-side-cahing (\u672C\u5730\u7F13\u5B58)</h2><blockquote><p>\u670D\u52A1\u7AEF\u8981\u6C42 6.0 \u53CA\u4EE5\u4E0A\u7248\u672C</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>cli<span class="token punctuation">.</span><span class="token function">UseClientSideCaching</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ClientSideCachingOptions</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u672C\u5730\u7F13\u5B58\u7684\u5BB9\u91CF</span>
    Capacity <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token comment">//\u8FC7\u6EE4\u54EA\u4E9B\u952E\u80FD\u88AB\u672C\u5730\u7F13\u5B58</span>
    KeyFilter <span class="token operator">=</span> key <span class="token operator">=&gt;</span> key<span class="token punctuation">.</span><span class="token function">StartsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Interceptor&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//\u68C0\u67E5\u957F\u671F\u672A\u4F7F\u7528\u7684\u7F13\u5B58</span>
    CheckExpired <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> dt<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">Subtract</span><span class="token punctuation">(</span>dt<span class="token punctuation">)</span> <span class="token operator">&gt;</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F4E1}-subscribe-\u8BA2\u9605" tabindex="-1"><a class="header-anchor" href="#\u{1F4E1}-subscribe-\u8BA2\u9605" aria-hidden="true">#</a> \u{1F4E1} Subscribe (\u8BA2\u9605)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span>cli<span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> ondata<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//wait .Dispose()</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ondata</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> channel<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">channel</span><span class="token punctuation">}</span></span><span class="token string"> -&gt; </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">data</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F4C3}-scripting-\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u{1F4C3}-scripting-\u811A\u672C" aria-hidden="true">#</a> \u{1F4C3} Scripting (\u811A\u672C)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> r1 <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Eval</span><span class="token punctuation">(</span><span class="token string">&quot;return {KEYS[1],KEYS[2],ARGV[1],ARGV[2]}&quot;</span><span class="token punctuation">,</span> 
    <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;key2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;second&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name"><span class="token keyword">object</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> r2 <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Eval</span><span class="token punctuation">(</span><span class="token string">&quot;return {1,2,{3,&#39;Hello World!&#39;}}&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name"><span class="token keyword">object</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">;</span>

cli<span class="token punctuation">.</span><span class="token function">Eval</span><span class="token punctuation">(</span><span class="token string">&quot;return redis.call(&#39;set&#39;,KEYS[1],&#39;bar&#39;)&quot;</span><span class="token punctuation">,</span> 
    <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> Guid<span class="token punctuation">.</span><span class="token function">NewGuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F4BB}-pipeline-\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#\u{1F4BB}-pipeline-\u7BA1\u9053" aria-hidden="true">#</a> \u{1F4BB} Pipeline (\u7BA1\u9053)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> pipe <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">StartPipe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    pipe<span class="token punctuation">.</span><span class="token function">IncrBy</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pipe<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;key2&quot;</span><span class="token punctuation">,</span> Null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pipe<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">object</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> ret <span class="token operator">=</span> pipe<span class="token punctuation">.</span><span class="token function">EndPipe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>ret<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> ret<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F4F0}-transaction-\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u{1F4F0}-transaction-\u4E8B\u52A1" aria-hidden="true">#</a> \u{1F4F0} Transaction (\u4E8B\u52A1)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> tran <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Multi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    tran<span class="token punctuation">.</span><span class="token function">IncrBy</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tran<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;key2&quot;</span><span class="token punctuation">,</span> Null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    tran<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">object</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> ret <span class="token operator">=</span> tran<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>ret<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> ret<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F4EF}-getdatabase-\u5207\u5E93" tabindex="-1"><a class="header-anchor" href="#\u{1F4EF}-getdatabase-\u5207\u5E93" aria-hidden="true">#</a> \u{1F4EF} GetDatabase (\u5207\u5E93)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> db <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">GetDatabase</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    db<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> val1 <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F50D}-scan-\u626B\u63CF" tabindex="-1"><a class="header-anchor" href="#\u{1F50D}-scan-\u626B\u63CF" aria-hidden="true">#</a> \u{1F50D} Scan (\u626B\u63CF)</h2><blockquote><p>\u652F\u6301\u96C6\u7FA4\u6A21\u5F0F</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> keys <span class="token keyword">in</span> cli<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token string">&quot;, &quot;</span><span class="token punctuation">,</span> keys<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function b(h,y){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,r,d,n("p",null,[k,n("a",v,[g,c(a)])]),m])}var x=t(i,[["render",b],["__file","freeredis.html.vue"]]);export{x as default};