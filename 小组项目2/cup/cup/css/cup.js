window.onload = function(){
	var picture = document.getElementById('picture66').getAttribute("src");
	var font1 = document.getElementById('font').innerHTML;
	var font2 = document.getElementById('A143').innerHTML;
	var b = document.getElementById('ding').getAttribute("href");
	document.getElementById('ding').setAttribute("href",b+picture+'&'+escape(font1)+'&'+escape(font2));
}
function add(num){
	var v = document.getElementById('inupdate').value;
	if (num==1) {
		if (v==1) {
			document.getElementById('less').style.disabled="disabled";
		}else{
			v = v-1;
		}
			document.getElementById('inupdate').value=v;
	}else{
		document.getElementById('add').style.disabled="";
		v++;
		document.getElementById('inupdate').value=v;
	}
}
function change(a){
	if (a == 1) {
		document.getElementById('green').setAttribute("style","padding: 5px 15px;height: 20px;border: 1px solid blue;text-align: center;border-radius: 4px;margin-left: 10px;color: blue;margin-top: 13px;float: left;")
		document.getElementById('blue').setAttribute("style","width: 82px;height: 20px;border: 1px solid #e5e5e5;position: absolute;margin-left: 178px;border-radius: 4px;margin-top: 13px;color: #676767;");
		var font = document.getElementById('su').innerHTML;
		var b = document.getElementById('ding').getAttribute("href");
		
		document.getElementById('ding').setAttribute("href",b+'&'+escape(font));
	}else{
		document.getElementById('green').setAttribute("style","padding: 5px 15px;height: 20px;border: 1px solid #e5e5e5;text-align: center;border-radius: 4px;margin-left: 10px;color: #676767;margin-top: 13px;float: left;")
		document.getElementById('blue').setAttribute("style","width: 82px;height: 20px;border: 1px solid blue;position: absolute;margin-left: 178px;border-radius: 4px;margin-top: 13px;color:blue");
		var font = document.getElementById('he').innerHTML;
		var b = document.getElementById('ding').getAttribute("href");
		document.getElementById('ding').setAttribute("href",b+'&' +escape(font));
	}
}
function gou(){
	var v = document.getElementById('inupdate').value;
	var b = document.getElementById('ding').getAttribute("href");
	document.getElementById('ding').setAttribute("href",b+'&' +escape('×'+v));
}