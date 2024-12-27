<pre class="wrapper"><code class="themed shade7"
		><span class="line-number themed shade1 bg-shade0"> 1 </span><span class="themed accent6"
			>import</span
		> map <span class="themed accent6">from</span> <span class="themed accent3">'map.js'</span>;
<span class="line-number themed shade1 bg-shade0"> 2 </span><span class="themed accent6"
			>import</span
		> basePickBy <span class="themed accent6">from</span> <span class="themed accent3"
			>'./.internal/basePickBy.js'</span
		>;
<span class="line-number themed shade1 bg-shade0"> 3 </span><span class="themed accent6"
			>import</span
		> getAllKeysIn <span class="themed accent6">from</span> <span class="themed accent3"
			>'./.internal/getAllKeysIn.js'</span
		>;
<span class="line-number themed shade1 bg-shade0"> 4 </span>
<span class="line-number themed shade1 bg-shade0"> 5 </span><span class="themed shade3">/**</span>
<span class="line-number themed shade1 bg-shade0"> 6 </span><span
			class="themed shade3"> * Creates an object composed of the `object` properties `predicate` returns</span
		>
<span class="line-number themed shade1 bg-shade0"> 7 </span><span
			class="themed shade3"> * truthy for. The predicate is invoked with two arguments: (value, key).</span
		>
<span class="line-number themed shade1 bg-shade0"> 8 </span><span class="themed shade3"> */</span>
<span class="line-number themed shade1 bg-shade0"> 9 </span><span class="themed accent7"
			>function</span
		> <span class="themed accent2">pickBy</span>(object, predicate) {'{'}
<span class="line-number themed shade1 bg-shade0">10 </span>  <span class="themed accent5">if</span
		> (object <span class="themed accent5">==</span> <span class="themed accent7">null</span>) {'{'}
<span class="line-number themed shade1 bg-shade0">11 </span>    <span class="themed accent5"
			>return</span
		> {'{}'};
<span class="line-number themed shade1 bg-shade0">12 </span>  {'}'}
<span class="line-number themed shade1 bg-shade0">13 </span>  <span class="themed accent7"
			>const</span
		> props <span class="themed accent5">=</span> map(getAllKeysIn(object), prop <span
			class="themed accent7">=></span
		> [prop]);
<span class="line-number themed shade1 bg-shade0">14 </span>  <span class="themed accent5"
			>return</span
		> basePickBy(object, props, (value, path) <span class="themed accent7">=></span
		> predicate(value, path[<span class="themed accent0">0</span>]));
<span class="line-number themed shade1 bg-shade0">15 </span>{'}'}
<span class="line-number themed shade1 bg-shade0">16 </span>
<span class="line-number themed shade1 bg-shade0">17 </span><span class="themed accent6"
			>export</span
		> <span class="themed accent7">default</span> pickBy;</code
	></pre>

<style>
	.wrapper {
		padding-left: 0;
	}
	.line-number {
		position: sticky;
		left: 0;
		padding-left: var(--size-small-1);
	}
</style>
