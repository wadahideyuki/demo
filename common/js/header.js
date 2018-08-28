$(document).ready(function(){
//ユーザーエージェントによる振分
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();
if(userAgent.indexOf("msie") > -1){}
if(userAgent.indexOf("firefox") > -1){}
if(userAgent.indexOf("chrome") > -1){}
if(userAgent.indexOf("iphone") > -1){}
if(userAgent.indexOf("android") > -1){}
if(appVersion.indexOf("msie 7.") != -1){}

//Languageボタン
$(".hdMenus .lng .btn").click(function(){
	$(this).toggleClass("show");
	$(".hdMenus .lngs span").slideToggle();
	return false;
});

//SPのヘッダーの開閉
$(".btnSpMenu").click(function(){
	$(this).toggleClass("show");
	$(".hdMenus").slideToggle();
	return false;
});


});//DocRdyFncEnd
