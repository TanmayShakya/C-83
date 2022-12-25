
canvas = getElementbyId("my_canvas")
ctx = canvas.getContext("2d")
color = red;
width_of_line = 2;
var width = screen.width
new_width = screen.width - 70;
new_height = screen.height - 300;
if (screen.width < 992) {
    canvas.getElementbyId("my_canvas").width = new_width
    canvas.getElementbyId("my_canvas").height = new_height
    document.body.style.overflow = "hidden";
}
canvas.addEventlistner("touchstart","my_touchstart")
function my_touchstart(e)
{
    console.log("my_touchstart")
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clienty - canvas.offsetTop;
}
canvas.addEventlistner("touchmove","my_touchmove")
function my_touchmove(e)
{
    console.log("my_touchmove")
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clienty - canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line

console.log("Last Position of x and y coordinate = ");
console.log("x = " + last_position_of_x ,"y = " + last_position_of_y)
ctx.moveTo(last_position_of_x,last_position_of_y)

console.log("Current Position of x and y coordinate = ");
console.log("x = " + current_position_of_x ,"y = " + current_position_of_y)
ctx.lineTo(current_position_of_x,current_position_of_y)
ctx.stroke();
 
last_position_of_x = current_position_of_x
last_position_of_y = current_position_of_y
}