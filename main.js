var canvas = new fabric.Canvas('myCanvas');

block_image_width = 300;
block_image_height = 300;

player_x = 10;
player_y = 10;

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
    console.log("p and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;   
}
if(e.shiftKey && keyPressed == '77')
{
    console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}


    if(keyPressed == '82')
    {
        new_image('Agni.png'); 
        console.log("r");
    }
    if(keyPressed == '71')
    {
        new_image('Juvenile.gif'); 
        console.log("g");
    }
    if(keyPressed == '89')
    {
        new_image('Happy.png'); 
        console.log("y");
    }
    if(keyPressed == '80')
    {
        new_image('Amity.png'); 
        console.log("p");
    }
    if(keyPressed == '66')
    {
        new_image('Aman.png'); 
        console.log("b");
    }
    
}

