var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var confirm = new p5.SpeechRec();
var foo = new p5.Speech();
function setup() { // graphics stuff:
	createCanvas(800, 400);
	background(255, 255, 255);
	fill(0, 0, 0, 255);
	// instructions:
	textSize(32);
	textAlign(CENTER);
	text("say something", width / 2, height / 2);
	myRec.onResult = checkResult;
	myRec.onEnd = errorcatch;
	confirm.onResult = showResult
	myRec.start();
	console.log("start");
}
// 	function draw()
// 	{
// 		// why draw when you can talk?
// 	}
var img;
function errorcatch(){
	if(myRec.resultValue!= true){
		console.log("didn't hear")
		clear();
		background(255, 255, 255);
		fill(0, 0, 0, 255);
	// instructions:
		textSize(32);
		textAlign(CENTER);
		text("Sorry, we didn't catch that, try again", width / 2, height / 2);
	// console.log(myRec.resultValue)
		myRec.start();
	// myRec.onEnd = setnew;
	}
}
function checkResult() {
	console.log("check")
	if (myRec.resultValue == true) {
		background(192, 255, 192);
		 // speech synthesis object
		foo.speak("Did you say" + myRec.resultString); // say something
		foo.onEnd = listen;
	}
	
}
function listen(){
	console.log("here")
	console.log(confirm.resultValue)
	confirm.start();
	
}

function showResult() {
			if(confirm.resultString == "yes"){

			var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + myRec.resultString+ "&api_key=dfb264acffa3492f819190272fefc95d&limit=11");
		         xhr.done(function(data) {
		             var rand = Math.floor(Math.random() * 10)
		             console.log(rand)
		             var url = data["data"][rand]["images"]["fixed_height"]["url"]
		             console.log(url)
		             img = createImg(url)
		             // document.getElementById("result").setAttribute("src",url);
		             });
			text(myRec.resultString, width/2, height/2);
			console.log(myRec.resultString);
			button = createButton('Again!');
			button.position(19, 19);
		    button.mousePressed(rec);
			}
			else{
				console.log("no")
				clear()
				background(255, 255, 255);
				fill(0, 0, 0, 255);
				// instructions:
				textSize(32);
				textAlign(CENTER);
				text("My b, let's start over, say something again", width / 2, height / 2);
				myRec.start()
			}
		}

function rec() {
	clear();
	if(img){
	img.remove();
	}
	background(255, 255, 255);
	fill(0, 0, 0, 255);
	// instructions:
	textSize(32);
	textAlign(CENTER);
	text("say something", width / 2, height / 2);
	// console.log(myRec.resultValue)
	myRec.start();
	// myRec.onEnd = setnew;
	
}
function setnew(){
	console.log(myRec.resultValue)
	console.log(myRec.resultString)
	checkResult()
}