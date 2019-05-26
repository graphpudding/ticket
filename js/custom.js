var content=document.getElementById('js-content');
var navi=document.getElementById('js-navi');
var but=document.getElementsByClassName('js-but');
var news=document.getElementsByClassName('js-news');
var newsCard=document.getElementsByClassName('js-news-card');
var zone=document.getElementsByClassName('js-zone');
var zoneContent=document.getElementsByClassName('js-zone-content');
var phone=document.getElementById('js-phone');
var cart=document.getElementById('js-cart');
var logo=document.getElementById('js-logo');
var buy=document.getElementById('js-buy');
var burger=document.getElementById('js-burger');
var buttons=document.getElementById('js-buttons');
var head=document.getElementById('js-b-head');

for (var i = 0; i < but.length; i++) {
	but[i].addEventListener('click',function () {
		content.classList.remove('invisible');
		navi.style.top=0+"px";
		navi.style.position="fixed";
		navi.classList.add('b-head_navi-background');
		navi.classList.remove('b-head_navi-buttons');
		navi.classList.remove('b-head_navi');
		navi.classList.add('b-head_navi-main');
		phone.classList.remove('invisible');
		cart.classList.remove('invisible');
		logo.style.display="none";
		buy.style.display="none";
		head.style.height="0px";
		burger.classList.remove('invisible');
	}) 
}

for(var i = 0; i < newsCard.length; i++){
	newsCard[i].classList.remove('big-news');
	 newsCard[i].addEventListener('click',function () {
	 	for(var i = 0; i < newsCard.length; i++){
			newsCard[i].classList.remove('big-news');
			newsCard[i].lastElementChild.classList.add('invisible');
			}
		this.classList.add('big-news');
		this.lastElementChild.classList.remove('invisible');
	})

}


$(document).ready(function(){
    $("#js-navi").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-90+"px";
        $('body,html').animate({scrollTop: top}, 800);
    });
});
