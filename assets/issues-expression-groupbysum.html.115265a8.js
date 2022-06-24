import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as s}from"./app.48fb4a12.js";const a={},p=s(`<h1 id="\u6280\u5DE7-\u81EA\u5B9A\u4E49\u89E3\u6790\u8868\u8FBE\u5F0F\u6811-\u5B9E\u73B0\u52A8\u6001\u805A\u5408\u5217-sum-case-when" tabindex="-1"><a class="header-anchor" href="#\u6280\u5DE7-\u81EA\u5B9A\u4E49\u89E3\u6790\u8868\u8FBE\u5F0F\u6811-\u5B9E\u73B0\u52A8\u6001\u805A\u5408\u5217-sum-case-when" aria-hidden="true">#</a> \u6280\u5DE7\uFF1A\u81EA\u5B9A\u4E49\u89E3\u6790\u8868\u8FBE\u5F0F\u6811\uFF0C\u5B9E\u73B0\u52A8\u6001\u805A\u5408\u5217 sum(case when ...)</h1><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
a<span class="token punctuation">.</span><span class="token string">&quot;Time&quot;</span><span class="token punctuation">,</span>
v1 <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
v2 <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">2</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
v3 <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">3</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> <span class="token string">&quot;table&quot;</span> a
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> a<span class="token punctuation">.</span><span class="token string">&quot;Time&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5982\u4E0A v1,v2,v3 \u662F\u52A8\u6001\u805A\u5408\u503C\uFF0C\u5982\u679C where IN (1,2,3,4) \u90A3\u5C31\u4F1A\u4EA7\u751F v1-v4</p><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u9759\u6001\u7684 lambda \u67E5\u8BE2\u6CA1\u529E\u6CD5\u5904\u7406\u8FD9\u79CD\u52A8\u6001\u5217\u67E5\u8BE2\u3002</p><hr><p>\u53D8\u901A\u4E00\u4E0B\uFF0C\u8FD9\u6837\u67E5\u8BE2\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
a<span class="token punctuation">.</span><span class="token string">&quot;Time&quot;</span><span class="token punctuation">,</span>
v <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">2</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">3</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> <span class="token string">&quot;table&quot;</span> a
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> a<span class="token punctuation">.</span><span class="token string">&quot;Time&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5982\u6B64\u4FBF\u53EF\u4EE5\u4F7F\u7528 FreeSql \u5B9E\u73B0\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> ids <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>table<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> ids<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Time<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>g <span class="token operator">=&gt;</span> <span class="token keyword">new</span> 
    <span class="token punctuation">{</span>
        Time <span class="token operator">=</span> g<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
        Values <span class="token operator">=</span> MyExt<span class="token punctuation">.</span><span class="token function">SumCase</span><span class="token punctuation">(</span>ids<span class="token punctuation">,</span> g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u81EA\u5B9A\u4E49\u89E3\u6790\u8868\u8FBE\u5F0F\u6811\uFF0C\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ExpressionCall</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyExt</span>
<span class="token punctuation">{</span>
    <span class="token keyword">internal</span> <span class="token keyword">static</span> <span class="token class-name">ThreadLocal<span class="token punctuation">&lt;</span>ExpressionCallContext<span class="token punctuation">&gt;</span></span> expContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ThreadLocal<span class="token punctuation">&lt;</span>ExpressionCallContext<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token generic-method"><span class="token function">SumCase</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TValue<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">RawValue</span></span><span class="token punctuation">]</span> <span class="token class-name">TValue<span class="token punctuation">[</span><span class="token punctuation">]</span></span> values<span class="token punctuation">,</span> <span class="token class-name">TValue</span> column<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> ctx <span class="token operator">=</span> expContext<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span>Result <span class="token operator">=</span> ctx<span class="token punctuation">.</span>_commonExp<span class="token punctuation">.</span>_common<span class="token punctuation">.</span><span class="token function">StringConcat</span><span class="token punctuation">(</span>
            values<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> idx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
                <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
                    ctx<span class="token punctuation">.</span>_commonExp<span class="token punctuation">.</span>_common<span class="token punctuation">.</span><span class="token function">IsNull</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;SUM(case when </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ctx<span class="token punctuation">.</span>ParsedContent<span class="token punctuation">[</span><span class="token string">&quot;column&quot;</span><span class="token punctuation">]</span></span><span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ctx<span class="token punctuation">.</span><span class="token function">FormatSql</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string"> then 1 else 0 end)&quot;</span></span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    idx <span class="token operator">==</span> values<span class="token punctuation">.</span>Length <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">?</span> <span class="token string">&quot;&#39;&#39;&quot;</span> <span class="token punctuation">:</span> <span class="token string">&quot;&#39;,&#39;&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SelectMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
            values<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>val <span class="token operator">=&gt;</span> 
                <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
                    <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">TValue</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SelectMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">default</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,11);function t(e,o){return p}var u=n(a,[["render",t],["__file","issues-expression-groupbysum.html.vue"]]);export{u as default};
