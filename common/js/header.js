$(document).ready(function(){

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