if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),f={module:{uri:s},exports:a,require:n};i[s]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/09/04/hello world/index.html",revision:"7abdc1d58e7be3a3372ca3353a4f3467"},{url:"2023/09/14/poems/index.html",revision:"4e6b33cc8c60964c89ad7b6ea80b445b"},{url:"2023/12/29/cuda/index.html",revision:"e350607eaf79e1ca961791b32cd36619"},{url:"2024/01/20/Diary/index.html",revision:"797c49cc44b4a2b231bbdf92c5297af1"},{url:"2024/02/01/已刷小说整理/index.html",revision:"27bbed51429fa0bffedadad334901c23"},{url:"404.html",revision:"3cb7072a739e1b845d1f94e1f2a1f8f2"},{url:"about/index.html",revision:"d19e5cac996168d185b7d1f18d0c4004"},{url:"archives/2023/09/index.html",revision:"3d179a72e4f6d4c1108efe831e52dc66"},{url:"archives/2023/12/index.html",revision:"c60aa4726ecc4369770d67425cfa931e"},{url:"archives/2023/index.html",revision:"add8c6a29e2352a5f7ea2998a7d7ce1c"},{url:"archives/2024/01/index.html",revision:"110cd269c7c44ae5fe98983871f45617"},{url:"archives/2024/02/index.html",revision:"9383b831b804d316205f0e45d8f3d9ca"},{url:"archives/2024/index.html",revision:"18214790fcbf14dc29be0c65894b7c0b"},{url:"archives/index.html",revision:"ac6c27bbd5b8d9e713697fb31584f4b9"},{url:"categories/index.html",revision:"98d652de56f56a3e8e29a2d72834c7f5"},{url:"categories/学习/index.html",revision:"0386be058cf0ccd9979bd6deb88df5be"},{url:"categories/收集/index.html",revision:"1f682328745850112096fde6cc8900aa"},{url:"categories/生活/index.html",revision:"b6cb68b7c17fedc2abba888f728a1c1a"},{url:"comments/index.html",revision:"abe1543fe3cc1230171db243c2be0704"},{url:"css/custom.css",revision:"3781faace622c599e40ae0d4026a1692"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"1692ddd49e91329e190fb09dc5bd1a5f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"021132a2dbdcef8c33fe41a8364aaf43"},{url:"js/fps.js",revision:"52cfe4f90a132d6aca4c9ab374bce3d8"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/snow.js",revision:"9908eb21be1800f8098047467d284e03"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"c90f278db8e90c4d9876d983a99b79e7"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"a5de913a0ce49f878d2ccd4a0b792c5c"},{url:"tags/cuda加速计算/index.html",revision:"04d4e4d16a7e5ed25a4583326f6a52ba"},{url:"tags/index.html",revision:"0d2bc1202bba2002f362d03edeb737e1"},{url:"tags/日记-随想/index.html",revision:"6f97a1b335e936f64fc0bddd2190f80c"},{url:"tags/杂谈/index.html",revision:"befbef82c9b208f27e87e83cd64b2da2"},{url:"tags/记录/index.html",revision:"81a7b805f15234fedee19c7347cb6776"},{url:"tags/诗词歌赋/index.html",revision:"b891e5e2f63a34ccd052153fac8f8414"}],{}),e.registerRoute(/^https:\/\/cdn\.staticaly\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
