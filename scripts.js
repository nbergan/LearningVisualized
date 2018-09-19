function goToVideos() {
    //TODO make it go to videos


}
$(window).load(function() {
  window.setInterval(loadContent, 0)
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
    duration: 50000,
    easing: "easeOutExpo",
    delay: 20000
  });

function displayGrid(gridLocation){
   var gridNames = ['grid1', 'grid2', 'grid3'];
    var gridNumber = gridNames[gridLocation];
    if(document.getElementById(gridNumber).style.display == "none")
    {
        /*Turn on grid*/
    document.getElementById(gridNumber).style.display = "block";
        /*Turn off other two*/
        /*
        for(var i = 0; i < 3; i++){
            if(i != gridLocation)
            {
             document.getElementById(gridNumber).style.display = "none";
            }
        } */
    }
    
    else {
     document.getElementById(gridNumber).style.display = "none";
    }
}