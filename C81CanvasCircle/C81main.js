canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(200, 200, 40, 0, 360);
ctx.arc(265, 200, 40, 0, 360);
ctx.arc(334, 200, 40, 0, 360);
ctx.arc(238, 278, 40, 0, 360);
ctx.arc(308, 278, 40, 0, 360);

ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X =" + mouse_x + "Y = " + mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 360);
    ctx.stroke();


}