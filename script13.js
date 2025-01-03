
TweenMax.set('.switchnob', {y: '+=90'})

var tl = new TimelineMax({delay: .5});  

function toggleLights(on){
  if(on == false){
    on = false;
    TweenMax.to('.light',.2, {filter:'', opacity: 0.55})
    TweenMax.to('.switchnob',.2, {y: '+=90'})
  }else{
    TweenMax.to('.switchnob',.2, {y: '-=90'})
    TweenMax.staggerTo('.light', .5, {filter:'url(\'#glow\')', opacity: 1}, .04)
    on = true;
  }
}

TweenLite.set(".anim-container",{perspective:600})

var total = 30;
var warp = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
  //  var Div = document.createElement('div');
  //  TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
  //  warp.appendChild(Div);
  //  animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};

var count_beer = 0;
$('.checkbox input').on('click',function() {
  count_beer = count_beer + 1;
  if (count_beer == 3) {
    $('#text_help').text('Kiên nhẫn lên !');
  }
  if (count_beer == 5) {
    $('#text_help').text('Hãy đối đầu với chú gấu kia !');
  }
  if (count_beer == 8) {
    $('#text_help').text('Đừng bỏ cuộc !');
  }
  if (count_beer >= 10) {
    $('#text_help').text('Tuyệt vời bạn đã thắp sáng hết bóng đèn !');
    setTimeout(() => {
      $('#text_help').text('Hãy tiếp tục đến với cây thông Noel nào !');
    }, 2000);
    setTimeout(() => {
      location.href = '/Noel/index3.html';
    }, 5000);
    toggleLights(true);
  }
})
