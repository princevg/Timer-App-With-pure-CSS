$(document).ready(function (){
    
    var count = 0;    
    var container = $(".container");
    $("#add").click(function (){
        count++;
        var timer_array =[
    '<input class = "start_button" id="start_'+count+'" name="controls" value = "Start" type="button" /><input class = "stop_button" id="stop_'+count+'" name="controls" value = "Stop"  type="button" /><input class = "reset_button" id="reset_'+count+'" name="controls" value = "Reset" type="button" />',
	'<div id = "timer_'+count+'" class="timer">',
		'<div class="cell"><div class="numbers tenhour moveten">0 1 2 3 4 5 6 7 8 9</div></div>',
		'<div class="cell"><div class="numbers hour moveten">0 1 2 3 4 5 6 7 8 9</div></div>',
		'<div class="cell divider"><div class="numbers">:</div></div>',
		'<div class="cell"><div class="numbers tenminute movesix">0 1 2 3 4 5 6</div></div>',
		'<div class="cell"><div class="numbers minute moveten">0 1 2 3 4 5 6 7 8 9</div></div>',
		'<div class="cell divider"><div class="numbers">:</div></div>',
                '<div class="cell"><div class="numbers tensecond movesix">0 1 2 3 4 5 6</div></div>',
		'<div class="cell"><div class="numbers second moveten">0 1 2 3 4 5 6 7 8 9</div></div>',
		'<div class="cell divider"><div class="numbers">:</div></div>',
		'<div class="cell"><div class="numbers milisecond moveten">0 1 2 3 4 5 6 7 8 9</div></div>',
		'<div class="cell"><div class="numbers tenmilisecond moveten">0 1 2 3 4 5 6 7 8 9</div></div>',
		'<div class="cell"><div class="numbers hundredmilisecond moveten">0 1 2 3 4 5 6 7 8 9</div></div>',
	'</div>'
	
	    ];
    var template = timer_array.join("");
        container.append(template);
    });
    
    $(".container").delegate(".start_button","click",function (){
        var id = $(this).attr("id").split("_")[1];
        $("#timer_"+id+" .numbers").css("animation-play-state","running");        
        
    });
    
     $(".container").delegate(".stop_button","click",function (){
        var id = $(this).attr("id").split("_")[1];
        $("#timer_"+id+" .numbers").css("animation-play-state","paused");
    });
    
     $(".container").delegate(".reset_button","click",function (){
        var id = $(this).attr("id").split("_")[1];
        var content = $("#timer_"+id).html();
        $("#timer_"+id).html(content);
        $("#timer_"+id+" .numbers").css("animation-play-state","paused");
    });
    });