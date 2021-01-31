//Create variables here
var dog, happyDog, database, foodS, foodStock
var dogimg,happydogimg

function preload()
{
  //load images here
  happydogimg = loadImage("dogImg.png")
  dogimg = loadImage("dogImg1.png")
}

function setup() {
  createCanvas( 500, 500);
  database = firebase.database()
  dog = createSprite(300,300)
  dog.addImage(dogimg)
  dog.scale = 0.5
  
}


function draw() {  

  drawSprites();
  //add styles here

}



