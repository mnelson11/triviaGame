//set up questions with own buttons and timer 
//check answer given, 
// add together correct and incorrect answers 
//immidiatly show result, then got to next question
//at the end of all the questions show total 

window.onload= function(){
	var intervalId;
	var time=15;
	var questionNum=0;



	$("#timeRemaining").html("<h2> Time Remaining: "+time+"</h2>")

	function question(){


	intervalId = setInterval(decrement, 1000);


	}

	function decrement(){
		time--;
		$("#timeRemaining").html("<h2> Time Remaining: "+time+"</h2>");
		if (time===0){
			timeUp();
		}
	}

	function timeUp(){
	alert("Time's up!");
	totalScore();
	}


	$(".submit").on("click", function(){
  	      
		totalScore();
 	});

 	function totalScore(){
 	
 		clearInterval(intervalId);

 		var amountCorrect = 0;          
		for(var i = 1; i <= 45; i++) {
		  	var radios = document.getElementsByName('group'+i);
		  	for(var j = 0; j < radios.length; j++) {
			    var radio = radios[j];
			    if(radio.value == "correct" && radio.checked) {
			      amountCorrect++;
			    }
		  	}
 		}                   
    	$("#question").html("<div><h2> Total correct: "+amountCorrect+"/5</h2>");


    	if(amountCorrect>=4){
    		console.log("good job")
    		$("<audio></audio>").attr({
		    'src':'audio/Kitten-sounds.mp3',
		    'volume':0.4,
		    'autoplay':'autoplay'
		}).appendTo("body");
    		$('#image').html('<img src="http://www.papercards.com/store/graphics/avanti/cd9417-happy-kitten-with-red-bow-christmas-card.jpg" alt="happy cat" style="width:600px"> <div><h3>Good Work!</h3></div> '); 
    	}else if (amountCorrect==3){
    		$('#image').html('<img src="https://s-media-cache-ak0.pinimg.com/736x/7f/e4/46/7fe446d149960c373c0646bdab65d529--gatos-cats-ginger-cat.jpg" alt="meh cat" style="width:600px"> <div><h3>Meh, Try a little harder next time.</h3></div>');
    		$("<audio></audio>").attr({
			    'src':'audio/Sad-cat.mp3',
			    'volume':0.4,
			    'autoplay':'autoplay'
			}).appendTo("body"); 
    	} else{
    		$("<audio></audio>").attr({
		    'src':'audio/Cat-hissing-sound.mp3',
		    'volume':0.4,
		    'autoplay':'autoplay'
		}).appendTo("body");
    		$('#image').html('<img src="http://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-8.jpg" alt="Angry cat" style="width:600px"> <div><h3>Did you even try?</h3></div>'); 
    	}

 	}

 question();

}