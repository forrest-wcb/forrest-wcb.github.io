if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const f=e=>r(e,s),n={module:{uri:s},exports:a,require:f};i[s]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(d(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/09/04/hello world/index.html",revision:"54aa9665fcddffa81a67866f4a429220"},{url:"2023/12/29/cuda/index.html",revision:"86783cf2631145c7e12dbab856720e01"},{url:"2024/03/08/see you again/index.html",revision:"4e09bab3402cc020f1756c3e6bee506b"},{url:"2025/01/04/透视变换/index.html",revision:"8441f2e2788cb9299d64275e4b12fffe"},{url:"2025/01/05/i_m_back/index.html",revision:"33adad22dc2d5deadd19f640fc1bf865"},{url:"404.html",revision:"e352a7a7c7b5d8f8f1046f7c754d1e8b"},{url:"about/index.html",revision:"0a060d8829e16b489b259cf2ce7b90e5"},{url:"archives/2023/09/index.html",revision:"e730fb3a5d282f68b4d5874e1f4b9acd"},{url:"archives/2023/12/index.html",revision:"6be3e1bf7b23df3e3610b56f5f0e4b44"},{url:"archives/2023/index.html",revision:"766c0c4c456c86f6c61c59c985cb7c07"},{url:"archives/2024/03/index.html",revision:"586db9ded756a23fdd6cd36a5443059d"},{url:"archives/2024/index.html",revision:"bc9e1662fd84428d426b4949f5260bb7"},{url:"archives/2025/01/index.html",revision:"df18724184305e85be46b2d923461353"},{url:"archives/2025/index.html",revision:"faceb7e5b9b05346e440e0b36c065e51"},{url:"archives/index.html",revision:"790865f6ea160a91881a03eab458ee50"},{url:"artitalk/index.html",revision:"1c607ba81f846f7afa15ca11fbf4ea40"},{url:"categories/index.html",revision:"26ec5e7b11b6af56df4d7e1b784b6ec5"},{url:"categories/学习/index.html",revision:"a78d07f28bce85dcbb5f315274717d6b"},{url:"categories/生活/index.html",revision:"898048660b7d537c05442b9265643256"},{url:"comments/index.html",revision:"1f00df993b773d08e8c1ec4057ccb857"},{url:"css/corner-indicator.css",revision:"2e36b560974d5c1c998719328c1bbdd4"},{url:"css/custom.css",revision:"1534965f61c742fb6c75a956890cdf5a"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"9e35fb6e17f2e089e5cddeefa93edf9b"},{url:"css/progress_bar.css",revision:"38f77f00b8e558ed153bffd742ab127e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/HYTangMeiRen55W.woff2",revision:"6f6242b814ed09f8e128eb98ab7d6348"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"e3529d56cd2ed2c1c1dfd14456802b5f"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cuda_cover.jpg",revision:"17adf97235fa2c315f8af1e3935f3e16"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hello_cover.jpg",revision:"e05b9f64dd825f1038d7a29dd6489638"},{url:"img/loading2.webp",revision:"f9811a93752efab0d9ee874204dd7c9d"},{url:"img/revival_cover.png",revision:"fb3b17345d5a103009c7a21637208082"},{url:"img/valinebg.webp",revision:"c9e6254ff7429e52b5b7f56d8acfb44a"},{url:"img/透视变换_cover.png",revision:"c11bd2c52edb4efe42791632b27d29fb"},{url:"img/风车.png",revision:"2f4826235c1cce636d985f174fe400e0"},{url:"index.html",revision:"a1a2cb5658d486d767ba293dfc3113c3"},{url:"js/fps.js",revision:"52cfe4f90a132d6aca4c9ab374bce3d8"},{url:"js/main.js",revision:"f93d9674fa0a266eefc65e92b21778be"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/snow.js",revision:"9908eb21be1800f8098047467d284e03"},{url:"js/title.js",revision:"ee9501440d088cdbf467d3c32635dfaf"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"89fb485dd7ef1d667c18b34f1b25c73b"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"371abdbeda642e2e95fe71b54c778d8a"},{url:"self/Kimbiedark.css",revision:"8fb7f649c4810284ec40fa92214ee000"},{url:"shuoshuo/index.html",revision:"bb9404a360f8196cff0f768e5235ea9a"},{url:"tags/cuda/index.html",revision:"d99e282e396792a6ee7a9dad8f1109e1"},{url:"tags/index.html",revision:"03d92aaa1922b3aef7052af26596fefc"},{url:"tags/图像处理/index.html",revision:"91e3ec760bfa56f8f3d9c30f91206102"}],{}),e.registerRoute(/^https:\/\/cdn\.staticaly\.com\/.*/,new e.CacheFirst,"GET")}));