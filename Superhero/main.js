var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 120;
block_image_height = 120;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 30;
        block_image_height = block_image_height + 30;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed == '80') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 30;
        block_image_height = block_image_height - 30;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("currrent_height").innerHTML = block_image_height;
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '87') {
        new_image('bakugo.jpg');
        console.log("w");
    }
    if (keyPressed == '71') {
        new_image('Bakugo_dynamight.jpg');
        console.log("g");
    }
    if (keyPressed == '76') {
        new_image('Bakugo_Hero_Costume_Action.png');
        console.log("l");
    }
    if (keyPressed == '84') {
        new_image('bakugo_winter.png');
        console.log("t");
    }
    if (keyPressed == '82') {
        new_image('Katsuki_Bakugo_Winter.png');
        console.log("r");
    }
    if (keyPressed == '89') {
        new_image('bakugo_sit.jpg');
        console.log("y");
    }
    if (keyPressed == '68') {
        new_image('Katsuki-Bakugo.jpg');
        console.log("d");
    }
    if (keyPressed == '85') {
        new_image('bakugo-classic.jpg');
        console.log("u");
    }
    if (keyPressed == '67') {
        new_image('bakugo_explosion.jpg');
        console.log("c");
    }
}