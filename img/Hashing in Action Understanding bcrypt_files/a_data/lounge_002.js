!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.5c5dad4ae74bbb3422efd01116dc45e6.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.1e8827a37860350a735d854b0fcda557.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.907072d563117313785716c7fb3237d9.js","recommendations/main":"https://c.disquscdn.com/next/embed/recommendations.bundle.931a2780f109a1dca41bf3ac362bdce6.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","recommendations/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.f9554506a08a1cc2b021f0dfc3f59ebb.js",a.body.appendChild(c)}();