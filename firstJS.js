
$(document).ready(function(){

	var arr=["Premi kadi zukyo nahi ane zukshe nahi","Char-Char bangadivali gai lai dav","Never underastimate the power of a common man","Silent hoja warna mein violent ho jaunga"];
	var count=0;
	$("button").click(function(){
		$('#paragraph-1').text("\""+arr[count++]+"\"");
		if(count===3)
			count=0;
	});

});



