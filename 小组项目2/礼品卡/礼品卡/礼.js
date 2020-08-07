window.onload = function(){
	function run(){
		window.setInterval(change,2000);
	}
	var i = 1;
	function change(){
		i+=1;
		if (i>4) {
			i=1;
		}
		document.getElementById('luen').src="轮播/顶部图片"+i+".jpg";
		document.getElementById('switchpoint'+i).setAttribute("style","margin-left: 10px;width: 14px;height: 10px;border-radius: 50px;background-color: white;float: left;margin-top: 6px;");
		if (i==1) {
			document.getElementById('switchpoint4').setAttribute("style","margin-left: 10px;width: 10px;height: 10px;border-radius: 100%;background-color: #0000005c;float: left;margin-top: 6px;");
		}else{
			document.getElementById('switchpoint'+(i-1)).setAttribute("style","margin-left: 10px;width: 10px;height: 10px;border-radius: 100%;background-color: #0000005c;float: left;margin-top: 6px;");
		}
	}
	run();
}
function huan(a){
	document.getElementById('center_left').style.display="none";
	document.getElementById('huan').style.display="block";
	document.getElementById('update1').setAttribute("style","position: absolute;border-radius: 100%;height: 20px;width: 20px;background-color:white;margin-left: 29px;border: 2px solid #CDCBCC;")
	document.getElementById('update2').setAttribute("style","border:none;position: absolute;border-radius: 100%;height: 25px;width: 25px;margin-left: 64px;background-color: #0086F6;")
}	
function huan1(a){
	document.getElementById('center_left').style.display="block";
	document.getElementById('huan').style.display="none";
	document.getElementById('update1').setAttribute("style","position: absolute;border-radius: 100%;height: 25px;width: 25px;background-color:white;margin-left: 29px;background-color: #0086F6;")
	document.getElementById('update2').setAttribute("style","border: 2px solid #CDCBCC;;position: absolute;border-radius: 100%;height: 20px;width: 20px;margin-left: 64px;")
}