// var centerPoint = document.getElementById("center-point");
// var xCoord = centerPoint.offsetLeft;
// var yCoord = centerPoint.offsetTop;
// alert(yCoord);

var circle = document.getElementById("circle");
// console.log(circle.children.length);

var angle = 0;
var zIndex = circle.children.length;
for (i = 0; i < circle.children.length; i++) {
  //   console.log(circle.children[i]);
  circle.children[i].style.transform = "rotate( " + angle + "deg)";
  circle.children[i].style.zIndex = zIndex;
  angle += 360 / circle.children.length;
  zIndex -= 1;
}
