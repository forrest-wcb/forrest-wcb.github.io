if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const f=e=>c(e,d),n={module:{uri:d},exports:s,require:f};i[d]=Promise.all(r.map((e=>n[e]||f(e)))).then((e=>(a(...e),s)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/09/04/hello world/index.html",revision:"d79dc65b508e69acfd2c2c4252963394"},{url:"2023/12/29/cuda/index.html",revision:"a58acf5248d9924dc3779b17acd6cb8c"},{url:"2024/03/08/see you again/index.html",revision:"4eb4ba62af12825a89fa936b8c161813"},{url:"2025/01/04/透视变换/index.html",revision:"2885d2b901289a17c365616361a2ecfa"},{url:"2025/01/05/i_m_back/index.html",revision:"bc043c41af9524a41911607237b9dd76"},{url:"404.html",revision:"3d4b57a8ad1ec72238a973f9256f8af7"},{url:"about/index.html",revision:"bbd452bd27c94a149d431f1be2f0c83c"},{url:"archives/2023/09/index.html",revision:"85eda8f1ea66925df712bb831d6d3de2"},{url:"archives/2023/12/index.html",revision:"658fbe740a4eb9e0d5cf3f8c25ca9bf8"},{url:"archives/2023/index.html",revision:"7db777320989fe9014ff34acb79bffea"},{url:"archives/2024/03/index.html",revision:"2abc6ba29687a9165fc769846a214da7"},{url:"archives/2024/index.html",revision:"eb57f210c1312316b0ccffcc77ea4354"},{url:"archives/2025/01/index.html",revision:"950475e11a8f4e518a7fc88313c71b36"},{url:"archives/2025/index.html",revision:"03fb8c421201c3f16588bb9ab940322c"},{url:"archives/index.html",revision:"e8b0f99e714d08b0067a7431e40d54fd"},{url:"artitalk/index.html",revision:"c5bb53c7c786fa103adfedc16477ebf4"},{url:"categories/index.html",revision:"edc89594553deff3a3aecb9231ea6fb9"},{url:"categories/学习/index.html",revision:"66d90c3cf607e59aa492effc8e8d22a4"},{url:"categories/生活/index.html",revision:"f519f1a0fcf131ab852bce4696fdb255"},{url:"comments/index.html",revision:"f43fbae94f481ebe3ca17f14734405b9"},{url:"css/corner-indicator.css",revision:"2e36b560974d5c1c998719328c1bbdd4"},{url:"css/custom.min.css",revision:"7ac18fd88c323042796e1762027e18bf"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"e6912eea2601883bb6a274049d35092d"},{url:"css/progress_bar.css",revision:"38f77f00b8e558ed153bffd742ab127e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/HYTangMeiRen55W.woff2",revision:"6f6242b814ed09f8e128eb98ab7d6348"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"e3529d56cd2ed2c1c1dfd14456802b5f"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cuda_cover.jpg",revision:"17adf97235fa2c315f8af1e3935f3e16"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hello_cover.jpg",revision:"e05b9f64dd825f1038d7a29dd6489638"},{url:"img/loading2.webp",revision:"f9811a93752efab0d9ee874204dd7c9d"},{url:"img/revival_cover.png",revision:"fb3b17345d5a103009c7a21637208082"},{url:"img/valinebg.webp",revision:"c9e6254ff7429e52b5b7f56d8acfb44a"},{url:"img/透视变换_cover.png",revision:"c11bd2c52edb4efe42791632b27d29fb"},{url:"img/风车.png",revision:"2f4826235c1cce636d985f174fe400e0"},{url:"index.html",revision:"82d53ee9da3f3f4d9728cb959180cd61"},{url:"js/fps.js",revision:"52cfe4f90a132d6aca4c9ab374bce3d8"},{url:"js/main.js",revision:"f93d9674fa0a266eefc65e92b21778be"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/snow.js",revision:"9908eb21be1800f8098047467d284e03"},{url:"js/title.js",revision:"ee9501440d088cdbf467d3c32635dfaf"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"2bd39f83572503d2c953a4228a0d06d0"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"cf1580faf075f4660eb7290395c9c75f"},{url:"self/Kimbiedark.css",revision:"8fb7f649c4810284ec40fa92214ee000"},{url:"shuoshuo/index.html",revision:"3e103562ea5d54f86d0570fd2a0d88d5"},{url:"tags/cuda/index.html",revision:"7d1bd232901c3501436ed048952ac336"},{url:"tags/index.html",revision:"d74b14f2baf4e3c8e6e9a0ee52a6090e"},{url:"tags/图像处理/index.html",revision:"7e95d9ab5fcf3517ca3e963b0450f36b"}],{}),e.registerRoute(/^https:\/\/cdn\.staticaly\.com\/.*/,new e.CacheFirst,"GET")}));