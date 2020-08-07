
window.onload = function(){
	var i = 0;
	function run(){
		window.setInterval(change,2500);
		window.setInterval(change2,2500);
	}
	function change(){
		i+=1;
		if(i>5){
			i=1;
		}
		document.getElementById('bopicture').src="nm/dome"+i+".jpg";
		document.getElementById('imagecentertext'+i).style.backgroundColor = "blue"
		if(i==1){
			document.getElementById('imagecentertext5').style.backgroundColor = "#00000063"
		}else{
			document.getElementById('imagecentertext'+(i-1)).style.backgroundColor = "#00000063"
		}		
	}
	var a = 0;
	function change2(){
		a+=1;
		if(a>6){
			a=1;
		}
		document.getElementById('tu').src="nm/tu"+a+".jpg";
		document.getElementById('dian'+a).setAttribute("style","background-color:white;border-radius: 50px;width: 14px;height: 9px;float: left;");
		if(a==1){
			document.getElementById('dian6').setAttribute("style","background-color:#00000063;border-radius: 100%;width: 9px;height: 9px;float: left;");	
		}else{
			document.getElementById('dian'+(a-1)).setAttribute("style","background-color:#00000063;border-radius: 100%;width: 9px;height: 9px;float: left;");
		}		
	}
	run();

}
function mu(a){
	if(a==1){
		document.getElementById('tt').style.display = "block";
	}else{
		document.getElementById('tt').style.display = "none";
	}
}
function test(a){
	document.getElementById('boxinput_1').value = a;
}
