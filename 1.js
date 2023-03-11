function displayCanvas(){
    var canvasHTML = document.getElementById('myCanvas');
    var contextHTML = canvasHTML.getContext('2d');
    contextHTML.strokeRect(0,0,canvasHTML.width, canvasHTML.height);
    //Тут будет вся логика часов и код отображения через графические примитивы
    return;
}

window.onload = function(){
   window.setInterval(
	function(){
	    var d = new Date();
	    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
            displayCanvas();
	}
  , 1000);
}
}