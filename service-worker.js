if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const t=e=>a(e,i),d={module:{uri:i},exports:c,require:t};s[i]=Promise.all(f.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa99c014"],(function(e){"use strict";e.setCacheNameDetails({prefix:"FreeSql 官方文档"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.a0d09c5d.js",revision:"881cade7c6899838e82c0faed1e19111"},{url:"assets/404.html.0c8252b8.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.28649d53.js",revision:"52238f39263aa1f121cf8124de2b71be"},{url:"assets/ado.html.1f342313.js",revision:"add444e489592ffec7a75f61ee6eef19"},{url:"assets/ado.html.420a35d9.js",revision:"f77d7c594737328ddf06d31f4376e9cf"},{url:"assets/aop-freesql-autofac.html.615b2949.js",revision:"812ce2c9a49c54766ab22dd075e7f035"},{url:"assets/aop-freesql-autofac.html.e7ca1ec2.js",revision:"0eef30aa7eafe00d784afb96fefbd97a"},{url:"assets/aop.html.2948a3f8.js",revision:"43da244f69627a30c4854d889b34d313"},{url:"assets/aop.html.ed21480a.js",revision:"80b7ac5357235f39f33549f673b3ecf2"},{url:"assets/api.html.35eac25d.js",revision:"5b8ae9c1d3cbcad30059afba429e338f"},{url:"assets/api.html.6e18d711.js",revision:"01ed2b87e2501ddb7f0a16e1e89f0372"},{url:"assets/app.822cde61.js",revision:"743c9960083a37c9bcd2431eb6b0f0b7"},{url:"assets/auto.esm.edfc11f4.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/awesome-freesql.html.55fe5198.js",revision:"d576e0330321f864c2b869c41f2b62f6"},{url:"assets/awesome-freesql.html.c9c60db1.js",revision:"0b94166feb536f0abc981d3af6cf88cd"},{url:"assets/BaseEntity.html.722d8db3.js",revision:"14956c815666abf76f58b68d58aa34d2"},{url:"assets/BaseEntity.html.e48be58e.js",revision:"9604aafa3d32aadc3749e370ab63c316"},{url:"assets/cascade-delete.html.1e944df9.js",revision:"0ec9016f572ecfec4740a8d2723327a9"},{url:"assets/cascade-delete.html.23767120.js",revision:"a412cd8def192f69ea1e7a8c5dcf8df9"},{url:"assets/Cascade-Saving.html.240b14ae.js",revision:"fbb22c15551ec6ea2e0ae6d231bd6146"},{url:"assets/Cascade-Saving.html.99cc56b2.js",revision:"01f9187cb1c578a8f31f264307b93df8"},{url:"assets/cascade-saving.html.b31f3828.js",revision:"e571d4ce72b221f138a364a5aa1e5560"},{url:"assets/cascade-saving.html.c6aec658.js",revision:"a2c209671f094e2fae631651588ead25"},{url:"assets/change-log.html.061d6fe9.js",revision:"ddb2acc5948da9c1cf11eac001979652"},{url:"assets/change-log.html.2122014a.js",revision:"15f80df765319d1bfb4c7923a32a054d"},{url:"assets/code-first.html.3646f531.js",revision:"de0b836465ddb519de4b6663c07b5308"},{url:"assets/code-first.html.7d5bb0c1.js",revision:"b2ecdf5b68fcf6be9f9878fdd9aca45f"},{url:"assets/CodeFirst-Mode.html.071f7cd4.js",revision:"b70aecd7f5f399f46b63904039915cb9"},{url:"assets/CodeFirst-Mode.html.db9ae684.js",revision:"d5fd781b45514c0734730f345a6c330f"},{url:"assets/config-entity-from-db-first.html.35a028af.js",revision:"3e82f7678f85a64f0c94180f145e92d5"},{url:"assets/config-entity-from-db-first.html.46317b6f.js",revision:"0c0eb61cea3ae0c0581d25438495ebf1"},{url:"assets/contributing.html.df0b7704.js",revision:"574f4d22cd46e126ab192ceeef238dd5"},{url:"assets/contributing.html.f25b0321.js",revision:"757feab49632f2ddaf0467704cc0788f"},{url:"assets/custom-attribute.html.23a4cf6d.js",revision:"23791fca444fb28d585337decc24168c"},{url:"assets/custom-attribute.html.8d3439e5.js",revision:"d65e0544446c4f2b98a5b60186f10b30"},{url:"assets/db-context.html.1d59df03.js",revision:"dcba29d2650e256de7f4294d9254537d"},{url:"assets/db-context.html.f5566979.js",revision:"1520b3c7c3d20b22b65907d08439c182"},{url:"assets/db-first.html.12bbee36.js",revision:"6f976c2796cd2d35e55bdbb4aa2123ec"},{url:"assets/db-first.html.76c5db47.js",revision:"b26aa9dc410bdbd6715e46c0a18d17a3"},{url:"assets/Delete-Data.html.1fb3ba05.js",revision:"5769a944c4024745fc66f53097621ff5"},{url:"assets/Delete-Data.html.a124ad4e.js",revision:"71e26d7d04e7d4019cd70541d93d2465"},{url:"assets/delete.html.1b8eac09.js",revision:"83af1a31d6a166ed805948d8cfdcdc53"},{url:"assets/delete.html.6862ef7b.js",revision:"ef51503b8c02759989ba66a4ab10f650"},{url:"assets/donation.html.3027b6b4.js",revision:"357081adaca19a55294b9b032476874f"},{url:"assets/donation.html.e0cd8258.js",revision:"68f2658ba4d36f7d46f744439a6b8c5b"},{url:"assets/entity-attribute.html.7505ed95.js",revision:"f3d4bac0b9d065c4ff6c2f227ae7ead5"},{url:"assets/entity-attribute.html.ccd23aca.js",revision:"d1199728a7b1438a2dc99cda4a03a3d8"},{url:"assets/Entity-Relationship.html.04191e73.js",revision:"284f7f110b468bd333f805f648a4d143"},{url:"assets/Entity-Relationship.html.e28ddfc0.js",revision:"c8a7b5a48adbc60df7bae74340de49f7"},{url:"assets/expression-function.html.08c4440d.js",revision:"edfed19a33f4e2e16047a1ac678198a9"},{url:"assets/expression-function.html.60a0d640.js",revision:"b8add5be20e5985ba95a641bb3290161"},{url:"assets/faq.html.767e9bdc.js",revision:"736bbd80a349c6291ef9a95112759391"},{url:"assets/faq.html.e0aea610.js",revision:"fb77f4f5fd6fcd9f79e0089f68de5b0c"},{url:"assets/filters.html.17b0d868.js",revision:"37ccb6216383d7027dd4ba6444270a92"},{url:"assets/filters.html.538502df.js",revision:"a1b036feffcfbbcc38a269a39ad40173"},{url:"assets/fluent-api.html.944d14ab.js",revision:"10af90f9a8d4e296458d5aea0097c87e"},{url:"assets/fluent-api.html.dc6f509c.js",revision:"92a757085841a49f0a1fc696c8c988a3"},{url:"assets/freesql-auditlog.html.6a24f6ab.js",revision:"be3670f895f0d329cef4831a6708f15c"},{url:"assets/freesql-auditlog.html.f1d606d6.js",revision:"6fe197be2d9f7f4aeae4954f7f530d8c"},{url:"assets/freesql-docker.html.0c835341.js",revision:"4d1424f93789940685aaf7af13e51197"},{url:"assets/freesql-docker.html.68bf9c65.js",revision:"0b3d67fcf09da18d512e1b83529e5355"},{url:"assets/freesql-provider-custom.html.5fea55ad.js",revision:"43f2249d5821ca4f7b817c981ce581b9"},{url:"assets/freesql-provider-custom.html.74a356c7.js",revision:"612f0d22a7ea7bf88ccdc042834882c6"},{url:"assets/freesql-provider-mysqlconnector.html.86f9d94d.js",revision:"466c53fab86b7354ae705d65497198fa"},{url:"assets/freesql-provider-mysqlconnector.html.bfb13cc9.js",revision:"3272c9993ac1c83f1e239392126d3a7b"},{url:"assets/freesql-provider-odbc.html.6a1ba136.js",revision:"3c484388c4ce0158f1a921fb994e1791"},{url:"assets/freesql-provider-odbc.html.861a7375.js",revision:"602d6234179d24e82544dff5b24897b1"},{url:"assets/freesql-provider-oracle.html.212a5430.js",revision:"11af64a0919740549a8335153c805461"},{url:"assets/freesql-provider-oracle.html.c3c17396.js",revision:"093033088093813b168b9a212fb34190"},{url:"assets/freesql-provider-postgresql.html.4cb77c8a.js",revision:"09fb2e4fcdd82752f2e5a6aff6face8e"},{url:"assets/freesql-provider-postgresql.html.de600388.js",revision:"2d79389971db7274ad61ea9e4187cb8b"},{url:"assets/freesql-provider-sqlitecore.html.4ebf0e3f.js",revision:"2d9eb08de914d2a841492fa7df1ae412"},{url:"assets/freesql-provider-sqlitecore.html.a170c617.js",revision:"860515ffa4ea3d3dccafc6ea81da1187"},{url:"assets/getting-started.html.1d4de578.js",revision:"37a5104a821e26e7850d775451e11f89"},{url:"assets/getting-started.html.3f537025.js",revision:"480f105fc2b8a92ce995740be0460781"},{url:"assets/getting-started.html.6bae4460.js",revision:"e6e684bed6a061f5ff7dadb89cfe7991"},{url:"assets/getting-started.html.f06a697e.js",revision:"b6b26592b87b35a47fffec751e160c1a"},{url:"assets/Greed-Loading.html.7faa8713.js",revision:"0d2a7cfd8072ccd8b4f05f6e495bc5f5"},{url:"assets/Greed-Loading.html.bcfa195f.js",revision:"88d69b9adc13355ea3662ec5a4b729b5"},{url:"assets/Group-Aggregation-Query.html.07b399e9.js",revision:"a3583176860fc4a04ce2c4aba60439b6"},{url:"assets/Group-Aggregation-Query.html.9228d771.js",revision:"e709d86987eef9da81a3109a993eb101"},{url:"assets/highlight.esm.9b852bc5.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/idlebus-freesql.html.927430e1.js",revision:"88921f95b989dc00a4ce659df9e09d64"},{url:"assets/idlebus-freesql.html.fb59e547.js",revision:"259cea9ae0a0e2bfbb36fbf5ec322107"},{url:"assets/ifreesql-context.html.06dcbdf0.js",revision:"0e07d076f5f1a84c657396706aa4c9a7"},{url:"assets/ifreesql-context.html.a36bec4f.js",revision:"ba2b60ac697bebc59108687ad3a5b0c3"},{url:"assets/index.e1c5a3de.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.01fac6fe.js",revision:"9feed1b705e4445ab1d1b51d4c1a6bf9"},{url:"assets/index.html.0cd3e456.js",revision:"10e2df5b00a501e27467d3d1ac54568e"},{url:"assets/index.html.108ad12a.js",revision:"f279f3a43bd091a9f213bfbc446fcf1e"},{url:"assets/index.html.27cf3aa5.js",revision:"c67b468c5a3c0b5f12179bc38b055ad9"},{url:"assets/index.html.3154936c.js",revision:"6e846a9446c4a8f21e3ea8dba7885492"},{url:"assets/index.html.77ff9958.js",revision:"81bfb69358844bf91d37c18aa47fb9c4"},{url:"assets/index.html.82e6adab.js",revision:"a4ee470cb4f5786cb1e84e34e93bdce2"},{url:"assets/index.html.97a670e2.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.e68b91f4.js",revision:"9ea15f16bde15994aa53de0ac220b82e"},{url:"assets/index.html.f6552c68.js",revision:"93c17fdab7023ee34638daf9097e2cc5"},{url:"assets/Insert-Data.html.9e8dac7e.js",revision:"504a257cc982ef0304717bac5968dfd8"},{url:"assets/Insert-Data.html.c9373859.js",revision:"3c4f9e1af89b378c9863a2169d6b6a2e"},{url:"assets/insert-or-update.html.039ca6f5.js",revision:"3954b25c6b2c4f214d48343f66cb57bd"},{url:"assets/insert-or-update.html.356eeb21.js",revision:"a396d614f6fb0f623f1efcd5306bf567"},{url:"assets/insert-or-update.html.9ad58180.js",revision:"74477b6e5cb2f944dbac928ab34a60ff"},{url:"assets/insert-or-update.html.bb499d5b.js",revision:"e7183d7fdc760041a7eca9ee0da831c7"},{url:"assets/insert.html.34a4d499.js",revision:"939659283dc2037029cf77546ee6576e"},{url:"assets/insert.html.4f53b9a8.js",revision:"f8f3f29cdc5f60e700560fb7a8ff6af4"},{url:"assets/install.html.014eca2d.js",revision:"be9eacb005c346f5ebeaad0c54a3a1ec"},{url:"assets/install.html.191e37ed.js",revision:"d05422d467751a1047f0ea4e8e6f763f"},{url:"assets/install.html.523f38a1.js",revision:"b36927f393b5e4c151d778ed9b2d356a"},{url:"assets/install.html.89c2fdc1.js",revision:"40849ae93cce437e52740d0cd2581692"},{url:"assets/iselect-depcopy.html.330dbf8b.js",revision:"d2bc0b570b735dc0efd5c573efcd028a"},{url:"assets/iselect-depcopy.html.bf480643.js",revision:"776ec919e246779bf308fee340f4486a"},{url:"assets/issues-expression-groupbysum.html.14582b3d.js",revision:"b098f48aaf9d5e3d58ca142164e99c13"},{url:"assets/issues-expression-groupbysum.html.6f80f9cf.js",revision:"96a2d3d4df4d21a511c01988fe0cb7a5"},{url:"assets/issues-in-valuetype.html.86d94956.js",revision:"833bb8e89ce000cad957c052c8b92ac9"},{url:"assets/issues-in-valuetype.html.89cb5627.js",revision:"126c67f2e82be3bb6baf0b83a59827ad"},{url:"assets/issues-mysql5_5.html.00f3b410.js",revision:"3f4c7fae41dd9e6c349417a3572cda68"},{url:"assets/issues-mysql5_5.html.c38c06b5.js",revision:"2ea99a4e399f531797d2b61b7ecb6740"},{url:"assets/Layout.c1e69238.js",revision:"8101bb185723a6dbb6ff9d77d8f014a5"},{url:"assets/Lazy-Loading.html.940215f2.js",revision:"695b3f3777723aed85b9b81d13f12fa1"},{url:"assets/Lazy-Loading.html.d42beec9.js",revision:"8fdbd961e19ce9eb9f8c8d11a9437790"},{url:"assets/Linq-to-Sql.html.18e947f3.js",revision:"1ce9be78ca92b2e20087e07cbd8eef0c"},{url:"assets/linq-to-sql.html.ab894541.js",revision:"3bee56905e27ba8541e4accba1c92cc4"},{url:"assets/Linq-to-Sql.html.c9a98de7.js",revision:"cb698d9d7fc7103c34f50955ac09f848"},{url:"assets/linq-to-sql.html.da27d586.js",revision:"a0bd2cef10cafc93249241788474372d"},{url:"assets/markdown.esm.77e8db25.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.cb9d4be3.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.35088203.js",revision:"dff54a3d503ff2004c411be3e2992fc9"},{url:"assets/more.html.9b6f3ddd.js",revision:"8c93f819dbeb3a3edc5b2e72df2302da"},{url:"assets/more.html.fd61a8b2.js",revision:"1296ee771197b23be899448146c2b1d3"},{url:"assets/multi-tenancy.html.320565ab.js",revision:"acbdc1e4a2d1f22f4c0bd8a9c856b504"},{url:"assets/multi-tenancy.html.edbdd084.js",revision:"fd3e9ed03cb6d7945f35b6b3479ada87"},{url:"assets/navigate-attribute.html.7e4781e5.js",revision:"3cc775b8f21786a398125d2fa9c11fb0"},{url:"assets/navigate-attribute.html.fa24eead.js",revision:"ea7f6c63bc728db1abd1df5a4a773979"},{url:"assets/notes.esm.62c5f19d.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/Pagination.html.a6be5e70.js",revision:"e137427036840c69c5b88f2ca14d30af"},{url:"assets/Pagination.html.ea9732d5.js",revision:"8917bd4db4403fdcc490d3961c50ac76"},{url:"assets/paging.html.43b2891e.js",revision:"bbee31a7ab1944dfafd91bbe66bf3429"},{url:"assets/paging.html.6efc6103.js",revision:"206077961e77e13cc9685c4fb3449b0e"},{url:"assets/Parent-Child-Relationship-Query.html.4879e68b.js",revision:"350f447cacbd2823096733e5ff046792"},{url:"assets/Parent-Child-Relationship-Query.html.568672a1.js",revision:"943d967111e75e57e32e354e5342339f"},{url:"assets/performance.html.8cd38647.js",revision:"55c4bfecd1c19444fc142bf4b3fb558e"},{url:"assets/performance.html.d8c094f7.js",revision:"151c226c5883548d7af17e31b80924c5"},{url:"assets/photoswipe.esm.2debdee5.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/Query-Data.html.883bcbc0.js",revision:"223a3ccd00931ce40c040096e3b063da"},{url:"assets/Query-Data.html.be1238b3.js",revision:"273c3afe0539018c03088aaa57e3599f"},{url:"assets/Query-from-Multi-Table.html.294abb32.js",revision:"4e4ab794ee4ece34266873ff10755413"},{url:"assets/Query-from-Multi-Table.html.cd0c7936.js",revision:"65bead2624e0f7757002df5f718af496"},{url:"assets/Query-from-Single-Table.html.254f9336.js",revision:"cc74cf935746b5bbe9ac9ec9edc30fae"},{url:"assets/Query-from-Single-Table.html.f4b21b5d.js",revision:"5c4a1be2353f51858b7d8b592b9a2bc5"},{url:"assets/read-write-splitting.html.22619f43.js",revision:"8e7e84b46c18c885172b769c631d68bc"},{url:"assets/read-write-splitting.html.5cf72ec5.js",revision:"0dedd43e33b8b931a6a75ba81a037944"},{url:"assets/Repository-Layer.html.4411fed7.js",revision:"3689d0a80e5cb38040965dedeb88990d"},{url:"assets/Repository-Layer.html.b781c236.js",revision:"338afe959639d6c99f194f0031341391"},{url:"assets/repository.html.3b561e9d.js",revision:"ea7cba64414bf8a519c3df27f29fee81"},{url:"assets/repository.html.7fe5eff1.js",revision:"a9cd6574d4cd3f16e13aa27ef9b5319e"},{url:"assets/Return-Data.html.4bef8687.js",revision:"d9ef8bb6cda36419cd39fe6407ce76a5"},{url:"assets/Return-Data.html.8f905d99.js",revision:"2f8c0b328ea18e1b4e5f95eef079526a"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.esm.04894411.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/select-as-tree.html.3a909c06.js",revision:"5f3f5b939db9a5062c0d994763af5b29"},{url:"assets/select-as-tree.html.446293a9.js",revision:"fecf3271af47bb07b9407f1479339af0"},{url:"assets/select-group-by.html.7399c809.js",revision:"16bad7ebb1819a08b037ea2f431e90fd"},{url:"assets/select-group-by.html.90e5bc62.js",revision:"723a66845c8781d07ce693b40efb697c"},{url:"assets/select-include.html.2d0e1948.js",revision:"43f7e3ed201afde5e4d8bfcf50d5a251"},{url:"assets/select-include.html.fcaeb5c7.js",revision:"c7db82c627133e773b9736616866ddab"},{url:"assets/select-lazy-loading.html.9c8bfaf7.js",revision:"5f4069d3392c23f4553e5290a8dbd866"},{url:"assets/select-lazy-loading.html.9f70ae9f.js",revision:"49a9efdb1e02b1b42f85e58346664579"},{url:"assets/select-multi-table.html.b2779650.js",revision:"8ac167a583fc465030631cc34c062fa9"},{url:"assets/select-multi-table.html.efc4cfdb.js",revision:"06990d67b49e5bc7794c9ca400ab1c5e"},{url:"assets/select-return-data.html.76d46528.js",revision:"7d6b86cfd0859c1e7721cfbd0a0eefea"},{url:"assets/select-return-data.html.d1bfd0f1.js",revision:"82341d409ca6b3c59f0f164877f8652c"},{url:"assets/select-single-table.html.c2fbdfad.js",revision:"e8cdbfb565c953e22be0a17e673a2576"},{url:"assets/select-single-table.html.c6e98e55.js",revision:"6415a932a7ede195bf359696810c2c25"},{url:"assets/select.html.2706e7c5.js",revision:"5e5540c0bc8bbb2068accbe28ba580ae"},{url:"assets/select.html.81734114.js",revision:"d87055232b8b78a44ae2a640d36cbace"},{url:"assets/service-support.html.61e8f998.js",revision:"2d3931890ea181c7d089b5e12542f14a"},{url:"assets/service-support.html.66748b76.js",revision:"e7fc42830570919bc26b6d91cdc566d0"},{url:"assets/sharding.html.1f2812ef.js",revision:"76ed316ab69a1004b1b04c3f40a4c47d"},{url:"assets/sharding.html.73ece191.js",revision:"d839861341191cd98705cc04b93b276e"},{url:"assets/SkipLink.3e4ada66.js",revision:"95469d60644b1b66af301ace6acc761e"},{url:"assets/Slide.770109ba.js",revision:"b4da542d2c273c9f65f492d532cea20f"},{url:"assets/style.f6e962fb.css",revision:"5040a739afce07a778a31848bfa5923b"},{url:"assets/transaction.html.558f7fe4.js",revision:"892601059efad8e438f5d71406b4f140"},{url:"assets/transaction.html.9117a809.js",revision:"41488d46bc92da0d11688092a166655d"},{url:"assets/type-mapping.html.aa92d3c7.js",revision:"a62844d55d500dacb5e1a5a4381dbee1"},{url:"assets/type-mapping.html.edf8fbe2.js",revision:"1f2892dc10b72e216e3ee720d73a834f"},{url:"assets/Unit-of-Work-Manager.html.6f9f6433.js",revision:"d193dbffb99ac46ef0dac02ebb163c8e"},{url:"assets/Unit-of-Work-Manager.html.f7e43f34.js",revision:"0bae6ec96f14ff6735124c6ed4196164"},{url:"assets/unit-of-work.html.2e5eb1b5.js",revision:"4d31a83a104e88e679fee1169455a7d7"},{url:"assets/Unit-of-Work.html.6fef0251.js",revision:"f3f5ef2e34fe33482dcf2118936ff52b"},{url:"assets/Unit-of-Work.html.ca12d1f6.js",revision:"e81fc12eb9130811c82afa38e24e80cb"},{url:"assets/unit-of-work.html.e9c11121.js",revision:"dd435f9a0ad171d1a5a78c4ac1dff3dd"},{url:"assets/unitofwork-manager.html.0ce6c009.js",revision:"8201b8ecd1111e34e1139b2e4ac12d42"},{url:"assets/unitofwork-manager.html.43dc39e4.js",revision:"4af0333d8fa618f79f4b84710b268ec2"},{url:"assets/Update-Data.html.4658b8b4.js",revision:"4d855addb41cf833e61b9dbeaa4947b5"},{url:"assets/Update-Data.html.b6b0707c.js",revision:"e512ccba85c86613fa18b49ea13df51b"},{url:"assets/update.html.8827fa99.js",revision:"7208a024d68e140723ac1a663bd79418"},{url:"assets/update.html.9316ef43.js",revision:"b9cd233f6c57886f2900d9cebc5277c9"},{url:"assets/vs-dapper.html.7ce5db86.js",revision:"963120f64424e8f92339d87721858bec"},{url:"assets/vs-dapper.html.8c4e22aa.js",revision:"b642fab2ec3ffd9b67c6c5423b36928d"},{url:"assets/vs-entity-framework.html.0877e7b7.js",revision:"993319d7669171100b0fb055d0183b6f"},{url:"assets/vs-entity-framework.html.2af8db67.js",revision:"6a94320f03af61bcb6738bcdeab83e61"},{url:"assets/With-Sql.html.02c6e902.js",revision:"c5c9815e13829039933011a4fefc4b2d"},{url:"assets/With-Sql.html.aa02a363.js",revision:"f7150b6862ad95498b3a78519e599cf5"},{url:"assets/withsql.html.8df9a5ac.js",revision:"95a36c994672300896417e6255288418"},{url:"assets/withsql.html.9029e6f7.js",revision:"c367aaa8dc658caafcc20cba14dee89b"},{url:"assets/withtempquery.html.d3134ce7.js",revision:"d6134240736e5672f63fd67ccb222130"},{url:"assets/withtempquery.html.e88dbce0.js",revision:"d1ebbf63e4a5df5e67cb8df0782c5a14"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"e208e8e4a5c84dff8cf23d27f66a99a5"},{url:"404.html",revision:"cc02274bba9d6ed753a4ce61aaacdb1d"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
