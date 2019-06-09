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
var courierChoice=document.querySelector('.courier-choice');
var shipmentChoice=document.querySelector('.shipment-choice');
var courier=document.querySelector('.courier');
var shipment=document.querySelector('.shipment');
// анимация главной страницы
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
//news
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
//переключалка доставки
$(document).ready(function(){
$('.courier-choice').on('click', function(){
	courier.classList.remove('invisible');
	shipment.classList.add('invisible');
	courierChoice.classList.remove('blur');
	courierChoice.classList.add('active');
	shipmentChoice.classList.remove('active');
	shipmentChoice.classList.add('blur');
	console.log('hj,bn');
});
$('.shipment-choice').on('click',function(){
	shipment.classList.remove('invisible');
	courier.classList.add('invisible');
	courierChoice.classList.remove('active');
	courierChoice.classList.add('blur');
	shipmentChoice.classList.remove('blur');
	shipmentChoice.classList.add('active');
	console.log('hj,bn');
});
});
//плавный скролл
$(document).ready(function(){
    $('#js-navi').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-90+"px";
        $('body,html').animate({scrollTop: top}, 800);
    });
});
//счетчик билетов к покупке надо его сделать хитрее с ооп и тд 
var ticketsCount = $('.js-ticket-input').val();
$('#ticket-left').click(function(){
	if(ticketsCount>0){
	   ticketsCount--;
	   $('.js-ticket-input').val(ticketsCount);
	}
});

$('#ticket-right').click(function(){
   ticketsCount++;
   $('.js-ticket-input').val(ticketsCount);
});

var ticketsCount = $('.js-ticket-input1').val();
$('#ticket-left1').click(function(){
	if(ticketsCount>0){
	   ticketsCount--;
	   $('.js-ticket-input1').val(ticketsCount);
	}
});

$('#ticket-right1').click(function(){
   ticketsCount++;
   $('.js-ticket-input1').val(ticketsCount);
});
$('.input').click(function(){
	this.value="";
});