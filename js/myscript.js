//change play image on hover
$(".inner-image").on({
  "mouseover" : function() {
     this.src = 'images/white-play.png';
   },
   "mouseout" : function() {
     this.src='images/green-play.png';
   }
 });

//pause video
 var vid = document.getElementById("myVideo"); 

 function pauseVid() { 
     vid.pause(); 
    
     document.body.style.opacity = "1.0";
} 

//overlay
function changeOpacity() {
  document.getElementsByClassName("mymodal-body").style.opacity= "1.0";
  document.body.style.opacity = "0.2";
  

}
