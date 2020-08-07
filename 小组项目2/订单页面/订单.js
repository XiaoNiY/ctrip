window.onload= function() {
	var url = location.search;
	var theRequest = new Object();
	    if (url.indexOf("?") != -1){
	        var str = url.substr(1);
	        strs = str.split("&");
	        for (var i = 0; i < strs.length; i++){
	            theRequest[i] = unescape(strs[i]);
	        }
	    }
	 var c = document.getElementById('color').innerHTML;
	 document.getElementById('color').innerHTML = c+"<span class='information14'>"+theRequest[3]+"</span>";
	 var p = document.getElementById('price').innerHTML;
	 var b = theRequest[1].substr(1);
	 var b1 = theRequest[1].substr(0,1);
	 var d = theRequest[4].substr(1);
	 document.getElementById('price').innerHTML = p + "<span class='information15'>"+theRequest[1]+"</span><span class='information12'>"+theRequest[2]+"</span><span class='information16'>"+theRequest[4]+"</span><span class='information17'>"+b1+(b*d)+"</span>";
	 document.getElementById('picture66').src = theRequest[0];
	 var p1 = document.getElementById('price1').innerHTML;
	 document.getElementById('price1').innerHTML = p1 + "<span class='information32'>"+b1+(b*d)+"</span><span class='information38'>"+b1+((b*d)+7-20)+"</span>";

}
function ifm3(a) {
	if(a==1){
		document.getElementById('ifm3').style.display ="block";
	}else if(a==2){
		document.getElementById('ifm3').style.display ="none";
	}
}
var a = 35;
function pass(){
	
	var html = document.getElementById('ifm4').innerHTML;
	var v = document.getElementById('ifminput').value;
	var v1 = document.getElementById('ifminput1').value+document.getElementById('ifminput2').value;
	var v2 = document.getElementById('xia').value+document.getElementById('ifminput4').value+document.getElementById('ifminput5').value+document.getElementById('ifminput3').value;
	document.getElementById('ifm4').innerHTML = html + "<ul id='pass'><li class='pass1'>"+v+"</li><li class='pass1'>"+v1+"</li><li class='pass1'>"+v2+"</li></ul>";
	document.getElementById('pass').setAttribute("style","position: absolute;margin-left: 13px;width: 573px;height: 24px;margin-top:"+a+"px;");
	a=a+26;

}