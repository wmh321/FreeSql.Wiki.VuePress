if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const d=e=>a(e,i),c={module:{uri:i},exports:t,require:d};s[i]=Promise.all(f.map((e=>c[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-fa99c014"],(function(e){"use strict";e.setCacheNameDetails({prefix:"FreeSql 官方文档"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.3f126066.js",revision:"03cef3d92f8f7500729338ae68bcb3d3"},{url:"assets/404.html.0c8252b8.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.28649d53.js",revision:"52238f39263aa1f121cf8124de2b71be"},{url:"assets/ado.html.1f342313.js",revision:"add444e489592ffec7a75f61ee6eef19"},{url:"assets/ado.html.60844646.js",revision:"53d8d00d9ab65dcb3f792348c4eb80c4"},{url:"assets/aop-freesql-autofac.html.615b2949.js",revision:"812ce2c9a49c54766ab22dd075e7f035"},{url:"assets/aop-freesql-autofac.html.acf82df0.js",revision:"879123a4e866da437fac7bbbe2bed100"},{url:"assets/aop.html.2948a3f8.js",revision:"43da244f69627a30c4854d889b34d313"},{url:"assets/aop.html.481de69b.js",revision:"b9d7826d8e97a9d5043d8ada1585a047"},{url:"assets/api.html.6e18d711.js",revision:"01ed2b87e2501ddb7f0a16e1e89f0372"},{url:"assets/api.html.72dd0823.js",revision:"bc964a0396ea9c3450f21c8880b3c31a"},{url:"assets/app.480b4915.js",revision:"9a465b73c5f4f0231791a803ac7db69b"},{url:"assets/auto.esm.edfc11f4.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/awesome-freesql.html.a3325eb3.js",revision:"b0c03fb6045a6213be1967d4f4e66608"},{url:"assets/awesome-freesql.html.c9c60db1.js",revision:"0b94166feb536f0abc981d3af6cf88cd"},{url:"assets/BaseEntity.html.605bdc26.js",revision:"3490f32a8b0c700a2c9e92c03380b6b5"},{url:"assets/BaseEntity.html.722d8db3.js",revision:"14956c815666abf76f58b68d58aa34d2"},{url:"assets/cascade-delete.html.0f114a9a.js",revision:"196430da0c5f449ffb60ca78c6fb037a"},{url:"assets/cascade-delete.html.23767120.js",revision:"a412cd8def192f69ea1e7a8c5dcf8df9"},{url:"assets/Cascade-Saving.html.88e0e55b.js",revision:"f4258cb3a11bea8ab5dce278487b62f9"},{url:"assets/Cascade-Saving.html.99cc56b2.js",revision:"01f9187cb1c578a8f31f264307b93df8"},{url:"assets/cascade-saving.html.b31f3828.js",revision:"e571d4ce72b221f138a364a5aa1e5560"},{url:"assets/cascade-saving.html.bc0b2e96.js",revision:"474f41cda569df97e2239df2506b40ea"},{url:"assets/change-log.html.2122014a.js",revision:"15f80df765319d1bfb4c7923a32a054d"},{url:"assets/change-log.html.41422a0e.js",revision:"fc03e323a9240ce87121601f59865c89"},{url:"assets/code-first.html.3646f531.js",revision:"de0b836465ddb519de4b6663c07b5308"},{url:"assets/code-first.html.a3295375.js",revision:"79c060d0ee05fa0a7a333c06c3d1ad56"},{url:"assets/CodeFirst-Mode.html.071f7cd4.js",revision:"b70aecd7f5f399f46b63904039915cb9"},{url:"assets/CodeFirst-Mode.html.db9ae684.js",revision:"d5fd781b45514c0734730f345a6c330f"},{url:"assets/config-entity-from-db-first.html.35a028af.js",revision:"3e82f7678f85a64f0c94180f145e92d5"},{url:"assets/config-entity-from-db-first.html.b991fc76.js",revision:"3982167b842e05f4e7f21033c7129736"},{url:"assets/contributing.html.df0b7704.js",revision:"574f4d22cd46e126ab192ceeef238dd5"},{url:"assets/contributing.html.f25b0321.js",revision:"757feab49632f2ddaf0467704cc0788f"},{url:"assets/custom-attribute.html.2bb647e3.js",revision:"c48f8806a9e77a7ef242e6060d4158fa"},{url:"assets/custom-attribute.html.8d3439e5.js",revision:"d65e0544446c4f2b98a5b60186f10b30"},{url:"assets/db-context.html.d2b02a7a.js",revision:"590af1b301ef8d1fc0ff416733152f34"},{url:"assets/db-context.html.f5566979.js",revision:"1520b3c7c3d20b22b65907d08439c182"},{url:"assets/db-first.html.35c575bc.js",revision:"9031032224c507b07e67e67280af7619"},{url:"assets/db-first.html.76c5db47.js",revision:"b26aa9dc410bdbd6715e46c0a18d17a3"},{url:"assets/Delete-Data.html.1fb3ba05.js",revision:"5769a944c4024745fc66f53097621ff5"},{url:"assets/Delete-Data.html.c6ec11d6.js",revision:"e1d04a0ce1dc4ab3c2502274d3478b58"},{url:"assets/delete.html.2b2b5182.js",revision:"db6cbb99515e37e52df6806aa25f7ef0"},{url:"assets/delete.html.6862ef7b.js",revision:"ef51503b8c02759989ba66a4ab10f650"},{url:"assets/donation.html.3027b6b4.js",revision:"357081adaca19a55294b9b032476874f"},{url:"assets/donation.html.b389a9a0.js",revision:"f4ded28e8f137780af5e4faa51aaa758"},{url:"assets/entity-attribute.html.1db0e6d1.js",revision:"b14ce1652e5b94a29765dfc24e58f7ee"},{url:"assets/entity-attribute.html.7505ed95.js",revision:"f3d4bac0b9d065c4ff6c2f227ae7ead5"},{url:"assets/Entity-Relationship.html.d0ac7cbb.js",revision:"212bc8bd921bbb4efa0ca54b1e658ae4"},{url:"assets/Entity-Relationship.html.e28ddfc0.js",revision:"c8a7b5a48adbc60df7bae74340de49f7"},{url:"assets/expression-function.html.08c4440d.js",revision:"edfed19a33f4e2e16047a1ac678198a9"},{url:"assets/expression-function.html.439e3518.js",revision:"749b7a719cd454d170506abf758ab9e3"},{url:"assets/faq.html.181b6a9b.js",revision:"364eacbc2ff3f1d6bf3e5d1a37e0fbd5"},{url:"assets/faq.html.767e9bdc.js",revision:"736bbd80a349c6291ef9a95112759391"},{url:"assets/filters.html.17b0d868.js",revision:"37ccb6216383d7027dd4ba6444270a92"},{url:"assets/filters.html.5ac9c9ff.js",revision:"1514ecda692b3796658018670fe76d1d"},{url:"assets/fluent-api.html.3b2d1dc5.js",revision:"55aef5418cd10a45386daa31f0fd4cfe"},{url:"assets/fluent-api.html.ec0af312.js",revision:"ef78634f09fc7ce9b0b13c731e539d8b"},{url:"assets/freesql-auditlog.html.72f8fc26.js",revision:"e413d4751f9c09bee0e6ab92bf1c3955"},{url:"assets/freesql-auditlog.html.742683b5.js",revision:"b3840e53a871ce71203e5a1767f0bfcf"},{url:"assets/freesql-docker.html.0c835341.js",revision:"4d1424f93789940685aaf7af13e51197"},{url:"assets/freesql-docker.html.4c36bdf9.js",revision:"9d1de75d4b5d5909f855bde48fc1958b"},{url:"assets/freesql-provider-custom.html.5fea55ad.js",revision:"43f2249d5821ca4f7b817c981ce581b9"},{url:"assets/freesql-provider-custom.html.d34fed57.js",revision:"150af8be1d77c4c92efb8c72431fa16b"},{url:"assets/freesql-provider-mysqlconnector.html.bfb13cc9.js",revision:"3272c9993ac1c83f1e239392126d3a7b"},{url:"assets/freesql-provider-mysqlconnector.html.d3a0d0f6.js",revision:"54bfde452ecba69c1da353f0f95a179d"},{url:"assets/freesql-provider-odbc.html.3b6e7437.js",revision:"8e7ba5edb45a1262b5674ab5d79f7430"},{url:"assets/freesql-provider-odbc.html.6a1ba136.js",revision:"3c484388c4ce0158f1a921fb994e1791"},{url:"assets/freesql-provider-oracle.html.58232723.js",revision:"cc154f63d8da503a26f95d3d797879de"},{url:"assets/freesql-provider-oracle.html.c3c17396.js",revision:"093033088093813b168b9a212fb34190"},{url:"assets/freesql-provider-postgresql.html.4cb77c8a.js",revision:"09fb2e4fcdd82752f2e5a6aff6face8e"},{url:"assets/freesql-provider-postgresql.html.a099321d.js",revision:"3b41c1fa8a895cdeedc020a65bae2f77"},{url:"assets/freesql-provider-sqlitecore.html.87ea97fc.js",revision:"1e1727de6dc1eeb82e1c3b980ea9755a"},{url:"assets/freesql-provider-sqlitecore.html.a170c617.js",revision:"860515ffa4ea3d3dccafc6ea81da1187"},{url:"assets/getting-started.html.2b913266.js",revision:"b72ee93fa3005b721dd146156a019fbd"},{url:"assets/getting-started.html.88293390.js",revision:"c8ffc94d49f837f183ca938abc945a1a"},{url:"assets/getting-started.html.bab879bb.js",revision:"93f5f67932dd9cdf30e2732d26ba3b2a"},{url:"assets/getting-started.html.c4154b99.js",revision:"b377dd44a43b84775d6420518b5945d9"},{url:"assets/Greed-Loading.html.7faa8713.js",revision:"0d2a7cfd8072ccd8b4f05f6e495bc5f5"},{url:"assets/Greed-Loading.html.caf7a6e6.js",revision:"e8efa217ab2f1cef5d8db7337811f02c"},{url:"assets/Group-Aggregation-Query.html.9228d771.js",revision:"e709d86987eef9da81a3109a993eb101"},{url:"assets/Group-Aggregation-Query.html.d549cd36.js",revision:"a99447a5bca43fea8c2f3090745d43ae"},{url:"assets/highlight.esm.9b852bc5.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/idlebus-freesql.html.44530000.js",revision:"cc3aa0969b9f48020c9490995d06e217"},{url:"assets/idlebus-freesql.html.927430e1.js",revision:"88921f95b989dc00a4ce659df9e09d64"},{url:"assets/ifreesql-context.html.9892f6a7.js",revision:"add8583c31bc4e9f83b17a10e8821990"},{url:"assets/ifreesql-context.html.f0a3177f.js",revision:"b4f6fc66bc63a5d8ddc82b1702703390"},{url:"assets/index.e1c5a3de.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.01fac6fe.js",revision:"9feed1b705e4445ab1d1b51d4c1a6bf9"},{url:"assets/index.html.108ad12a.js",revision:"f279f3a43bd091a9f213bfbc446fcf1e"},{url:"assets/index.html.27cf3aa5.js",revision:"c67b468c5a3c0b5f12179bc38b055ad9"},{url:"assets/index.html.61912a16.js",revision:"392ec7349ba9f03fd4edc590b31a55e0"},{url:"assets/index.html.76db569d.js",revision:"d147a7f068c28eacc0eaeee536e87b46"},{url:"assets/index.html.77ff9958.js",revision:"81bfb69358844bf91d37c18aa47fb9c4"},{url:"assets/index.html.97a670e2.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.df9a54b1.js",revision:"a6ce5712b7e2858700f632e94ee3b36f"},{url:"assets/index.html.e68b91f4.js",revision:"9ea15f16bde15994aa53de0ac220b82e"},{url:"assets/index.html.e987fdaf.js",revision:"0612e99b772215b310d8d7ac4085369a"},{url:"assets/Insert-Data.html.970ea607.js",revision:"4cbb21adf8fbaba1831a2d1a7a06b44e"},{url:"assets/Insert-Data.html.c9373859.js",revision:"3c4f9e1af89b378c9863a2169d6b6a2e"},{url:"assets/insert-or-update.html.356eeb21.js",revision:"a396d614f6fb0f623f1efcd5306bf567"},{url:"assets/insert-or-update.html.b96a2f4a.js",revision:"c565c0b60055e66c37bf681651947488"},{url:"assets/insert-or-update.html.bb499d5b.js",revision:"e7183d7fdc760041a7eca9ee0da831c7"},{url:"assets/insert-or-update.html.eb19f6d2.js",revision:"82e6a1048223f9a0a40c349ed3f03f60"},{url:"assets/insert.html.0d5e5610.js",revision:"38ea656031cbd490996744b3dbdcd83a"},{url:"assets/insert.html.89b9b1ad.js",revision:"3c7e72f5e809d25cfe9318870e8a0a79"},{url:"assets/install.html.014eca2d.js",revision:"be9eacb005c346f5ebeaad0c54a3a1ec"},{url:"assets/install.html.523f38a1.js",revision:"b36927f393b5e4c151d778ed9b2d356a"},{url:"assets/install.html.c2fba708.js",revision:"9853b0471665c164e7caaad0527692eb"},{url:"assets/install.html.e3472b1a.js",revision:"8aa4c4b53a9f844d36e0011ab4d848c6"},{url:"assets/iselect-depcopy.html.330dbf8b.js",revision:"d2bc0b570b735dc0efd5c573efcd028a"},{url:"assets/iselect-depcopy.html.60bd0dba.js",revision:"794d980946cdca9736f20ab6ef0a519b"},{url:"assets/issues-expression-groupbysum.html.6f80f9cf.js",revision:"96a2d3d4df4d21a511c01988fe0cb7a5"},{url:"assets/issues-expression-groupbysum.html.da54930f.js",revision:"9741fdbc68e5f052264029d29ef3cdd9"},{url:"assets/issues-in-valuetype.html.34292a8e.js",revision:"69acfd74a798cea02b5967d6eb7b5dae"},{url:"assets/issues-in-valuetype.html.89cb5627.js",revision:"126c67f2e82be3bb6baf0b83a59827ad"},{url:"assets/issues-mysql5_5.html.00f3b410.js",revision:"3f4c7fae41dd9e6c349417a3572cda68"},{url:"assets/issues-mysql5_5.html.c8d79a3c.js",revision:"8906096f23ff11f3eda60829b2dba67a"},{url:"assets/Layout.d9e1b9e1.js",revision:"eb5efb4b32db0e12898609fe046db969"},{url:"assets/Lazy-Loading.html.49be2f04.js",revision:"6fbd38bae3758bb64c0698a60edc23c9"},{url:"assets/Lazy-Loading.html.d42beec9.js",revision:"8fdbd961e19ce9eb9f8c8d11a9437790"},{url:"assets/Linq-to-Sql.html.18e947f3.js",revision:"1ce9be78ca92b2e20087e07cbd8eef0c"},{url:"assets/linq-to-sql.html.b54b2fcb.js",revision:"92570fabcc0e1dcee3e5f27facb19229"},{url:"assets/linq-to-sql.html.da27d586.js",revision:"a0bd2cef10cafc93249241788474372d"},{url:"assets/Linq-to-Sql.html.ed4bf753.js",revision:"372c11d82e53af2c219e4965bdf8c238"},{url:"assets/markdown.esm.77e8db25.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.cb9d4be3.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.35088203.js",revision:"dff54a3d503ff2004c411be3e2992fc9"},{url:"assets/more.html.0841d646.js",revision:"fbf64fc4ca390be702d85f4137f087e2"},{url:"assets/more.html.9b6f3ddd.js",revision:"8c93f819dbeb3a3edc5b2e72df2302da"},{url:"assets/multi-tenancy.html.1f084822.js",revision:"3907d0330c1bc3e1ee40dd72d080b0db"},{url:"assets/multi-tenancy.html.93a2d4c7.js",revision:"8d6aecda8e319761c033b3d405734b7b"},{url:"assets/navigate-attribute.html.7e4781e5.js",revision:"3cc775b8f21786a398125d2fa9c11fb0"},{url:"assets/navigate-attribute.html.967ab3aa.js",revision:"4a5f59715f3f1076cdb3af54712adebb"},{url:"assets/notes.esm.62c5f19d.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/Pagination.html.d2001b7c.js",revision:"57e494d49a11a5f21a4fdcb26b6b6bcd"},{url:"assets/Pagination.html.ea9732d5.js",revision:"8917bd4db4403fdcc490d3961c50ac76"},{url:"assets/paging.html.5b21d5fd.js",revision:"840b7772a92de404eff90b2e67182401"},{url:"assets/paging.html.fd3ca4b0.js",revision:"2048adebf12d5bb616587f5c45c39ff0"},{url:"assets/Parent-Child-Relationship-Query.html.568672a1.js",revision:"943d967111e75e57e32e354e5342339f"},{url:"assets/Parent-Child-Relationship-Query.html.7da2acba.js",revision:"64315d2b460a2acad4fc2206334949f5"},{url:"assets/performance.html.8cd38647.js",revision:"55c4bfecd1c19444fc142bf4b3fb558e"},{url:"assets/performance.html.eb3ad5e4.js",revision:"c9dec38fe3740409a458c4f2fd0e7fe3"},{url:"assets/photoswipe.esm.2debdee5.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/Query-Data.html.710b70ff.js",revision:"09b0c2e4430fe69495874939afd9e266"},{url:"assets/Query-Data.html.883bcbc0.js",revision:"223a3ccd00931ce40c040096e3b063da"},{url:"assets/Query-from-Multi-Table.html.294abb32.js",revision:"4e4ab794ee4ece34266873ff10755413"},{url:"assets/Query-from-Multi-Table.html.dc2c6df5.js",revision:"6217ca7ef9d2301a0db87a78f5895ac3"},{url:"assets/Query-from-Single-Table.html.0969f358.js",revision:"c8aa6992215fe7d87ce3f2886be5c96b"},{url:"assets/Query-from-Single-Table.html.254f9336.js",revision:"cc74cf935746b5bbe9ac9ec9edc30fae"},{url:"assets/read-write-splitting.html.5cf72ec5.js",revision:"0dedd43e33b8b931a6a75ba81a037944"},{url:"assets/read-write-splitting.html.608c2856.js",revision:"0fce7606e6fed478e603bc7c19627455"},{url:"assets/Repository-Layer.html.4411fed7.js",revision:"3689d0a80e5cb38040965dedeb88990d"},{url:"assets/Repository-Layer.html.d4ae632a.js",revision:"c85c28724ee92a0ede41d0f32733b4d6"},{url:"assets/repository.html.3b561e9d.js",revision:"ea7cba64414bf8a519c3df27f29fee81"},{url:"assets/repository.html.9e72313d.js",revision:"56ddaf4a80f8b21253f2b5fbe8f06905"},{url:"assets/Return-Data.html.4bef8687.js",revision:"d9ef8bb6cda36419cd39fe6407ce76a5"},{url:"assets/Return-Data.html.6466c323.js",revision:"24c49ab21c243b6694e0e023c8af40b1"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.esm.04894411.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/select-as-tree.html.3a909c06.js",revision:"5f3f5b939db9a5062c0d994763af5b29"},{url:"assets/select-as-tree.html.f7b522c5.js",revision:"36b7dcd477958ba0ad185712373f6c80"},{url:"assets/select-group-by.html.476fda88.js",revision:"f432928ef411ec107aee5187ce0ed0b8"},{url:"assets/select-group-by.html.7399c809.js",revision:"16bad7ebb1819a08b037ea2f431e90fd"},{url:"assets/select-include.html.2d0e1948.js",revision:"43f7e3ed201afde5e4d8bfcf50d5a251"},{url:"assets/select-include.html.e7970f48.js",revision:"f883ff8ee43105dcefc90cfd5d028f61"},{url:"assets/select-lazy-loading.html.1f63fb20.js",revision:"38ccb7f7648438355f53799e928e5600"},{url:"assets/select-lazy-loading.html.9f70ae9f.js",revision:"49a9efdb1e02b1b42f85e58346664579"},{url:"assets/select-multi-table.html.b2779650.js",revision:"8ac167a583fc465030631cc34c062fa9"},{url:"assets/select-multi-table.html.d90a9893.js",revision:"3a765e844c77bc63573eeea6188082ea"},{url:"assets/select-return-data.html.9a5cfd44.js",revision:"0c28c3667bdcc02dd8aed07757bb94e8"},{url:"assets/select-return-data.html.d1bfd0f1.js",revision:"82341d409ca6b3c59f0f164877f8652c"},{url:"assets/select-single-table.html.c2fbdfad.js",revision:"e8cdbfb565c953e22be0a17e673a2576"},{url:"assets/select-single-table.html.f15ab558.js",revision:"3bab7c828dacff60da89c3439f90787a"},{url:"assets/select.html.2706e7c5.js",revision:"5e5540c0bc8bbb2068accbe28ba580ae"},{url:"assets/select.html.b63ba9bf.js",revision:"a15edea37f42cf30732e1dde563a95fa"},{url:"assets/service-support.html.61e8f998.js",revision:"2d3931890ea181c7d089b5e12542f14a"},{url:"assets/service-support.html.735875eb.js",revision:"6713068ce79ff522265be70f2977337a"},{url:"assets/sharding.html.9f19627a.js",revision:"8b6d7b0b49ffca6506fffff0a0ba110e"},{url:"assets/sharding.html.b78b8e83.js",revision:"7384651ec8721e33cd5876049f65106d"},{url:"assets/SkipLink.2da429b6.js",revision:"be2573533938d5a81bcf6832e046739a"},{url:"assets/Slide.2a4b09eb.js",revision:"a11984c7a2edbfd53f8da797ce00741b"},{url:"assets/style.f6e962fb.css",revision:"5040a739afce07a778a31848bfa5923b"},{url:"assets/transaction.html.9117a809.js",revision:"41488d46bc92da0d11688092a166655d"},{url:"assets/transaction.html.eaeb1ba7.js",revision:"da0e5597b40aa7e712083637c9f1ef90"},{url:"assets/type-mapping.html.044067f5.js",revision:"6144294140d74303a4254a2deaf994d2"},{url:"assets/type-mapping.html.edf8fbe2.js",revision:"1f2892dc10b72e216e3ee720d73a834f"},{url:"assets/Unit-of-Work-Manager.html.4c0ffb9a.js",revision:"0b6660b91e84a757d72186467781b530"},{url:"assets/Unit-of-Work-Manager.html.f7e43f34.js",revision:"0bae6ec96f14ff6735124c6ed4196164"},{url:"assets/Unit-of-Work.html.29bc886c.js",revision:"6c0eedaa20a77f155202d85dae07bbb6"},{url:"assets/Unit-of-Work.html.6fef0251.js",revision:"f3f5ef2e34fe33482dcf2118936ff52b"},{url:"assets/unit-of-work.html.a866d328.js",revision:"f94a523f42f1c6bf91ba958755012110"},{url:"assets/unit-of-work.html.e9c11121.js",revision:"dd435f9a0ad171d1a5a78c4ac1dff3dd"},{url:"assets/unitofwork-manager.html.8f435b30.js",revision:"d0a4d4b1fd931852673571d72675a655"},{url:"assets/unitofwork-manager.html.fd308869.js",revision:"b7ccaa2daed838c930a37419ac886dcc"},{url:"assets/Update-Data.html.b6b0707c.js",revision:"e512ccba85c86613fa18b49ea13df51b"},{url:"assets/Update-Data.html.e6c3894d.js",revision:"c360211c7f10000b42e65092b5720e9e"},{url:"assets/update.html.2260e927.js",revision:"996ebe04dad98240b46af2249adb0c10"},{url:"assets/update.html.9316ef43.js",revision:"b9cd233f6c57886f2900d9cebc5277c9"},{url:"assets/vs-dapper.html.e754f6c4.js",revision:"64758a0e856ae32f526ab09a2a4bb84b"},{url:"assets/vs-dapper.html.fd63a96f.js",revision:"2132951702fccec719263ff426b882a2"},{url:"assets/vs-entity-framework.html.2af8db67.js",revision:"6a94320f03af61bcb6738bcdeab83e61"},{url:"assets/vs-entity-framework.html.6e1f2f50.js",revision:"f432020587de6ff62c66c2b394c0e229"},{url:"assets/With-Sql.html.02c6e902.js",revision:"c5c9815e13829039933011a4fefc4b2d"},{url:"assets/With-Sql.html.2f845c48.js",revision:"f6e06575b3c2fddb0f535623e52d3be1"},{url:"assets/withsql.html.8df9a5ac.js",revision:"95a36c994672300896417e6255288418"},{url:"assets/withsql.html.a31adc1c.js",revision:"33847ccd968ab279d9e927b21df04e6a"},{url:"assets/withtempquery.html.e88dbce0.js",revision:"d1ebbf63e4a5df5e67cb8df0782c5a14"},{url:"assets/withtempquery.html.ff98815f.js",revision:"6e8c7404bcf367b6be15698b8f579c1a"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"89248727aa6b0058e2d3731d3f261ce8"},{url:"404.html",revision:"463d0ae79ffb206562652d5a65c12905"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
