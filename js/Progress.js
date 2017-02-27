				var sum1 = 0,sum2 = 0,sum3 = 0,sum4 = 0;
					
				jQuery(function ($) {					
					$('#code1').click(function () {
							var sample = $("#country option:selected").text();
							console.log("****",sample)
							if(sample == "progress1"){
								sum1 =sum1 - 20;			
								
								if (sum1 < 0){
									sum1 = 0;
								}
								else if(sum1 < 100)
								{
								var val = Math.floor((sum1)) + '%';
								$(progress1).width(val).text(val).css({background:"green"});
								}
								var val = Math.floor((sum1)) + '%';
								$(progress1).width(val).text(val);							
							}
								else if(sample == "progress2"){
								sum2 =sum2 - 20;
								
								
								if (sum2 < 0){
									sum2 = 0;
								}
								else if(sum2 < 100)
								{
								var val = Math.floor((sum2)) + '%';
								$(progress2).width(val).text(val).css({background:"green"});
								}
								var val = Math.floor((sum2)) + '%';
								$(progress2).width(val).text(val);
								
							}
								else if(sample == "progress3") {
								sum3 =sum3 - 20;							
								
								if (sum3 < 0){
									sum3 = 0;
								}
								else if(sum3 < 100)
								{
								var val = Math.floor((sum3)) + '%';
								$(progress3).width(val).text(val).css({background:"green"});
								}
								var val = Math.floor((sum3)) + '%';
								$(progress3).width(val).text(val);
								
							}				
					})
				});
				
				
				
				
				
				
				
		    