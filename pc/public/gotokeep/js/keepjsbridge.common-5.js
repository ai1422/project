<!DOCTYPE html><html lang="zh-Hans"><head><meta charset="utf-8"><meta name="description" content="「Keep」是一款具有社交属性的健身工具类产品。用户可以利用碎片化的时间，随时随地选择适合自己的健身课程进行真人同步训练。健身计划针对不同人群、各种器械和阶段健身目标组合编排，适用于最广泛的健身场景。训练完成后还可将成果分享到社区和社交网络，结识同样热爱运动的朋友，让健身不再是孤独的坚持。"><meta name="HandheldFriendly" content="True"><meta name="format-detection" content="telephone=no"><meta name="baidu-site-verification" content="BdxNxb2Jrw"><meta http-equiv="x-ua-compatible" content="ie=edge"><link rel="dns-prefetch" href="//staticweb.keepcdn.com"><link rel="dns-prefetch" href="//static1.keepcdn.com"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"><script>/*
    # 不做适配时，html fontsize默认设置，便于css使用rem
*/
!function() {
    var designFontSize = 10 || 10;
    document.documentElement.style.fontSize = designFontSize + "px";
}();</script><link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"><script>var is_Keep = false;</script><script>var is_weibo = false;</script><script>var is_tablet = false;</script><script>var keep_app_header = {"x-user-id":"","x-device-id":"","x-is-new-device":"","x-version-name":"","x-version-code":"","x-channel":"","x-keep-timezone":"","x-manufacturer":"","x-model":"","x-model-raw":"","x-os":"","x-os-version":"","x-screen-height":"","x-screen-width":"","x-locale":"","x-request-id":"c6122c7b8ba7321faafc9b8913de9516","authorization":"","x-biz-info":""};
var keep_api_host = {"api":"https://api.gotokeep.com","social":"https://api.gotokeep.com/social","training":"https://api.gotokeep.com/training","account":"https://api.gotokeep.com/account","diamond":"https://api.gotokeep.com/diamond","ec":"https://store.gotokeep.com/api","risk":"https://api.gotokeep.com/risk","running":"https://api.gotokeep.com/running","lego":"https://api.gotokeep.com/lego","pd":"https://api.gotokeep.com/pd","klass":"https://api.gotokeep.com/klass","open":"https://open.gotokeep.com","upload":"https://upload.gotokeep.com/wharf","apm":"https://apm.gotokeep.com","bootcamp":"https://api.gotokeep.com/bootcamp","caliper":"https://api.gotokeep.com/caliper"};
var share_userid = ''?'':null;
var inapp_url = ''?'':null;</script><script>var keep_user = null;</script><link rel="stylesheet" href="https://staticweb.keepcdn.com/showstatic/vendors/webfont/css/keep_icon-645549d368.css"><link rel="stylesheet" href="https://staticweb.keepcdn.com/showstatic/css/common/common-6f3c0ad9c1.css"><title>出错啦！你访问的页面不存在...</title></head><body data-keepversion=""><div id="exception-page"><k-exception type="404" color="light"></k-exception></div><script>!function t(o,c,s){function w(n,e){if(!c[n]){if(!o[n]){var i="function"==typeof require&&require;if(!e&&i)return i(n,!0);if(l)return l(n,!0);var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}var r=c[n]={exports:{}};o[n][0].call(r.exports,function(e){var i=o[n][1][e];return w(i||e)},r,r.exports,t,o,c,s)}return c[n].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)w(s[e]);return w}({1:[function(e,i,n){"use strict";var a,r=e("keep-jsbridge/dist/keepjsbridge.common.js"),t=(a=r)&&a.__esModule?a:{default:a};window.KeepJsbridge=t.default},{"keep-jsbridge/dist/keepjsbridge.common.js":2}],2:[function(e,i,n){"use strict";function a(e){var i;o?(i=e,window.WebViewJavascriptBridge?i():document.addEventListener("WebViewJavascriptBridgeReady",function(){i()},!1)):c&&function(e){if(window.WebViewJavascriptBridge)return e();if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var i=document.createElement("iframe");i.style.display="none",i.src="wvjbscheme://__bridge_loaded__",document.documentElement.appendChild(i),setTimeout(function(){document.documentElement.removeChild(i)},0)}(e)}var r="undefined"!=typeof window&&window.navigator.userAgent.toLowerCase(),t=r&&0<r.indexOf("keep"),o=r&&0<r.indexOf("android"),c=r&&/iphone|ipad|ipod|ios/.test(r),s={ready:function(e){var i;i=e,t&&a(i)},readyC:function(e){this.ready(e)},checkJsApi:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("checkJsApi",{jsApi:i.jsApi},function(e){"string"==typeof e&&(e=JSON.parse(e)),i.success&&i.success(e)})},showPrivilegeDialog:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("showPrivilegeDialog",{privilegeName:e.privilegeName})},setKeepShareOption:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("setKeepShareOption",{title:e.title,content:e.content,image:e.image,showShareIcon:!1!==e.showShareIcon,url:e.url,statistics:e.statistics||{}})},setShareOption:function(i){var e={title:i.title,content:i.content,image:i.image,url:i.url,showShareIcon:!1!==i.showShareIcon,statistics:i.statistics||{}};i.wxApp&&i.wxApp.userName&&(e.wxApp=i.wxApp),window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("setShareOption",e,function(e){"string"==typeof e&&(e=JSON.parse(e)),"success"==e.shareResult?i.success&&i.success():"fail"==e.shareResult&&i.fail&&i.fail()})},setShareOptionC:function(e){this.setShareOption(e)},setImageShareOption:function(i){var e={base64Image:i.base64Image,statistics:i.statistics||{}};window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("setImageShareOption",e,function(e){"string"==typeof e&&(e=JSON.parse(e)),"success"==e.shareResult?i.success&&i.success():"fail"==e.shareResult&&i.fail&&i.fail()})},invokeShare:function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("invokeShare",{})},invokeShareC:function(){this.invokeShare()},isWeChatInstalled:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("isWeChatInstalled",{},function(e){"string"==typeof e&&(e=JSON.parse(e)),i.callback&&i.callback(e)})},launchMiniProgram:function(e){var i={};e.wxApp&&e.wxApp.userName&&(i.wxApp=e.wxApp),window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("launchMiniProgram",i)},riskVerify:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("riskVerify",{verified:e.verified,msg:e.msg})},invokeSpecificShare:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("invokeShare",{type:e.type})},invokeSpecificShareC:function(e){this.invokeSpecificShare(e)},stopLoadingAnimation:function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("stopLoadingAnimation",{})},stayHighlight:function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("stayHighlight",{})},stayHighlightC:function(){this.stayHighlight()},enableOnBack:function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("enableOnBack",{})},phone:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("phone",{phoneNumber:e.phoneNumber})},setTitleBarVisibility:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("setTitleBarVisibility",{visible:e.visible})},setTitle:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("setTitle",{title:e.title})},setTitleC:function(e){this.setTitle(e)},setTitleOpacity:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("setTitleOpacity",{opacity:e.opacity})},showOptionMenu:function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("showOptionMenu",{})},hideOptionMenu:function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("hideOptionMenu",{})},showToast:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("showToast",{msg:e.msg,type:e.type})},showToastC:function(e){this.showToast(e)},showModal:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("showModal",{title:i.title,msg:i.msg,showCancel:i.showCancel||!0,confirmText:i.confirmText,cancelText:i.cancelText},function(e){"string"==typeof e&&(e=JSON.parse(e)),"true"==e.confirm?i.success&&i.success():i.cancel&&i.cancel()})},showModalC:function(e){this.showModal(e)},closeWebview:function(e){var i=!0;e&&(i=e.animation),window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("closeWebview",{animation:i})},closeWebviewC:function(){this.closeWebview()},openNewPage:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("openNewPage",{url:e.url,newWindow:e.newWindow})},showErrorPage:function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("showErrorPage",{})},checkIOSHealthkit:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("checkIOSHealthkit",{},function(e){i.success&&i.success(e)})},getIOSHealthkitStatus:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("getIOSHealthkitStatus",{},function(e){i.success&&i.success(e)})},connectIOSHealthkit:function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("connectIOSHealthkit",{})},disableiOSBounces:function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("disableiOSBounces",{})},setWebviewBgColor:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("setWebviewBgColor",{color:e.color})},playVideo:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("playVideo",{url:e.url})},playEntryVideoList:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("playVideoList",e)},setSensorPageEvent:function(e){function i(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("setSensorPageEvent",{event:e.event,data:e.data})}i(),e.notOnShow||this.onShow({callback:i})},setAdReportersEvent:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("setAdReportersEvent",{data:e.data})},jumpAdLink:function(e){window.WebViewJavascriptBridge.callHandler("jumpAdLink",{url:e.url,data:e.data})},logToApp:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("logToApp",{tag:"webjsbridge_"+e.tag,message:e.message})},openMap:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("openMap",{lng:e.lng,lat:e.lat})},getLocationCity:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("getLocationCity",{},function(e){"string"==typeof e&&(e=JSON.parse(e)),i.success&&i.success(e)})},invokeReward:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("showPayAppreciationView",{entryId:i.entryId},function(e){"string"==typeof e&&(e=JSON.parse(e)),i.callback&&i.callback(e)})},previewImages:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("previewImages",{imageList:e.imageList,userName:e.userName,index:e.index})},getTitleBarHeight:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("getTitleBarHeight",{},function(e){"string"==typeof e&&(e=JSON.parse(e)),i.success&&i.success(e)})},getWxOAuthCode:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("getWxOAuthCode",{},function(e){"string"==typeof e&&(e=JSON.parse(e)),i.success&&i.success(e)})},joinEvent:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("joinEvent",{eventId:e.eventId})},setPushPermission:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("setPushPermission",{},function(e){"string"==typeof e&&(e=JSON.parse(e)),"success"==e.result?i.success&&i.success():"fail"==e.result&&i.fail&&i.fail()})},configWebBarRightButtons:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("configWebBarRightButtons",e)},jumpToSearchProduct:function(n){var a=this;window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.registerHandler("jumpToSearchProduct",function(e,i){a.openNewPage({url:"keep://search/goods?name=商品&source=product",newWindow:1}),n.callback&&n.callback(i)})},_onShowFunction:window.WebViewJavascriptBridge=null,_onShowCallbackArr:[],onShow:function(e){e.callback&&s._onShowCallbackArr.push(e.callback),s._onShowFunction||(s._onShowFunction=function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.registerHandler("onShow",function(e,i){for(var n=0,a=s._onShowCallbackArr.length;n<a;n++)"function"==typeof s._onShowCallbackArr[n]&&s._onShowCallbackArr[n]()})},s._onShowFunction())},onShowC:function(e){this.onShow(e)},_onHideFunction:null,_onHideCallbackArr:[],onHide:function(e){e.callback&&s._onHideCallbackArr.push(e.callback),s._onHideFunction||(s._onHideFunction=function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.registerHandler("onHide",function(e,i){for(var n=0,a=s._onHideCallbackArr.length;n<a;n++)"function"==typeof s._onHideCallbackArr[n]&&s._onHideCallbackArr[n]()})},s._onHideFunction())},onHideC:function(e){this.onHide(e)},_onPullDownRefreshFunction:null,_onPullDownRefreshCallbackArr:[],onPullDownRefresh:function(e){e.callback&&s._onPullDownRefreshCallbackArr.push(e.callback),s._onPullDownRefreshFunction||(s._onPullDownRefreshFunction=function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.registerHandler("onPullDownRefresh",function(e,i){for(var n=0,a=s._onPullDownRefreshCallbackArr.length;n<a;n++)"function"==typeof s._onPullDownRefreshCallbackArr[n]&&s._onPullDownRefreshCallbackArr[n]()})},s._onPullDownRefreshFunction())},onBack:function(n){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.registerHandler("onBack",function(e,i){n.callback&&n.callback(i)})},_onPageShareFunction:null,_onPageShareCallbackArr:[],onPageShare:function(e){e.callback&&s._onPageShareCallbackArr.push(e.callback),s._onPageShareFunction||(s._onPageShareFunction=function(){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.registerHandler("onPageShare",function(e,i){for(var n=0,a=s._onPageShareCallbackArr.length;n<a;n++)"function"==typeof s._onPageShareCallbackArr[n]&&s._onPageShareCallbackArr[n]()})},s._onPageShareFunction())},onPaySuccess:function(i){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.registerHandler("onPaySuccess",function(e){i.callback&&i.callback(e)})},openApplicationUrl:function(e){window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.callHandler("applicationOpenUrl",{url:e.url})},version:"1.7.7"};i.exports=s},{}]},{},[1]);</script><script>KeepJsbridge.ready(function () {
  KeepJsbridge.stopLoadingAnimation();
})
</script><script>var is_weixin = false;</script><script>!function c(i,a,r){function u(t,e){if(!a[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}var o=a[t]={exports:{}};i[t][0].call(o.exports,function(e){var n=i[t][1][e];return u(n||e)},o,o.exports,c,i,a,r)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<r.length;e++)u(r[e]);return u}({1:[function(e,n,t){"use strict";var s,o=e("keep-wechatjssdk/dist/keepwechatjssdk.common.js"),c=(s=o)&&s.__esModule?s:{default:s};window.Wxcommon=c.default,c.default.init({url:window.location.href})},{"keep-wechatjssdk/dist/keepwechatjssdk.common.js":2}],2:[function(e,n,t){"use strict";var s="undefined"!=typeof window&&window.navigator.userAgent.toLowerCase(),c=(s&&s.indexOf("android"),s&&/iphone|ipad|ipod|ios/.test(s),s&&0<s.indexOf("micromessenger")),i=["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone","launch3rdApp","getInstallState"],o={init:function(e){var n=e.url,t=e.jsApiList,s=e.callback;if(c){var o="https://show.gotokeep.com/wxjssdk?url="+encodeURIComponent(n);window.wx&&function(e,n){var t=this,s=new XMLHttpRequest;s.open("GET",e,!0),s.onreadystatechange=function(){4===s.readyState&&200===s.status&&n.call(t,s.responseText)},s.send()}(o,function(e){var n=JSON.parse(e);window.wx.config({debug:!1,beta:!0,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:t||i}),s&&"function"==typeof s&&s()})}},setShareOption:function(s){window.wx&&window.wx.ready(function(){var e=s.title||"Keep",n=s.image||"https://static1.keepcdn.com/2018/05/28/20/1527510336925_192x192.jpg",t=s.url||window.location.href;window.wx.onMenuShareTimeline({title:e,link:t,imgUrl:n,success:function(){s.successCallback&&"function"==typeof s.successCallback&&s.successCallback()}}),window.wx.onMenuShareAppMessage({title:e,desc:s.content,link:t,imgUrl:n,success:function(){s.successCallback&&"function"==typeof s.successCallback&&s.successCallback()}}),window.wx.onMenuShareQQ({title:e,desc:s.content,link:t,imgUrl:n,success:function(){s.successCallback&&"function"==typeof s.successCallback&&s.successCallback()}}),window.wx.onMenuShareQZone({title:e,desc:s.content,link:t,imgUrl:n,success:function(){s.successCallback&&"function"==typeof s.successCallback&&s.successCallback()}})})},version:"1.0.0"};n.exports=o},{}]},{},[1]);</script><script>(function (para) {
  var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script', x = null, y = null;
  w['sensorsDataAnalytic201505'] = n;
  w[n] = w[n] || function (a) {
      return function () {
        (w[n]._q = w[n]._q || []).push([a, arguments]);
      }
    };
  var ifs = ['track', 'quick', 'register', 'registerPage', 'registerOnce', 'registerSession', 'registerSessionOnce', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify'];
  for (var i = 0; i < ifs.length; i++) {
    w[n][ifs[i]] = w[n].call(null, ifs[i]);
  }
  if (!w[n]._t) {
    x = d.createElement(s), y = d.getElementsByTagName(s)[0];
    x.setAttribute('id', '_sa-script');
    x.setAttribute('salink', p);
    x.async = 1;
    y.parentNode.insertBefore(x, y);
    w[n]._t = 1 * new Date();
    w[n].para = para;
  }
})({
  sdk_url: 'https://staticweb.keepcdn.com/showstatic/js/common/lib/sensorsdata-f91ba0f514.full.js',
  name: 'sa',
  server_url: keep_api_host.apm + '/v1.1/log/client/web?format=json',
  custom_header: keep_app_header,
  send_type:'ajax',
  heatmap_url:'https://staticweb.keepcdn.com/showstatic/js/common/lib/heatmap-c3a0b7c692.js',
  web_url:'https://data.gotokeep.com/',
  heatmap:{
    collect_url: function(){
      //采集页面
      if(location.href.indexOf('bootcamp/join')>=0||location.href.indexOf('/klass/')>=0||location.href.indexOf('/mall/')>=0){
        return true;
      }
    }
  }
});
sa.quick('autoTrack');</script><script>(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.setAttribute('id', '_ga-script');
  a.setAttribute('galink', g);
  a.async = 1;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-75855126-1', 'auto');
ga('require', 'linkid');</script><script>if ('') ga('set', 'campaignSource', '');
if ('') ga('set', 'campaignMedium', '');
if ('') ga('set', 'campaignName', '');
ga('send', 'pageview');

</script><script src="https://staticweb.keepcdn.com/showstatic/js/other/exception-4ac6878890.js"></script><script>(function(){
  var s = document.getElementById('_ga-script');
  s.src = s.getAttribute('galink');
})();</script></body></html>