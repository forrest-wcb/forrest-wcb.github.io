if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const n=e=>c(e,a),f={module:{uri:a},exports:s,require:n};i[a]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(d(...e),s)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/09/04/hello world/index.html",revision:"5338102ddd2b5abe7d59f0935f5676a2"},{url:"2023/12/29/cuda/index.html",revision:"05cbe4482542c16a1db2a65b9cf336b2"},{url:"2024/03/08/see you again/index.html",revision:"af3decdc62962aa8128206415645c4ec"},{url:"2025/01/04/透视变换/index.html",revision:"86b413937b00ef0548d6f32187c28ce2"},{url:"2025/01/05/i_m_back/index.html",revision:"24c6e8eae883b91349858063fb9f60fd"},{url:"404.html",revision:"c7a72232610c7ebfeac79adeb28ae4dd"},{url:"about/index.html",revision:"d82087ea7059e9a912f4efb122e08030"},{url:"archives/2023/09/index.html",revision:"02196296342d65c37bde3a454b9c3024"},{url:"archives/2023/12/index.html",revision:"b5f0f2a3bc2da4652cde40bc687b8434"},{url:"archives/2023/index.html",revision:"a029702d7565315850ed2ab0e68ca9da"},{url:"archives/2024/03/index.html",revision:"1cd32350ef4740f3d80c899889ad3ab2"},{url:"archives/2024/index.html",revision:"219fbb3c5068598f811654e5a6e309d5"},{url:"archives/2025/01/index.html",revision:"57c6866241c08efb126b11525dec7d38"},{url:"archives/2025/index.html",revision:"12f5449e1800910dae6e1aae7401939e"},{url:"archives/index.html",revision:"431c0fae8980682ebef09368bd4cad95"},{url:"artitalk/index.html",revision:"b4f93e6bdc0c1f428ad8068abbcec398"},{url:"categories/index.html",revision:"df36939318f874768356d7fccf1a793d"},{url:"categories/学习/index.html",revision:"6ff964aab008838dca783dea793f03e9"},{url:"categories/生活/index.html",revision:"000cc4c05e9f75cec07ebd3ffccc596c"},{url:"comments/index.html",revision:"dc80a37984170f9d9a407230dde9e16b"},{url:"css/corner-indicator.css",revision:"2e36b560974d5c1c998719328c1bbdd4"},{url:"css/custom.css",revision:"07fbfebfadc356371ec210e7702ad3fd"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"9e35fb6e17f2e089e5cddeefa93edf9b"},{url:"css/progress_bar.css",revision:"38f77f00b8e558ed153bffd742ab127e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/HYTangMeiRen55W.woff2",revision:"6f6242b814ed09f8e128eb98ab7d6348"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"e3529d56cd2ed2c1c1dfd14456802b5f"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cuda_cover.jpg",revision:"17adf97235fa2c315f8af1e3935f3e16"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hello_cover.jpg",revision:"e05b9f64dd825f1038d7a29dd6489638"},{url:"img/loading2.webp",revision:"f9811a93752efab0d9ee874204dd7c9d"},{url:"img/revival_cover.png",revision:"fb3b17345d5a103009c7a21637208082"},{url:"img/valinebg.webp",revision:"c9e6254ff7429e52b5b7f56d8acfb44a"},{url:"img/透视变换_cover.png",revision:"c11bd2c52edb4efe42791632b27d29fb"},{url:"img/风车.png",revision:"2f4826235c1cce636d985f174fe400e0"},{url:"index.html",revision:"40c6cb8832850642adcb12f80a15b36e"},{url:"js/fps.js",revision:"52cfe4f90a132d6aca4c9ab374bce3d8"},{url:"js/main.js",revision:"f93d9674fa0a266eefc65e92b21778be"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/snow.js",revision:"9908eb21be1800f8098047467d284e03"},{url:"js/title.js",revision:"ee9501440d088cdbf467d3c32635dfaf"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"56d70835edc07dc12183dc9c9abcc34a"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"fc0840063e0e0c9102a91991b26dd34c"},{url:"self/Kimbiedark.css",revision:"8fb7f649c4810284ec40fa92214ee000"},{url:"shuoshuo/index.html",revision:"9c8d451d17d7f33c5b6f9880771676ba"},{url:"tags/cuda/index.html",revision:"cafe0bab2d84c994386db24b06f85a37"},{url:"tags/index.html",revision:"3390ed7b4472452f039a89ab648d4330"},{url:"tags/图像处理/index.html",revision:"c46da46e9208b933ccdaac4fff7c3308"}],{}),e.registerRoute(/^https:\/\/cdn\.staticaly\.com\/.*/,new e.CacheFirst,"GET")}));