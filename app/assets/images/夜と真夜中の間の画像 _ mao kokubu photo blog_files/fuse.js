(function(){var k,q,n,p;k=encodeURIComponent;q=function(e,b){return{get:function(a){return(a=document.cookie.match(new RegExp("\\b"+a+"=([^;]*)")))?b(a[1]):""},set:function(a,d,c){c=c||{};a=e(a)+"="+b(d);null==d&&(c.maxage=-1);c.maxage&&(c.expires=new Date(+new Date+c.maxage));c.path&&(a+="; path="+c.path);c.domain&&(a+="; domain="+c.domain);c.expires&&(a+="; expires="+c.expires.toUTCString());c.secure&&(a+="; secure");document.cookie=a}}}(k,decodeURIComponent);n=function(){function e(b){return null===
b?"null":void 0===b?"undefined":Object.prototype.toString.call(b).slice(8,-1).toLowerCase()}return{get:e,is:function(b,a){return b===e(a)}}}();p=function(e){return function(b,a){if(b&&e.is("number",b.length))for(var d=0;d<b.length;d++)a.call(b[d],b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(b[d],b[d],d);return b}}(n);(function(e,b,a){var d=window,c=d.AmebaMineObject||"Fuse",f=d[c]&&d[c].q||[],g=d[c]=b(e,{c:"init"});a(f,function(a){g.apply(g,a)})})(function(e,b,a,d,c,f){function g(a,d){this.init.call(this,
a,d)}function g(a){this.init.call(this,a,void 0)}function k(){var a=e.get("__CCID");e.set("__CCID",a||c(),{domain:location.domain,path:"/",maxage:31536E6});return e.get("__CCID")}function n(a,c,e){var f=new Image;d.is("function",e)&&(f.onerror=f.onload=function(a){a=a||window.event;delete f.onload;delete f.onerror;"error"===a.type?e(a,null):e(null,a)});c=b(c);f.src=a+"?"+c}var h=("https:"==location.protocol?"https:":"http:")+"//ln.ameba.jp",m={target:"qt",referrer:"qr",cookie:"qc",as_id:"qa",as_user_id:"qaui",
action_type:"qat",version:"qv",page_id:"qpi",inflow_id:"qii",active_user:"qau",session_id:"qsi",service_user_id:"qsui",category:"qcat",userstatus:"qust",notification:"qno",location:"qlo",device_time:"qdt",platform:"qpl",device_id:"qdi",ad_id:"qadi",np_user_id:"qnui",os:"qos",os_version:"qov",os_user_id:"qoui",ip:"qip",useragent:"qua",time:"qti",device_model:"qdm",roles:"qro",c1:"qca",c2:"qcb",c3:"qcc",c4:"qcd",c5:"qce",c6:"qef"},l=g.prototype;l.init=function(d,c){this.a={referrer:document.referrer,
target:location.href};this.b=c?h+"/"+c+"/"+a(d):h+"/"+a(d)};l.send=function(a,b){var e={};e.rd=c();e.qc=k();d.is("function",a)&&(b=a);a=a||{};f([this.a,a],function(a){f(a,function(a,c){var b=m[c]?m[c]:c;b&&(d.is("undefined",a)?delete e[b]:e[b]=a)})});n(this.b,e,b)};l.set=function(a,c){var b=this;return d.is("string",a)?b.a[a]=c:f(a,function(a,c){b.set(c,a)})};return g}(q,function(e,b){return function(a){var d=[];b(a,function(a,b){d.push(e(b)+"="+e(a))});return d.join("&")}}(k,p),k,n,function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx".replace(/[xy]/g,
function(e){return"y"===e?(4*Math.random()|8).toString(16):(16*Math.random()|0).toString(16)})},p),function(e){return function(b,a){var d=a&&a.d||"default",c=a&&a.c||"construct",f={},g;return function(a){var k=Array.prototype.slice.call(arguments,1);if(e.is("string",a)){var h=a.split("."),m=h.pop(),h=h.pop()||d,l=f[h];"create"===m?(l=f[h]=new b,l[c].apply(l,k),g&&g(f[h],h)):l[m].apply(l,k)}else e.is("function",m)&&(g=m)}}}(n),p)})();
