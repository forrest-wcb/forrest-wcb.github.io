if(null==window.localStorage.getItem("fpson")||"1"==window.localStorage.getItem("fpson")){var rAF=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},frame=0,allFrameCount=0,lastTime=Date.now(),lastFameTime=Date.now(),loop=function(){var e=Date.now(),a=e-lastFameTime,t=Math.round(1e3/a);if(lastFameTime=e,allFrameCount++,frame++,e>1e3+lastTime){if((t=Math.round(1e3*frame/(e-lastTime)))<=5)var o='<span style="color:#bd0000">卡成ppt🤢</span>';else if(t<=15)o='<span style="color:red">电竞级帧率😖</span>';else if(t<=25)o='<span style="color:red">有点难受😨</span>';else if(t<35)o='<span style="color:white">不太流畅🙄</span>';else if(t<=45)o='<span style="color:white">还不错哦😁</span>';else o='<span style="color:white">十分流畅🤣</span>';document.getElementById("fps").innerHTML=`FPS:${t} ${o}`,frame=0,lastTime=e}rAF(loop)};loop()}else document.getElementById("fps").style="display:none!important";