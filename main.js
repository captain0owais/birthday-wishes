var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

var p_object="";

function new_image()
{
	fabric.Image.fromURL("player.png",function (img){
        p_object=img;
        p_object.scaleToWidth(50);
        p_object.scaleToHeight(100);
        p_object.set({
            top:p_y,
            left:p_x
        });
        canvas.add(p_object);
    });
}

function playSound(){
	x.play();
}
