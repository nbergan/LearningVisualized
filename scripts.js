function goToVideos() {
    //TODO make it go to videos


}
$(window).load(function() {
  window.setInterval(loadContent, 4000)
});

function loadContent(){
  $('.preloader').fadeOut('slow');
  document.getElementById("hero").style.display = "inline-block";
  document.getElementById("tutorials").style.display = "inline-block";
  document.getElementById("about").style.display = "inline-block";

}

$('.ml9 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: function(el, i) {
      return 100 * (i+1)
    }
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
