//Create variables here
var dog ;
var database ;
var dogImage , dogImage2 ;
var foodS , foodStock ;
function preload()
{
dogImage = loadImage("images/dogImg.png");
dogImage2  = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database() ;
  createCanvas(500, 500);
  
  dog = createSprite(250,300);
  dog.addImage(dogImage);
  dog.scale = 0.5 ;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImage2);
}

  drawSprites();
  textSize(20);
  stroke("brown")
  text("Note : Press UP_ARROW key to feed dog milk",10,20 );
  
  textSize(20);
  stroke("brown");
  text("Food remaining : "+foodS , 20,50)

}

function readStock(data){
  foodS=data.val();
}

function writeStock(b){

if(b<=0){
  b=0;
}else{
  b=b-1
}


  database.ref('/').update({
    Food : b

  }

  )

  




}

