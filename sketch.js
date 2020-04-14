// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
 createCanvas(1200,400);
}

function draw() {
// Remember to update the Matter Engine and set the background.
fill("black");
rectMode(CENTER);
rect(60,390,100,20);
rectMode(CENTER);
rect(60,370,100,20);
rectMode(CENTER);
rect(100,350,100,10);
ellipseMode(CENTER);
circle(60,360,70);
ellipseMode(CENTER);
circle(940,100,50);
ellipseMode(CENTER);
circle(1000,300,50);
ellipseMode(CENTER);
circle(400,375,50);
}


