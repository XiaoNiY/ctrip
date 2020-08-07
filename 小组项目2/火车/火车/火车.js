window.onload=function(){
	var i = 0;
	function run(){
		window.setInterval(change,3000);
	}
	function change(){
		i+=1;
		if (i>2) {
			i=1;
		}
		document.getElementById('tu').src="nm/dome"+i+".jpg";
		document.getElementById('update'+i).setAttribute("style","margin-left: 5px;width: 17px;height: 10px;border-radius: 50px;background-color: white;float: left;margin-top: 5px;");
		if(i==1){
			document.getElementById('update2').setAttribute("style","margin-left:5px;width: 10px;height: 10px;border-radius: 100%;background-color: #00000069;float: left;margin-top: 5px;");
		}else{
			document.getElementById('update'+(i-1)).setAttribute("style","margin-left: 5px;width: 10px;height: 10px;border-radius:100%;background-color: #00000069;float: left;margin-top: 5px;");
		}
	}

	run();
}