function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }

   var space = " ";
   var pos = 0;
   var msg = "User 19";
   
   function Scroll(){
   document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);
   
   pos++;
   if (pos > msg.length) pos = 0;
   window.setTimeout("Scroll()", 0);
   }
   Scroll();

   $(document).ready(function(){
    $( ".box-bounds" ).mouseenter(function(e) {
      closestEdge(e, this);
    });  
  });
  
  function moveDiv(mouse, edge, elem) {
    const width = $(elem).outerWidth();
    const height = $(elem).outerHeight();
    
    switch (edge) {
      case "left":
        $(elem).css({
            left: mouse.pageX + 1
        });
        break;
      case "right":
        $(elem).css({
            left: mouse.pageX - width - 4
        });
        break;
      case "top":
        $(elem).css({
            top: mouse.pageY + 1
        });
        break;
      case "bottom":
        $(elem).css({
            top: mouse.pageY - height - 4
        });
        break;
    }
  }
  
  function closestEdge(mouse, elem) {
    let elemBounding = elem.getBoundingClientRect();
  
    let elementLeftEdge = elemBounding.left;
    let elementTopEdge = elemBounding.top;
    let elementRightEdge = elemBounding.right;
    let elementBottomEdge = elemBounding.bottom;
  
    let mouseX = mouse.pageX;
    let mouseY = mouse.pageY;
  
    let topEdgeDist = Math.abs(elementTopEdge - mouseY);
    let bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
    let leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
    let rightEdgeDist = Math.abs(elementRightEdge - mouseX);
  
    let min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
  
    let position;
  
    switch (min) {
      case leftEdgeDist:
        position = "left";
        break;
      case rightEdgeDist:
        position = "right";
        break;
      case topEdgeDist:
        position = "top";
        break;
      case bottomEdgeDist:
        position = "bottom";
        break;
    }
    
    moveDiv(mouse, position, elem);
  }

function FontChangeImpact() {
    document.getElementById("fontChange").inn;
}