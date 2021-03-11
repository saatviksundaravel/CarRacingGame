var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var car1_image="https://i.postimg.cc/YqdnnNX1/car1.png";
var car1_width=120;
var car1_height=70;
var car1_X=10;
var car1_Y=10;

var car2_image="https://i.postimg.cc/YqdnnNX1/car1.png";
var car2_width=120;
var car2_height=70;
var car2_X=10;
var car2_Y=90;

var background_image="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/05/04/49296dce-0093-4d95-ba6e-b5a7f25c0bfd/main-straight-madras-motor-racing-track-best-racetracks-india.jpg";
var bg_img=new Image();
var car1_img=new Image();
var car2_img=new Image();

window.addEventListener("keydown",onKeyPressed);

function onKeyPressed(keyEvent){

    var keyPressed=keyEvent.keyCode;

    if(keyPressed==38){
        car1_up();
        console.log("car1_up");
    }

    if(keyPressed==40){
        car1_down();
        console.log("car1_down");
    }

    if(keyPressed==37){
        car1_left();
        console.log("car1_left");
    }

    if(keyPressed==39){
        car1_right();
        console.log("car1_right")
    }

    if(keyPressed==87){
        car2_up();
        console.log("car2_up");
    }

    if(keyPressed==83){
        car2_down();
        console.log("car2_down");
    }

    if(keyPressed==65){
        car2_left();
        console.log("car2_left");
    }

    if(keyPressed==68){
        car2_right();
        console.log("car2_right")
    }


}

function add(){
    
    bg_img.onload=uploadBackground;
    bg_img.src=background_image;
    car1_img.onload=uploadCar1;
    car2_img.onload=uploadCar2;
    car1_img.src=car1_image;
    car2_img.src=car2_image;
}

function uploadBackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_img,car1_X,car1_Y,car1_width,car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_img,car2_X,car2_Y,car2_width,car2_height);
}

function car1_up(){

}

function car1_down(){

}

function car1_left(){

}

function car1_right(){

}

function car2_up(){

}

function car2_down(){

}

function car2_left(){

}

function car2_right(){

}