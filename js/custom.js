var content=document.getElementById('js-content');
var navi=document.getElementById('js-navi');
var but=document.getElementsByClassName('js-but');
var phone=document.getElementById('js-phone');
var cart=document.getElementById('js-cart');
var logo=document.getElementById('js-logo');
var buy=document.getElementById('js-buy');
var buttons=document.getElementById('js-buttons');

for (var i = 0; i < but.length; i++) {
	but[i].addEventListener('click',function () {
	content.classList.remove('content-box--display');
	navi.style.top=0+"px";
	navi.style.position="fixed";
	navi.classList.add('b-head_navi-background');
	navi.classList.remove('b-head_navi-buttons');
	phone.style.display="inline-block";
	cart.style.display="inline-block";
	logo.style.display="none";
	buy.style.display="none";
}) 
}
