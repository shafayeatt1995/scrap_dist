(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{554:function(t,r,e){"use strict";var n=e(555).has;t.exports=function(t){return n(t),t}},555:function(t,r,e){"use strict";var n=e(5),o=Set.prototype;t.exports={Set:Set,add:n(o.add),has:n(o.has),remove:n(o.delete),proto:o}},556:function(t,r,e){"use strict";var n=e(5),o=e(340),c=e(555),f=c.Set,l=c.proto,v=n(l.forEach),d=n(l.keys),h=d(new f).next;t.exports=function(t,r,e){return e?o({iterator:d(t),next:h},r):v(t,r)}},557:function(t,r,e){"use strict";var n=e(39),o=e(9),c=e(566),f=e(17),l=n("Set");t.exports=function(t){return function(t){return f(t)&&"number"==typeof t.size&&o(t.has)&&o(t.keys)}(t)?t:c(t)?new l(t):t}},558:function(t,r,e){"use strict";var n=e(45),o=e(19),c=e(13),f=e(85),l=e(568),v="Invalid size",d=RangeError,h=TypeError,m=Math.max,x=function(t,r){this.set=t,this.size=m(r,0),this.has=n(t.has),this.keys=n(t.keys)};x.prototype={getIterator:function(){return l(o(c(this.keys,this.set)))},includes:function(t){return c(this.has,this.set,t)}},t.exports=function(t){o(t);var r=+t.size;if(r!=r)throw new h(v);var e=f(r);if(e<0)throw new d(v);return new x(t,e)}},559:function(t,r,e){"use strict";var n=e(341),o=e(555);t.exports=n(o.proto,"size","get")||function(t){return t.size}},560:function(t,r,e){"use strict";var n=e(555),o=e(556),c=n.Set,f=n.add;t.exports=function(t){var r=new c;return o(t,(function(t){f(r,t)})),r}},561:function(t,r,e){"use strict";e(562)},562:function(t,r,e){"use strict";e(223)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),e(342))},563:function(t,r,e){"use strict";var n=e(0),o=e(554),c=e(555).add;n({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var t=o(this),r=0,e=arguments.length;r<e;r++)c(t,arguments[r]);return t}})},564:function(t,r,e){"use strict";var n=e(0),o=e(554),c=e(555).remove;n({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,r=o(this),e=!0,n=0,f=arguments.length;n<f;n++)t=c(r,arguments[n]),e=e&&t;return!!e}})},565:function(t,r,e){"use strict";var n=e(0),o=e(13),c=e(557),f=e(567);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){return o(f,this,c(t))}})},566:function(t,r,e){"use strict";var n=e(108),o=e(18),c=e(53),f=e(11),l=e(107),v=f("iterator"),d=Object;t.exports=function(t){if(c(t))return!1;var r=d(t);return void 0!==r[v]||"@@iterator"in r||o(l,n(r))}},567:function(t,r,e){"use strict";var n=e(554),o=e(555),c=e(560),f=e(559),l=e(558),v=e(556),d=e(340),h=o.has,m=o.remove;t.exports=function(t){var r=n(this),e=l(t),o=c(r);return f(r)<=e.size?v(r,(function(t){e.includes(t)&&m(o,t)})):d(e.getIterator(),(function(t){h(r,t)&&m(o,t)})),o}},568:function(t,r,e){"use strict";t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},569:function(t,r,e){"use strict";var n=e(0),o=e(33),c=e(554),f=e(556);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var r=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!1!==f(r,(function(t){if(!e(t,t,r))return!1}),!0)}})},570:function(t,r,e){"use strict";var n=e(0),o=e(33),c=e(554),f=e(555),l=e(556),v=f.Set,d=f.add;n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var r=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),n=new v;return l(r,(function(t){e(t,t,r)&&d(n,t)})),n}})},571:function(t,r,e){"use strict";var n=e(0),o=e(33),c=e(554),f=e(556);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var r=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),n=f(r,(function(t){if(e(t,t,r))return{value:t}}),!0);return n&&n.value}})},572:function(t,r,e){"use strict";var n=e(0),o=e(13),c=e(557),f=e(573);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){return o(f,this,c(t))}})},573:function(t,r,e){"use strict";var n=e(554),o=e(555),c=e(559),f=e(558),l=e(556),v=e(340),d=o.Set,h=o.add,m=o.has;t.exports=function(t){var r=n(this),e=f(t),o=new d;return c(r)>e.size?v(e.getIterator(),(function(t){m(r,t)&&h(o,t)})):l(r,(function(t){e.includes(t)&&h(o,t)})),o}},574:function(t,r,e){"use strict";var n=e(0),o=e(13),c=e(557),f=e(575);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){return o(f,this,c(t))}})},575:function(t,r,e){"use strict";var n=e(554),o=e(555).has,c=e(559),f=e(558),l=e(556),v=e(340),d=e(221);t.exports=function(t){var r=n(this),e=f(t);if(c(r)<=e.size)return!1!==l(r,(function(t){if(e.includes(t))return!1}),!0);var h=e.getIterator();return!1!==v(h,(function(t){if(o(r,t))return d(h,"normal",!1)}))}},576:function(t,r,e){"use strict";var n=e(0),o=e(13),c=e(557),f=e(577);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){return o(f,this,c(t))}})},577:function(t,r,e){"use strict";var n=e(554),o=e(559),c=e(556),f=e(558);t.exports=function(t){var r=n(this),e=f(t);return!(o(r)>e.size)&&!1!==c(r,(function(t){if(!e.includes(t))return!1}),!0)}},578:function(t,r,e){"use strict";var n=e(0),o=e(13),c=e(557),f=e(579);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){return o(f,this,c(t))}})},579:function(t,r,e){"use strict";var n=e(554),o=e(555).has,c=e(559),f=e(558),l=e(340),v=e(221);t.exports=function(t){var r=n(this),e=f(t);if(c(r)<e.size)return!1;var d=e.getIterator();return!1!==l(d,(function(t){if(!o(r,t))return v(d,"normal",!1)}))}},580:function(t,r,e){"use strict";var n=e(0),o=e(5),c=e(554),f=e(556),l=e(20),v=o([].join),d=o([].push);n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var r=c(this),e=void 0===t?",":l(t),n=[];return f(r,(function(t){d(n,t)})),v(n,e)}})},581:function(t,r,e){"use strict";var n=e(0),o=e(33),c=e(554),f=e(555),l=e(556),v=f.Set,d=f.add;n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var r=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),n=new v;return l(r,(function(t){d(n,e(t,t,r))})),n}})},582:function(t,r,e){"use strict";var n=e(0),o=e(45),c=e(554),f=e(556),l=TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var r=c(this),e=arguments.length<2,n=e?void 0:arguments[1];if(o(t),f(r,(function(o){e?(e=!1,n=o):n=t(n,o,o,r)})),e)throw new l("Reduce of empty set with no initial value");return n}})},583:function(t,r,e){"use strict";var n=e(0),o=e(33),c=e(554),f=e(556);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var r=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!0===f(r,(function(t){if(e(t,t,r))return!0}),!0)}})},584:function(t,r,e){"use strict";var n=e(0),o=e(13),c=e(557),f=e(585);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){return o(f,this,c(t))}})},585:function(t,r,e){"use strict";var n=e(554),o=e(555),c=e(560),f=e(558),l=e(340),v=o.add,d=o.has,h=o.remove;t.exports=function(t){var r=n(this),e=f(t).getIterator(),o=c(r);return l(e,(function(t){d(r,t)?h(o,t):v(o,t)})),o}},586:function(t,r,e){"use strict";var n=e(0),o=e(13),c=e(557),f=e(587);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){return o(f,this,c(t))}})},587:function(t,r,e){"use strict";var n=e(554),o=e(555).add,c=e(560),f=e(558),l=e(340);t.exports=function(t){var r=n(this),e=f(t).getIterator(),v=c(r);return l(e,(function(t){o(v,t)})),v}},589:function(t,r,e){"use strict";e.r(r);var n=e(8),o=(e(64),e(54),e(12),e(561),e(30),e(563),e(564),e(565),e(569),e(570),e(571),e(572),e(574),e(576),e(578),e(580),e(581),e(582),e(583),e(584),e(586),e(31),e(52),{name:"ScrapPage",data:function(){return{url:"",loading:!1}},watch:{url:function(t){t.length>0&&this.extract()}},methods:{extract:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var e,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t.loading=!0,r.next=4,t.$scrapApi.addDoctorFromSitemap({url:t.url});case 4:e=r.sent,data=e.data,console.log(data),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.log(r.t0.message);case 12:return r.prev=12,t.loading=!1,r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})))()},fetchSitemap:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n,o,c,f,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t.loading=!0,r.next=4,t.$scrapApi.scrapSitemap({url:t.url});case 4:return e=r.sent,n=e.data,o=new DOMParser,c=o.parseFromString(n,"text/xml"),f=Array.from(c.getElementsByTagName("loc")).map((function(t){return t.textContent})),l=Array.from(new Set(f)).map((function(t){return{url:t,ref:"doctorbangladesh_pages"}})),r.next=12,t.$scrapApi.addSitemap({urls:l});case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(0),console.log(r.t0.message);case 17:return r.prev=17,t.loading=!1,r.finish(17);case 20:case"end":return r.stop()}}),r,null,[[0,14,17,20]])})))()},pasteFromClipboard:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var text;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,navigator.clipboard.readText();case 3:text=r.sent,t.url=text,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Failed to read clipboard contents:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}}),c=e(37),component=Object(c.a)(o,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"container mx-auto"},[r("h1",{staticClass:"text-8xl"},[t._v("Scrap sitemap")]),t._v(" "),r("form",{staticClass:"flex gap-3",on:{submit:function(r){return r.preventDefault(),t.extract.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"border border-sky-500 w-full",domProps:{value:t.url},on:{click:t.pasteFromClipboard,input:function(r){r.target.composing||(t.url=r.target.value)}}}),t._v(" "),r("Button",{attrs:{type:"submit",loading:t.loading}},[t._v("Extract")])],1)])}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{Button:e(222).default})}}]);
//# sourceMappingURL=195b990.js.map