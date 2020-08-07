window.onload=function(){
	var strs=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
	var i = 1;
	var j=0;
	function run(){
		window.setInterval(change,2000);
		window.setInterval(move,200);
		window.setInterval(imgchange,3000);
	}
	function change(){
		i+=1;
		if (i>5) {
			i=1;
		}
		document.getElementById('switchbegin').src="轮播图/dome"+i+".jpg";
		document.getElementById('switchpoint'+i).setAttribute("style","margin-left: 10px;width: 14px;height: 10px;border-radius: 50px;background-color: white;float: left;margin-top: 6px;");
		if (i==1) {
			document.getElementById('switchpoint5').setAttribute("style","margin-left: 10px;width: 10px;height: 10px;border-radius: 100%;background-color: #0000005c;float: left;margin-top: 6px;");
		}else{
			document.getElementById('switchpoint'+(i-1)).setAttribute("style","margin-left: 10px;width: 10px;height: 10px;border-radius: 100%;background-color: #0000005c;float: left;margin-top: 6px;");
		}
	}
	function imgchange(){
		
		j++;
		document.getElementById('img1').src="自动/"+strs[j-1]+"";
		if(j-1==4){
			j=0;
		}
		document.getElementById('img2').src="自动/"+strs[j]+"";//0 1 2 3 4 5
		if(j==4){
			document.getElementById('img3').src="自动/"+strs[0]+"";
		}else{
			document.getElementById('img3').src="自动/"+strs[j+1]+"";
		}
	}

	run();
}
function move(){
	 document.getElementById('switchdome22').value =document.documentElement.scrollTop;
	var a = document.documentElement.scrollTop;
	if (a>=550) {
		document.getElementById('switchdome19').setAttribute("style","margin-left: 257px;width: 868px;height: 35px;background-color: white;position: fixed;border: 2px solid #4c558a;margin-top:-174px;z-index:999;");
		document.getElementById('switchdome23').setAttribute("style","width: 258px;background-color:#4C558A;height: 39px;position: fixed;margin-top:-174px;z-index:999;");
	}
	if (a<400) {
		document.getElementById('switchdome19').setAttribute("style","margin-left: 257px;width: 868px;height: 35px;background-color: white;position: absolute;border: 2px solid #4c558a;");
		document.getElementById('switchdome23').setAttribute("style","width: 251px;background-color:#4C558A;height: 41px;position:absolute;");
	}
}
/*var s = 1;
function shopswitch(a){
	s+=1;
	if (s>3) {
		s=1;
	}
	if (a==1) {
		document.getElementById('shoppicture').src="切换图/dome"+s+".jpg";
	}
	if (a==2) {
		document.getElementById('shoppicture').src="切换图/dome"+(s-1)+".jpg";
	}
	
}*/

function shopswitch(a){
	var va = document.getElementById('shoppicture').getAttribute("tag");
	var num = a + parseInt(va);
	if (num == 0) {
		num = 3;
	}
	if (num == 4) {
		num = 1;
	}
	document.getElementById('shoppicture').src="切换图/dome"+num+".jpg";
	document.getElementById('shoppicture').setAttribute("tag", num);
	document.getElementById('huan' + va).style.display = "none";
	document.getElementById('huan' + num).style.display = "block";
}

function bigImg(jing) {
	document.getElementById('dong').setAttribute("style","margin-left: 12px;height: 33px;float: left;color: #595959;font-size: 14px;width: 49px;margin-top: -8px;border-top: 1px solid #a6a6a6;border-left: 1px solid #a6a6a6;border-right: 1px solid #a6a6a6;background-color: #F1F1F1;");
	document.getElementById('xiang').setAttribute("style","margin-left: 12px;height: 33px;float: left;color: #595959;font-size: 14px;width: 49px;margin-top: -8px;border-top:none;border-left:none;border-right:none;background-color: #F1F1F1;");
    document.getElementById('jing').style.display="block";
    document.getElementById('jing2').style.display="block";
    document.getElementById('gang').style.display="none";
    document.getElementById('gang2').style.display="none";
}
function big(dong) {
	document.getElementById('dong').setAttribute("style","margin-left: 12px;height: 33px;float: left;color: #595959;font-size: 14px;width: 49px;margin-top: -8px;border-top:none;border-left: none;border-right: none;background-color: #F1F1F1;");
	document.getElementById('xiang').setAttribute("style","margin-left: 12px;height: 33px;float: left;color: #595959;font-size: 14px;width: 49px;margin-top: -8px;border-top: 1px solid #a6a6a6;border-left: 1px solid #a6a6a6;border-right: 1px solid #a6a6a6;background-color: #F1F1F1;");
    document.getElementById('jing').style.display="none";
    document.getElementById('jing2').style.display="none";
    document.getElementById('gang').style.display="block";
    document.getElementById('gang2').style.display="block";
}

