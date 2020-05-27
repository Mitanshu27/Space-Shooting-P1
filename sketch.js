var ship;
var asteroides_img;
var asteroids = [];
function preload()
{
  var asteroides_img = loadImage("1.png");
}
function setup()
{
  createCanvas(windowWidth,windowHeight);
  ship = new Ship();
  for(var i = 0; i < 5; i++)
  {
    asteroids.push(new Asteroid());
  }
}
function draw()
{
  background(0);
  ship.render();
  ship.turn();
  ship.update();
  for(var i = 0; i < asteroids.length; i++)
  {
    asteroids[i].render();
  }
}
function keyReleased()
{
  ship.setRotation(0);
  ship.boosting(false);
  ship.edges();
}
function keyPressed()
{
  if(keyCode == RIGHT_ARROW)
  {
    ship.setRotation(3);
  }
  if(keyCode == LEFT_ARROW)
  {
    ship.setRotation(-3);
  }
  if(keyCode == UP_ARROW)
  {
    ship.boosting(true);
  }
}
