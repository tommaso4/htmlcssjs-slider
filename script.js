
function sinistraClick() {

  var activeImg = $(".centro > img.active");
  activeImg.removeClass("active");

  var prevImg = activeImg.prev("img");
  if (activeImg.hasClass("first")) {

    prevImg = $(".centro > img.last");
  }

  prevImg.addClass("active");
  pointNext()
}

function destraClick() {

  var activeImg = $(".centro > img.active");
  activeImg.removeClass("active");

  var nextImg = activeImg.next("img");
  if (activeImg.hasClass("last")) {

    nextImg = $(".centro > img.first");
  }

  nextImg.addClass("active");
  pointNext()
}

function pointNext(){
  var imgs = $(".centro > img");
  var index;

  for (var i = 0; i < imgs.length; i++) {
    if (imgs.eq(i).hasClass("active")) {
      index = i;
    }
  }
  var oldPoit = $(".point-conteiner > i.fas");
  oldPoit.removeClass("fas").addClass("far");

  var point = $(".point-conteiner > i");
  var newPoint = point.eq(index);
  newPoint.removeClass("far").addClass("fas");
}

function clickDot(){

  var me = $(this);
  var meIndex = me.index();
  var activePic = $(".centro .active");
  activePic.removeClass("active");

  var pics = $(".centro > img");
  var nextPic = pics.eq(meIndex);
  nextPic.addClass("active");
  pointNext();

}


function init () {

 var sinistra = $(".sinistra");
 var destra = $(".destra");
 var dots = $(".point-conteiner > i");

 sinistra.click(sinistraClick);
 destra.click(destraClick);
 dots.click(clickDot);
}

$(document).ready(init);
