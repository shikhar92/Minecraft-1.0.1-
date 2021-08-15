canvas=new fabric.Canvas("myCanvas");
px=10;
py=10;
blockw=30;
blockh=30;
pobject="";
bobject="";
function playerupdate()
{
fabric.Image.fromURL("player.png",function (Img)
{
pobject=Img;
pobject.scaleToWidth(150);
pobject.scaleToHeight(150);
pobject.set({
    top:py,left:px
});
canvas.add(pobject);
}
);
}
function blockupdate(getImage)
{
fabric.Image.fromURL(getImage,function (Img)
{
bobject=Img;
bobject.scaleToWidth(blockw);
bobject.scaleToHeight(blockh);
bobject.set({
top:py,left:px
}
);
canvas.add(bobject);
}
    );
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keypress=e.keyCode;
if(keypress=='38'){
up ();
console.log("up");
}
if(keypress=='40'){
    down ();
    console.log("down");
    }
if(keypress=='37'){
     left  ();
    console.log("left");
        }
 if(keypress=='39'){
  right ();
  console.log("right");
            }
if(keypress=='87'){
blockupdate ("wall.jpg");
console.log("w");
}
if(keypress=='71'){
    blockupdate ("ground.png");
    console.log("g");
    }
    if(keypress=='76'){
        blockupdate ("light_green.png");
        console.log("l");
        }
        if(keypress=='84'){
            blockupdate ("trunk.jpg");
            console.log("t");
            }
            if(keypress=='82'){
                blockupdate ("roof.jpg");
                console.log("r");
                }
                if(keypress=='89'){
                    blockupdate ("yellow_wall.png");
                    console.log("y");
                    }
                    if(keypress=='68'){
                        blockupdate ("dark_green.png");
                        console.log("d");
                        }
                        if(keypress=='85'){
                            blockupdate ("unique.png");
                            console.log("u");
                            }
                            if(keypress=='67'){
                                blockupdate ("cloud.jpg");
                                console.log("c");
                            }
}