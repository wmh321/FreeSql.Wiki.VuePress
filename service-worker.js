if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const d=e=>a(e,i),t={module:{uri:i},exports:c,require:d};s[i]=Promise.all(f.map((e=>t[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa99c014"],(function(e){"use strict";e.setCacheNameDetails({prefix:"FreeSql 官方文档"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.2b843a23.js",revision:"003af6bc62df65e1a070cf27b8732e8e"},{url:"assets/404.html.0c8252b8.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.28649d53.js",revision:"52238f39263aa1f121cf8124de2b71be"},{url:"assets/ado.html.1f342313.js",revision:"add444e489592ffec7a75f61ee6eef19"},{url:"assets/ado.html.2b892bb3.js",revision:"24d1ce5cd200820f5bc0ca4e238806b0"},{url:"assets/aop-freesql-autofac.html.615b2949.js",revision:"812ce2c9a49c54766ab22dd075e7f035"},{url:"assets/aop-freesql-autofac.html.7d27debc.js",revision:"b68e8200a1f58bcbea53fbade36eba29"},{url:"assets/aop.html.2948a3f8.js",revision:"43da244f69627a30c4854d889b34d313"},{url:"assets/aop.html.f729293b.js",revision:"cb1c9986fdfd5fb73b762f33251944bc"},{url:"assets/api.html.6e18d711.js",revision:"01ed2b87e2501ddb7f0a16e1e89f0372"},{url:"assets/api.html.dd30bc51.js",revision:"fcef960806ce3c73ddf75406e68a2ef7"},{url:"assets/app.b437aa3f.js",revision:"00d20b28ab15da70174fa75796ae3c3e"},{url:"assets/auto.esm.edfc11f4.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/awesome-freesql.html.69ad72cc.js",revision:"6d23d3d564f4650cb773eb2b01eb4852"},{url:"assets/awesome-freesql.html.c9c60db1.js",revision:"0b94166feb536f0abc981d3af6cf88cd"},{url:"assets/BaseEntity.html.0aaafa33.js",revision:"79dbc4c5f10c8195f40f79aa64e962e2"},{url:"assets/BaseEntity.html.722d8db3.js",revision:"14956c815666abf76f58b68d58aa34d2"},{url:"assets/cascade-delete.html.23767120.js",revision:"a412cd8def192f69ea1e7a8c5dcf8df9"},{url:"assets/cascade-delete.html.d4c8615a.js",revision:"9ebd52916d69e360fa94b762b6b2a5d6"},{url:"assets/cascade-saving.html.776bafe2.js",revision:"bda27cd302e4b67f2638b3304c4105b6"},{url:"assets/Cascade-Saving.html.99cc56b2.js",revision:"01f9187cb1c578a8f31f264307b93df8"},{url:"assets/cascade-saving.html.b31f3828.js",revision:"e571d4ce72b221f138a364a5aa1e5560"},{url:"assets/Cascade-Saving.html.b73a88a8.js",revision:"cfd8e6d08755a353d898eb64c7c9a32a"},{url:"assets/change-log.html.12946527.js",revision:"569176df0a8c6a8620a72f8c40c6ca64"},{url:"assets/change-log.html.33f51b3a.js",revision:"438e724ba327bc94f4d616a2aca623c9"},{url:"assets/code-first.html.37dfb82e.js",revision:"bc4f4b4c67b5744afea41597dd91004d"},{url:"assets/code-first.html.a3d403bc.js",revision:"ce3bc1af490b740e8c5d7486255a0347"},{url:"assets/CodeFirst-Mode.html.071f7cd4.js",revision:"b70aecd7f5f399f46b63904039915cb9"},{url:"assets/CodeFirst-Mode.html.db9ae684.js",revision:"d5fd781b45514c0734730f345a6c330f"},{url:"assets/config-entity-from-db-first.html.0ffcd588.js",revision:"7b507e0f154d8dcbdc527644c47b5eaf"},{url:"assets/config-entity-from-db-first.html.35a028af.js",revision:"3e82f7678f85a64f0c94180f145e92d5"},{url:"assets/contributing.html.df0b7704.js",revision:"574f4d22cd46e126ab192ceeef238dd5"},{url:"assets/contributing.html.f25b0321.js",revision:"757feab49632f2ddaf0467704cc0788f"},{url:"assets/custom-attribute.html.87ecd1a2.js",revision:"c65acbc06b513ac8a1dd8b76b4f28be8"},{url:"assets/custom-attribute.html.8d3439e5.js",revision:"d65e0544446c4f2b98a5b60186f10b30"},{url:"assets/db-context.html.633a353c.js",revision:"64b4dc9ca5be2122452ef2973d38b222"},{url:"assets/db-context.html.f5566979.js",revision:"1520b3c7c3d20b22b65907d08439c182"},{url:"assets/db-first.html.76c5db47.js",revision:"b26aa9dc410bdbd6715e46c0a18d17a3"},{url:"assets/db-first.html.9a2939d4.js",revision:"68abceddd3e0fd6b97e6beb77a716abc"},{url:"assets/Delete-Data.html.1fb3ba05.js",revision:"5769a944c4024745fc66f53097621ff5"},{url:"assets/Delete-Data.html.f289f621.js",revision:"69ed3362f1506aa7b2a48c68ca99282c"},{url:"assets/delete.html.6862ef7b.js",revision:"ef51503b8c02759989ba66a4ab10f650"},{url:"assets/delete.html.874eaea6.js",revision:"364a122a281c92727290489000d42d6d"},{url:"assets/donation.html.3027b6b4.js",revision:"357081adaca19a55294b9b032476874f"},{url:"assets/donation.html.ddbf8208.js",revision:"9cfc772297b6a2e7f3ae577ccbf719f4"},{url:"assets/entity-attribute.html.7505ed95.js",revision:"f3d4bac0b9d065c4ff6c2f227ae7ead5"},{url:"assets/entity-attribute.html.9dba50ac.js",revision:"857b52bd106c0622528984142ee8807c"},{url:"assets/Entity-Relationship.html.6b1a21aa.js",revision:"43d880f265d24a63b786c6173779a54e"},{url:"assets/Entity-Relationship.html.e28ddfc0.js",revision:"c8a7b5a48adbc60df7bae74340de49f7"},{url:"assets/expression-function.html.08c4440d.js",revision:"edfed19a33f4e2e16047a1ac678198a9"},{url:"assets/expression-function.html.4b3edb59.js",revision:"4678e793a742c0526215d57f75eac8f3"},{url:"assets/faq.html.767e9bdc.js",revision:"736bbd80a349c6291ef9a95112759391"},{url:"assets/faq.html.daed729f.js",revision:"2389c491c5e2c2ef7fa1fa319b8351f7"},{url:"assets/filters.html.17b0d868.js",revision:"37ccb6216383d7027dd4ba6444270a92"},{url:"assets/filters.html.b913bcfd.js",revision:"55b356359b07acfa80a79ff8157a3630"},{url:"assets/fluent-api.html.380e5584.js",revision:"3272070aa0af96b2e1afdaa7d951c0ec"},{url:"assets/fluent-api.html.dc6f509c.js",revision:"92a757085841a49f0a1fc696c8c988a3"},{url:"assets/freesql-auditlog.html.1e53dc91.js",revision:"8f0d8cb5ff7b6c21008053ff7971feac"},{url:"assets/freesql-auditlog.html.6a24f6ab.js",revision:"be3670f895f0d329cef4831a6708f15c"},{url:"assets/freesql-docker.html.0c835341.js",revision:"4d1424f93789940685aaf7af13e51197"},{url:"assets/freesql-docker.html.2753a162.js",revision:"6774c993a1e931b2eb4d4f411d5edf34"},{url:"assets/freesql-provider-custom.html.4e9a1227.js",revision:"c6a87e6aba9e1d1ebe238939ad326d27"},{url:"assets/freesql-provider-custom.html.5fea55ad.js",revision:"43f2249d5821ca4f7b817c981ce581b9"},{url:"assets/freesql-provider-mysqlconnector.html.b33adf26.js",revision:"18210ead5e426bdaf299b3f74b1a7562"},{url:"assets/freesql-provider-mysqlconnector.html.bfb13cc9.js",revision:"3272c9993ac1c83f1e239392126d3a7b"},{url:"assets/freesql-provider-odbc.html.6a1ba136.js",revision:"3c484388c4ce0158f1a921fb994e1791"},{url:"assets/freesql-provider-odbc.html.8486754a.js",revision:"88755b9bfa73f03e0fb86bc447606830"},{url:"assets/freesql-provider-oracle.html.c0dcde23.js",revision:"2a457472bda33d0a903269aa4d8a03bf"},{url:"assets/freesql-provider-oracle.html.c3c17396.js",revision:"093033088093813b168b9a212fb34190"},{url:"assets/freesql-provider-postgresql.html.4cb77c8a.js",revision:"09fb2e4fcdd82752f2e5a6aff6face8e"},{url:"assets/freesql-provider-postgresql.html.a4661eb2.js",revision:"4097c974fd780d927072df42f2232387"},{url:"assets/freesql-provider-sqlitecore.html.9e83eb47.js",revision:"dd7b65c2a5c1018d4b2ded84114157b4"},{url:"assets/freesql-provider-sqlitecore.html.a170c617.js",revision:"860515ffa4ea3d3dccafc6ea81da1187"},{url:"assets/getting-started.html.3f537025.js",revision:"480f105fc2b8a92ce995740be0460781"},{url:"assets/getting-started.html.a42a5de0.js",revision:"277806e4c46422b22152b9ffe0511f31"},{url:"assets/getting-started.html.e75dbfde.js",revision:"8711d95705d48389351c6071f83d7be6"},{url:"assets/getting-started.html.f06a697e.js",revision:"b6b26592b87b35a47fffec751e160c1a"},{url:"assets/Greed-Loading.html.7faa8713.js",revision:"0d2a7cfd8072ccd8b4f05f6e495bc5f5"},{url:"assets/Greed-Loading.html.d9378704.js",revision:"56cd6d90119da1d90566eff3f3412f88"},{url:"assets/Group-Aggregation-Query.html.9228d771.js",revision:"e709d86987eef9da81a3109a993eb101"},{url:"assets/Group-Aggregation-Query.html.d5ad68a8.js",revision:"9b9defe9609a03578ffafcdcca358da8"},{url:"assets/highlight.esm.9b852bc5.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/idlebus-freesql.html.357ae2f4.js",revision:"201cfe72ed590305582b7f4fcfc94112"},{url:"assets/idlebus-freesql.html.927430e1.js",revision:"88921f95b989dc00a4ce659df9e09d64"},{url:"assets/ifreesql-context.html.06dcbdf0.js",revision:"0e07d076f5f1a84c657396706aa4c9a7"},{url:"assets/ifreesql-context.html.34a6e6e8.js",revision:"e13fc59d6ad0534e082785e22c01c2d9"},{url:"assets/index.e1c5a3de.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.01fac6fe.js",revision:"9feed1b705e4445ab1d1b51d4c1a6bf9"},{url:"assets/index.html.108ad12a.js",revision:"f279f3a43bd091a9f213bfbc446fcf1e"},{url:"assets/index.html.27cf3aa5.js",revision:"c67b468c5a3c0b5f12179bc38b055ad9"},{url:"assets/index.html.500d5c08.js",revision:"04a28f4b5f91863c493f7a6eb03a6f81"},{url:"assets/index.html.6ed5f718.js",revision:"26c1736f21036d0704e3f0584e642ac6"},{url:"assets/index.html.77ff9958.js",revision:"81bfb69358844bf91d37c18aa47fb9c4"},{url:"assets/index.html.785e2f7c.js",revision:"7e1cb9eb3d605dde3d94c1dcf04c86ed"},{url:"assets/index.html.7d025c24.js",revision:"75aa2a7fcfce103bdf80382b0b5fa037"},{url:"assets/index.html.97a670e2.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.e6620764.js",revision:"d0f402784f26bbb4df1c8f8894701a5f"},{url:"assets/Insert-Data.html.b879f63e.js",revision:"03a4cf954daafaf8bcc54e705e71e8e1"},{url:"assets/Insert-Data.html.c9373859.js",revision:"3c4f9e1af89b378c9863a2169d6b6a2e"},{url:"assets/insert-or-update.html.2dcf2057.js",revision:"37310028dc25fa464958ed273f905166"},{url:"assets/insert-or-update.html.356eeb21.js",revision:"a396d614f6fb0f623f1efcd5306bf567"},{url:"assets/insert-or-update.html.bb499d5b.js",revision:"e7183d7fdc760041a7eca9ee0da831c7"},{url:"assets/insert-or-update.html.cd548066.js",revision:"7af4f5a3292a65773cecae9971b88b4f"},{url:"assets/insert.html.4f53b9a8.js",revision:"f8f3f29cdc5f60e700560fb7a8ff6af4"},{url:"assets/insert.html.58a096a7.js",revision:"fbf589cced3efe33cf42d79a703594d7"},{url:"assets/install.html.014eca2d.js",revision:"be9eacb005c346f5ebeaad0c54a3a1ec"},{url:"assets/install.html.05189f79.js",revision:"b1d871f9e6a8c51d5a8c1b77dda6f5eb"},{url:"assets/install.html.523f38a1.js",revision:"b36927f393b5e4c151d778ed9b2d356a"},{url:"assets/install.html.e081b4ca.js",revision:"bec72d3b6e2c17d10b37add510153619"},{url:"assets/iselect-depcopy.html.2ef9f456.js",revision:"40c24524036274b52fb089f69a70b3f6"},{url:"assets/iselect-depcopy.html.330dbf8b.js",revision:"d2bc0b570b735dc0efd5c573efcd028a"},{url:"assets/issues-expression-groupbysum.html.54cc2cd2.js",revision:"edf44c6062e2fc883a2a7843bacb3a52"},{url:"assets/issues-expression-groupbysum.html.6f80f9cf.js",revision:"96a2d3d4df4d21a511c01988fe0cb7a5"},{url:"assets/issues-in-valuetype.html.814cb7b3.js",revision:"fa381cdb8d03c7e0dfcbc75382739755"},{url:"assets/issues-in-valuetype.html.89cb5627.js",revision:"126c67f2e82be3bb6baf0b83a59827ad"},{url:"assets/issues-mysql5_5.html.00f3b410.js",revision:"3f4c7fae41dd9e6c349417a3572cda68"},{url:"assets/issues-mysql5_5.html.d5519551.js",revision:"443f648a2a9da50a792c6c91937576b8"},{url:"assets/Layout.5e1d9006.js",revision:"361dde3bf5265421f13b50e57c396b97"},{url:"assets/Lazy-Loading.html.4d06473e.js",revision:"cfa8a55b88f1317a91b19571e4bee1c8"},{url:"assets/Lazy-Loading.html.d42beec9.js",revision:"8fdbd961e19ce9eb9f8c8d11a9437790"},{url:"assets/Linq-to-Sql.html.18e947f3.js",revision:"1ce9be78ca92b2e20087e07cbd8eef0c"},{url:"assets/linq-to-sql.html.5b386aed.js",revision:"4cb678fd49d0c16a528ed08a817552cb"},{url:"assets/Linq-to-Sql.html.b9702e77.js",revision:"80e188e7ccd541af0c8f10ecaf9d81a6"},{url:"assets/linq-to-sql.html.da27d586.js",revision:"a0bd2cef10cafc93249241788474372d"},{url:"assets/markdown.esm.77e8db25.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.cb9d4be3.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.35088203.js",revision:"dff54a3d503ff2004c411be3e2992fc9"},{url:"assets/more.html.062328d6.js",revision:"67b03de8e32bda8cd69b5f4deb4eac50"},{url:"assets/more.html.20761d86.js",revision:"ad62dd85ec324825394e4b114b2629f6"},{url:"assets/multi-tenancy.html.320565ab.js",revision:"acbdc1e4a2d1f22f4c0bd8a9c856b504"},{url:"assets/multi-tenancy.html.888c7264.js",revision:"6156462f37926f93477489ce5d41eb73"},{url:"assets/navigate-attribute.html.77e4bef2.js",revision:"ad1680590853703dabc5cb3ac5e10678"},{url:"assets/navigate-attribute.html.7e4781e5.js",revision:"3cc775b8f21786a398125d2fa9c11fb0"},{url:"assets/notes.esm.62c5f19d.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/Pagination.html.73ecae8a.js",revision:"bbfc392f88becadd7d0ba67aa8759108"},{url:"assets/Pagination.html.ea9732d5.js",revision:"8917bd4db4403fdcc490d3961c50ac76"},{url:"assets/paging.html.0ed7bef8.js",revision:"d0769b54378b7dd27e83523e7f01f80e"},{url:"assets/paging.html.43b2891e.js",revision:"bbee31a7ab1944dfafd91bbe66bf3429"},{url:"assets/Parent-Child-Relationship-Query.html.568672a1.js",revision:"943d967111e75e57e32e354e5342339f"},{url:"assets/Parent-Child-Relationship-Query.html.6ade9daa.js",revision:"fd0c39a6c3580c3e918bf00a3170e26f"},{url:"assets/performance.html.6d76e661.js",revision:"d2764de95bcc2b58117cfeb3db04e67d"},{url:"assets/performance.html.8cd38647.js",revision:"55c4bfecd1c19444fc142bf4b3fb558e"},{url:"assets/photoswipe.esm.2debdee5.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/Query-Data.html.773433dd.js",revision:"bb29d541c5084bedbcec4d8285f2ee28"},{url:"assets/Query-Data.html.883bcbc0.js",revision:"223a3ccd00931ce40c040096e3b063da"},{url:"assets/Query-from-Multi-Table.html.00d1b2e6.js",revision:"376c81a5a3e135f88096cd14963b00fe"},{url:"assets/Query-from-Multi-Table.html.294abb32.js",revision:"4e4ab794ee4ece34266873ff10755413"},{url:"assets/Query-from-Single-Table.html.254f9336.js",revision:"cc74cf935746b5bbe9ac9ec9edc30fae"},{url:"assets/Query-from-Single-Table.html.8c7fc7a3.js",revision:"a899537694bbd86f302a148b4d07ba41"},{url:"assets/read-write-splitting.html.5cf72ec5.js",revision:"0dedd43e33b8b931a6a75ba81a037944"},{url:"assets/read-write-splitting.html.614efca3.js",revision:"1e8220bea242d3011ca5fc3df6547b9d"},{url:"assets/Repository-Layer.html.174ec94b.js",revision:"630585d1231f655dcdcd280190011594"},{url:"assets/Repository-Layer.html.4411fed7.js",revision:"3689d0a80e5cb38040965dedeb88990d"},{url:"assets/repository.html.3b561e9d.js",revision:"ea7cba64414bf8a519c3df27f29fee81"},{url:"assets/repository.html.8e9d67ab.js",revision:"d446f220c4d266901f2e714eccefc88c"},{url:"assets/Return-Data.html.4bef8687.js",revision:"d9ef8bb6cda36419cd39fe6407ce76a5"},{url:"assets/Return-Data.html.c7f9da8c.js",revision:"ebfaf0c882ff5fac6146d503df8eeb27"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.esm.04894411.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/select-as-tree.html.1838f739.js",revision:"549dc93ef793a39502cdac91d10274b5"},{url:"assets/select-as-tree.html.3a909c06.js",revision:"5f3f5b939db9a5062c0d994763af5b29"},{url:"assets/select-group-by.html.60bdf8ec.js",revision:"bfe9b2afa529d0c2a17a44d06d26d20b"},{url:"assets/select-group-by.html.7399c809.js",revision:"16bad7ebb1819a08b037ea2f431e90fd"},{url:"assets/select-include.html.1b29e39f.js",revision:"8e5db0f573980bbc0902a8e9195a8f94"},{url:"assets/select-include.html.2d0e1948.js",revision:"43f7e3ed201afde5e4d8bfcf50d5a251"},{url:"assets/select-lazy-loading.html.9f70ae9f.js",revision:"49a9efdb1e02b1b42f85e58346664579"},{url:"assets/select-lazy-loading.html.d39674f6.js",revision:"d9ff4e3177055a207fe979fdac07bee3"},{url:"assets/select-multi-table.html.04c98074.js",revision:"a2bb5788c0e88e796dd8a80563de82ee"},{url:"assets/select-multi-table.html.b2779650.js",revision:"8ac167a583fc465030631cc34c062fa9"},{url:"assets/select-return-data.html.8a4d5ff7.js",revision:"c62092bac2e53ed6fa0ce83cf4ce5eb2"},{url:"assets/select-return-data.html.fca662d3.js",revision:"cbb59d547b2a169d8bbd2860ed391ea5"},{url:"assets/select-single-table.html.72e48ea8.js",revision:"1908e58ebbe4c3d73332aeca97b73118"},{url:"assets/select-single-table.html.77b53552.js",revision:"bb50e84b358759d0c174440fb5ee8f5b"},{url:"assets/select.html.2706e7c5.js",revision:"5e5540c0bc8bbb2068accbe28ba580ae"},{url:"assets/select.html.af6445b7.js",revision:"b52cfc24cc0433f5dbdb376b5a1d8420"},{url:"assets/service-support.html.61e8f998.js",revision:"2d3931890ea181c7d089b5e12542f14a"},{url:"assets/service-support.html.7fa5f63e.js",revision:"ac1c5d3b8c2d1f48c950159a2661515c"},{url:"assets/sharding.html.73ece191.js",revision:"d839861341191cd98705cc04b93b276e"},{url:"assets/sharding.html.751f3c4b.js",revision:"80a0012c1e9196e5e221ada00c1ce787"},{url:"assets/SkipLink.41e5b5b5.js",revision:"854af0b425f3699547848699dfaecd3f"},{url:"assets/Slide.e77ed2eb.js",revision:"6c07c4f1a0cb0756229712dc6c0e7d82"},{url:"assets/style.f6e962fb.css",revision:"5040a739afce07a778a31848bfa5923b"},{url:"assets/transaction.html.9117a809.js",revision:"41488d46bc92da0d11688092a166655d"},{url:"assets/transaction.html.debaada5.js",revision:"fe508c0d557dcea033adcddf162c3e77"},{url:"assets/type-mapping.html.edf8fbe2.js",revision:"1f2892dc10b72e216e3ee720d73a834f"},{url:"assets/type-mapping.html.eef284d6.js",revision:"63cfa216cca1efdb91c26f6165adf23d"},{url:"assets/Unit-of-Work-Manager.html.445ffefa.js",revision:"7cc84181b323156bf9bc1ee03d4a1c05"},{url:"assets/Unit-of-Work-Manager.html.f7e43f34.js",revision:"0bae6ec96f14ff6735124c6ed4196164"},{url:"assets/Unit-of-Work.html.68527af9.js",revision:"6c3f91d59e4f4cea3b9c6e05cd48efb0"},{url:"assets/Unit-of-Work.html.6fef0251.js",revision:"f3f5ef2e34fe33482dcf2118936ff52b"},{url:"assets/unit-of-work.html.79cb2f48.js",revision:"d0d862b0d474725da3bfe8aac151dac8"},{url:"assets/unit-of-work.html.e9c11121.js",revision:"dd435f9a0ad171d1a5a78c4ac1dff3dd"},{url:"assets/unitofwork-manager.html.0ce6c009.js",revision:"8201b8ecd1111e34e1139b2e4ac12d42"},{url:"assets/unitofwork-manager.html.c8ffa067.js",revision:"daeb2ee3e2a6aa09f94df2b7afab695a"},{url:"assets/Update-Data.html.1d1e55ce.js",revision:"ac630bbe1085fe39e811189d13da45f5"},{url:"assets/Update-Data.html.b6b0707c.js",revision:"e512ccba85c86613fa18b49ea13df51b"},{url:"assets/update.html.3f87671e.js",revision:"e32531cd561ecec38c816288efc11449"},{url:"assets/update.html.9316ef43.js",revision:"b9cd233f6c57886f2900d9cebc5277c9"},{url:"assets/vs-dapper.html.8c4e22aa.js",revision:"b642fab2ec3ffd9b67c6c5423b36928d"},{url:"assets/vs-dapper.html.e751cc21.js",revision:"d1b96791cd2a8c0adcb69b360d50d794"},{url:"assets/vs-entity-framework.html.2af8db67.js",revision:"6a94320f03af61bcb6738bcdeab83e61"},{url:"assets/vs-entity-framework.html.5157544e.js",revision:"0290b54406029dd1405e250c09f31aa8"},{url:"assets/With-Sql.html.02c6e902.js",revision:"c5c9815e13829039933011a4fefc4b2d"},{url:"assets/With-Sql.html.4f74fea8.js",revision:"c6cff5bfb1cf5c6b39af09e74e6e02e7"},{url:"assets/withsql.html.52e1292c.js",revision:"564ea6dda6976f9b7b2725c129e5f7f3"},{url:"assets/withsql.html.8df9a5ac.js",revision:"95a36c994672300896417e6255288418"},{url:"assets/withtempquery.html.34431ecd.js",revision:"c182ee0a11deaaff6f96a428c66a6c49"},{url:"assets/withtempquery.html.ae97e928.js",revision:"dda28d70e1f4c944bd34bf14bf889553"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"c73d9780f8990170b96a16fceba69b55"},{url:"404.html",revision:"c6a07fdcfb6d158f3f62923a79246ec3"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
