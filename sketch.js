 var circleX = 100;
 var circleY = 300;
 var circleD = 10;
 
 function setup() {
 	createCanvas (500,500)
 	//background(random(255), random(255), random(255));

}

function draw() {
	background(random(255), random(255), random(255));
 fill(random(255), random(255), random(255));
	ellipse(circleX, circleY, circleD);
	circleX = circleX + random(-10,10);
	circleY = circleY + random(-10,10);
	circleD = circleD + random(-5, 5);
	
	if(circleX<0){
	   circleX = 20;
	}
	if(circleX>500){
		circleX = 20;
	}
	if(circleY<0){
		circleY = 2;
	}
	if(circleY>500){
		circleY = 20; 
	}
	if(circleD<1){
	circleD = 50;
 }
}
