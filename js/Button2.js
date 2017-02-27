var sum1 = 0,sum2 = 0,sum3 = 0,sum4 = 0;
jQuery(function ($) {
	$('#code2').click(function () {
		var sample = $("#ProgressBars option:selected").text();
		console.log("****",sample)
		
		if(sample == "progress1"){
			sum1 = sum1 -10;				
			if (sum1 < 0){
				sum1 = 0;
			}else if(sum1 < 100){
				var val = Math.floor((sum1)) + '%';
				$(progress1).width(val).css({background:"Cyan"});
				$("#gridSpan1").text(val);
			}
			var val = Math.floor((sum1)) + '%';
			$(progress1).width(val);	
			$("#gridSpan1").text(val);
		
		}else if(sample == "progress2"){
			sum2 = sum2 -10;				
			if (sum2 < 0){
				sum2 = 0;
			}else if(sum2 < 100){
				var val = Math.floor((sum2)) + '%';
				$(progress2).width(val).css({background:"Cyan"});
				$("#gridSpan2").text(val);
			}
			var val = Math.floor((sum2)) + '%';
			$(progress2).width(val);
			$("#gridSpan2").text(val);
			
			
		}else if(sample == "progress3"){

			sum3= sum3 -10;					
			if (sum3 < 0){
				sum3 = 0;
			}else if(sum3 < 100){
				var val = Math.floor((sum3)) + '%';
				$(progress3).width(val).css({background:"Cyan"});
				$("#gridSpan3").text(val);

			}
			var val = Math.floor((sum3)) + '%';
			$(progress3).width(val);
$("#gridSpan3").text(val);			
		}	
	})
});