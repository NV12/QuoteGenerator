
$(document).ready(function(){

	var arr=["Silent hoja warna mein violent ho jaunga","Premi kadi zukyo nahi ane zukshe nahi","Char-Char bangadivali gadi lai dav","Never underastimate the power of a common man"];
	var count=0,check=0;
	$("button").click(function(){
		$('#paragraph-1').text("\""+arr[++count]+"\"");
		if(count===3)
			count=0;
		check=1;
	});

	$("a.c-1").click(function(){
		if(check===1)
			var newURL="https://twitter.com/share?text="+arr[count];
		else
			var newURL="https://twitter.com/share?text="+arr[0];
		$(this).attr('href',newURL);
	});

});



