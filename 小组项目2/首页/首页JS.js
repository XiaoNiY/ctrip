window.onload=function(){
	var i = 1;
	function run(){
		window.setInterval(change,3000);
		window.setInterval(reset,500);
		window.setInterval(move,1);

	}
	function reset(){
		var v=600-document.documentElement.scrollTop;
		if(v>=200){
			document.getElementById('adv').style.top=v+"px";
		}
	}

	function change(){
		i+=1;
		if (i>5) {
			i=1;
		}
		document.getElementById('picture').src="轮播图/dome"+i+".jpg";
		document.getElementById('supdate'+i).setAttribute("style","width: 24px;height: 12px;background-color: white;float: left;border-radius: 50px;");
		if (i==1) {
			document.getElementById('supdate5').setAttribute("style","width: 13px;height: 13px;background-color:#0000007a;float: left;border-radius: 100%;margin-left: 7px;border: 2px solid white;");
		}else{
			document.getElementById('supdate'+(i-1)).setAttribute("style","width: 13px;height: 13px;background-color:#0000007a;float: left;border-radius: 100%;margin-left: 7px;border: 2px solid white;");
		}
		
	}

	run();
	setBd3s(1);
}

function move(){
	var v1=document.getElementById('adv').style.top;
	var v=600-document.documentElement.scrollTop;
	document.getElementById('adv').value=v;
	document.getElementById('testtext').value=v;

	if(v<=300){
		if (v < 600 && v>-100) {
			document.getElementById('gofont0').style.display = "block";
			document.getElementById('gotu0').style.display = "none";
		document.getElementById('gofont1').style.display = "none";
		document.getElementById('gotu1').style.display = "block";
		document.getElementById('gofont2').style.display = "none";
		document.getElementById('gotu2').style.display = "block";
		document.getElementById('gofont3').style.display = "none";
		document.getElementById('gotu3').style.display = "block";
		document.getElementById('gofont4').style.display = "none";
		document.getElementById('gotu4').style.display = "block";
		document.getElementById('gofont5').style.display = "none";
		document.getElementById('gotu5').style.display = "block";
		document.getElementById('gofont6').style.display = "none";
		document.getElementById('gotu6').style.display = "block";
		document.getElementById('gofont7').style.display = "none";
		document.getElementById('gotu7').style.display = "block";
		document.getElementById('gofont8').style.display = "none";
		document.getElementById('gotu8').style.display = "block";
		}
		if (v < -100 && v>-300) {
		document.getElementById('gofont0').style.display = "none";
		document.getElementById('gotu0').style.display = "block";
			document.getElementById('gofont1').style.display = "block";
			document.getElementById('gotu1').style.display = "none";
		document.getElementById('gofont2').style.display = "none";
		document.getElementById('gotu2').style.display = "block";
		document.getElementById('gofont3').style.display = "none";
		document.getElementById('gotu3').style.display = "block";
		document.getElementById('gofont4').style.display = "none";
		document.getElementById('gotu4').style.display = "block";
		document.getElementById('gofont5').style.display = "none";
		document.getElementById('gotu5').style.display = "block";
		document.getElementById('gofont6').style.display = "none";
		document.getElementById('gotu6').style.display = "block";
		document.getElementById('gofont7').style.display = "none";
		document.getElementById('gotu7').style.display = "block";
		document.getElementById('gofont8').style.display = "none";
		document.getElementById('gotu8').style.display = "block";
		}
		if (v < -500 && v>-900) {
		document.getElementById('gofont0').style.display = "none";
		document.getElementById('gotu0').style.display = "block";
		document.getElementById('gofont1').style.display = "none";
		document.getElementById('gotu1').style.display = "block";
			document.getElementById('gofont2').style.display = "block";
			document.getElementById('gotu2').style.display = "none";
		document.getElementById('gofont3').style.display = "none";
		document.getElementById('gotu3').style.display = "block";
		document.getElementById('gofont4').style.display = "none";
		document.getElementById('gotu4').style.display = "block";
		document.getElementById('gofont5').style.display = "none";
		document.getElementById('gotu5').style.display = "block";
		document.getElementById('gofont6').style.display = "none";
		document.getElementById('gotu6').style.display = "block";
		document.getElementById('gofont7').style.display = "none";
		document.getElementById('gotu7').style.display = "block";
		document.getElementById('gofont8').style.display = "none";
		document.getElementById('gotu8').style.display = "block";
		}
		if (v < -900 && v>-1100) {
		document.getElementById('gofont0').style.display = "none";
		document.getElementById('gotu0').style.display = "block";
		document.getElementById('gofont1').style.display = "none";
		document.getElementById('gotu1').style.display = "block";
		document.getElementById('gofont2').style.display = "none";
		document.getElementById('gotu2').style.display = "block";
			document.getElementById('gofont3').style.display = "block";
			document.getElementById('gotu3').style.display = "none";
		document.getElementById('gofont4').style.display = "none";
		document.getElementById('gotu4').style.display = "block";
		document.getElementById('gofont5').style.display = "none";
		document.getElementById('gotu5').style.display = "block";
		document.getElementById('gofont6').style.display = "none";
		document.getElementById('gotu6').style.display = "block";
		document.getElementById('gofont7').style.display = "none";
		document.getElementById('gotu7').style.display = "block";
		document.getElementById('gofont8').style.display = "none";
		document.getElementById('gotu8').style.display = "block";
		}
		if (v < -1200 && v>-1400) {
		document.getElementById('gofont0').style.display = "none";
		document.getElementById('gotu0').style.display = "block";
		document.getElementById('gofont1').style.display = "none";
		document.getElementById('gotu1').style.display = "block";
		document.getElementById('gofont2').style.display = "none";
		document.getElementById('gotu2').style.display = "block";
		document.getElementById('gofont3').style.display = "none";
		document.getElementById('gotu3').style.display = "block";
			document.getElementById('gofont4').style.display = "block";
			document.getElementById('gotu4').style.display = "none";
		document.getElementById('gofont5').style.display = "none";
		document.getElementById('gotu5').style.display = "block";
		document.getElementById('gofont6').style.display = "none";
		document.getElementById('gotu6').style.display = "block";
		document.getElementById('gofont7').style.display = "none";
		document.getElementById('gotu7').style.display = "block";
		document.getElementById('gofont8').style.display = "none";
		document.getElementById('gotu8').style.display = "block";
		}
		if (v < -1500 && v>-1600) {
		document.getElementById('gofont0').style.display = "none";
		document.getElementById('gotu0').style.display = "block";
		document.getElementById('gofont1').style.display = "none";
		document.getElementById('gotu1').style.display = "block";
		document.getElementById('gofont2').style.display = "none";
		document.getElementById('gotu2').style.display = "block";
		document.getElementById('gofont3').style.display = "none";
		document.getElementById('gotu3').style.display = "block";
		document.getElementById('gofont4').style.display = "none";
		document.getElementById('gotu4').style.display = "block";
			document.getElementById('gofont5').style.display = "block";
			document.getElementById('gotu5').style.display = "none";
		document.getElementById('gofont6').style.display = "none";
		document.getElementById('gotu6').style.display = "block";
		document.getElementById('gofont7').style.display = "none";
		document.getElementById('gotu7').style.display = "block";
		document.getElementById('gofont8').style.display = "none";
		document.getElementById('gotu8').style.display = "block";
		}
		if (v < -1800 && v>-1900) {
		document.getElementById('gofont0').style.display = "none";
		document.getElementById('gotu0').style.display = "block";
		document.getElementById('gofont1').style.display = "none";
		document.getElementById('gotu1').style.display = "block";
		document.getElementById('gofont2').style.display = "none";
		document.getElementById('gotu2').style.display = "block";
		document.getElementById('gofont3').style.display = "none";
		document.getElementById('gotu3').style.display = "block";
		document.getElementById('gofont4').style.display = "none";
		document.getElementById('gotu4').style.display = "block";
		document.getElementById('gofont5').style.display = "none";
		document.getElementById('gotu5').style.display = "block";
			document.getElementById('gofont6').style.display = "block";
			document.getElementById('gotu6').style.display = "none";
		document.getElementById('gofont7').style.display = "none";
		document.getElementById('gotu7').style.display = "block";
		document.getElementById('gofont8').style.display = "none";
		document.getElementById('gotu8').style.display = "block";
		}
		if (v < -2000 && v>-2100) {
		document.getElementById('gofont0').style.display = "none";
		document.getElementById('gotu0').style.display = "block";
		document.getElementById('gofont1').style.display = "none";
		document.getElementById('gotu1').style.display = "block";
		document.getElementById('gofont2').style.display = "none";
		document.getElementById('gotu2').style.display = "block";
		document.getElementById('gofont3').style.display = "none";
		document.getElementById('gotu3').style.display = "block";
		document.getElementById('gofont4').style.display = "none";
		document.getElementById('gotu4').style.display = "block";
		document.getElementById('gofont5').style.display = "none";
		document.getElementById('gotu5').style.display = "block";
		document.getElementById('gofont6').style.display = "none";
		document.getElementById('gotu6').style.display = "block";
			document.getElementById('gofont7').style.display = "block";
			document.getElementById('gotu7').style.display = "none";
		document.getElementById('gofont8').style.display = "none";
		document.getElementById('gotu8').style.display = "block";
		}
		if (v < -2200 && v>-2300) {
		document.getElementById('gofont0').style.display = "none";
		document.getElementById('gotu0').style.display = "block";
		document.getElementById('gofont1').style.display = "none";
		document.getElementById('gotu1').style.display = "block";
		document.getElementById('gofont2').style.display = "none";
		document.getElementById('gotu2').style.display = "block";
		document.getElementById('gofont3').style.display = "none";
		document.getElementById('gotu3').style.display = "block";
		document.getElementById('gofont4').style.display = "none";
		document.getElementById('gotu4').style.display = "block";
		document.getElementById('gofont5').style.display = "none";
		document.getElementById('gotu5').style.display = "block";
		document.getElementById('gofont6').style.display = "none";
		document.getElementById('gotu6').style.display = "block";
		document.getElementById('gofont7').style.display = "none";
		document.getElementById('gotu7').style.display = "block";
			document.getElementById('gofont8').style.display = "block";
			document.getElementById('gotu8').style.display = "none";
		}
		document.getElementById('adv').style.top="250px";
	}else{
		if(v1<=600&&v>=100){
			document.getElementById('adv').style.top="600px";
		}
		else{
			document.getElementById('adv').style.top=v+"px";
		}
	}
}
function Switch(){
	document.getElementById('picture').src="轮播图/dome1.jpg";
	document.getElementById('picture').src="轮播图/dome2.jpg";
}
function Switch1(){
	document.getElementById('picture').src="轮播图/dome2.jpg";
	document.getElementById('picture').src="轮播图/dome1.jpg";
}
function domeswitch1(){
	document.getElementById("bodydome").style.display = 'block';
	document.getElementById("bodydome1").style.display = 'none';
	document.getElementById("bodydome2").style.display = 'none';
	document.getElementById("Discoloration1").style.color = '#1974D1';
	document.getElementById("Discoloration").style.color = '#666';
	document.getElementById("Discoloration2").style.color = '#666';
}
function domeswitch2(){
	document.getElementById("bodydome").style.display = 'none';
	document.getElementById("bodydome2").style.display = 'block';
	document.getElementById("bodydome1").style.display = 'none';
	document.getElementById("Discoloration1").style.color = '#666';
	document.getElementById("Discoloration").style.color = '#666';
	document.getElementById("Discoloration2").style.color = '#1974D1';
}
function domeswitch(){
	document.getElementById("Discoloration").style.color = '#1974D1';
	document.getElementById("Discoloration1").style.color = '#666';
	document.getElementById("Discoloration2").style.color = '#666';
	document.getElementById("bodydome").style.display = 'none';
	document.getElementById("bodydome1").style.display = 'block';
	document.getElementById("bodydome2").style.display = 'none';

}
function Switch2(a,b,c){
	var num = [5,6,16,17,18,19,20];
	switch(a){
		case 1:
			s1(b,c);
			break;
		case 2:
			s2(b,c);
			break;
		case 3:
			s1(b,c);
			break;
		case 4:
			s2(b,c);
			break;
		case 5:
			s1(b,c);
			break;
		case 6:
			s2(b,c);
			break;
		case 7:
			s1(b,c);
			break;
	}
	for (var i = 0; i < num.length; i++) {
		if (num[i] != b && num[i] != c) {
			document.getElementById("bodydome" + num[i]).style.display = 'none';
		}
	}
	var li = document.getElementsByName("b1");
	for (var i = 1; i <= li.length; i++) {
		if (a == i) {
			setBd3s(i);
		} else {
			setBd3(i);
		}
	}
}

function s1(b,c) {
	document.getElementById("bodydome"+c).style.display = 'block';
	document.getElementById("bodydome"+b).style.display = 'none';
}

function s2(b,c) {
	document.getElementById("bodydome"+b).style.display = 'block';
	document.getElementById("bodydome"+c).style.display = 'none';
}



function domeswitch4(){
	document.getElementById("bodydome9").style.display = 'block';
	document.getElementById("bodydome7").style.display = 'none';
	document.getElementById("bodydome8").style.display = 'none';
	document.getElementById("Discoloration4").style.color = '#1974D1';
	document.getElementById("Discoloration3").style.color = '#666';
	document.getElementById("Discoloration5").style.color = '#666';
}
function domeswitch5(){
	document.getElementById("bodydome9").style.display = 'none';
	document.getElementById("bodydome8").style.display = 'block';
	document.getElementById("bodydome7").style.display = 'none';
	document.getElementById("Discoloration4").style.color = '#666';
	document.getElementById("Discoloration3").style.color = '#666';
	document.getElementById("Discoloration5").style.color = '#1974D1';
}
function domeswitch3(){
	document.getElementById("Discoloration3").style.color = '#1974D1';
	document.getElementById("Discoloration4").style.color = '#666';
	document.getElementById("Discoloration5").style.color = '#666';
	document.getElementById("bodydome9").style.display = 'none';
	document.getElementById("bodydome7").style.display = 'block';
	document.getElementById("bodydome8").style.display = 'none';
}


function domeswitch6(){
	document.getElementById("bodydome10").style.display = 'block';
	document.getElementById("bodydome11").style.display = 'none';
	document.getElementById("bodydome12").style.display = 'none';
	document.getElementById("bodydome13").style.display = 'none';
	document.getElementById("bodydome14").style.display = 'none';
	document.getElementById("bodydome15").style.display = 'none';
	document.getElementById("Discoloration6").style.color = '#1974D1';
	document.getElementById("Discoloration7").style.color = '#666';
	document.getElementById("Discoloration8").style.color = '#666';
	document.getElementById("Discoloration9").style.color = '#666';
	document.getElementById("Discoloration10").style.color = '#666';
	document.getElementById("Discoloration11").style.color = '#666';
}
function domeswitch7(){
	document.getElementById("bodydome10").style.display = 'none';
	document.getElementById("bodydome11").style.display = 'block';
	document.getElementById("bodydome12").style.display = 'none';
	document.getElementById("Discoloration6").style.color = '#666';
	document.getElementById("Discoloration7").style.color = '#1974D1';
	document.getElementById("Discoloration8").style.color = '#666';
	document.getElementById("Discoloration9").style.color = '#666';
	document.getElementById("Discoloration10").style.color = '#666';
	document.getElementById("Discoloration11").style.color = '#666';
	document.getElementById("bodydome13").style.display = 'none';
	document.getElementById("bodydome14").style.display = 'none';
	document.getElementById("bodydome15").style.display = 'none';
}
function domeswitch8(){
	document.getElementById("bodydome10").style.display = 'none';
	document.getElementById("bodydome11").style.display = 'none';
	document.getElementById("bodydome12").style.display = 'block';
	document.getElementById("bodydome13").style.display = 'none';
	document.getElementById("bodydome14").style.display = 'none';
	document.getElementById("bodydome15").style.display = 'none';
	document.getElementById("Discoloration6").style.color = '#666';
	document.getElementById("Discoloration7").style.color = '#666';
	document.getElementById("Discoloration8").style.color = '#1974D1';
	document.getElementById("Discoloration9").style.color = '#666';
	document.getElementById("Discoloration10").style.color = '#666';
	document.getElementById("Discoloration11").style.color = '#666';
}
function domeswitch9(){
	document.getElementById("bodydome10").style.display = 'none';
	document.getElementById("bodydome11").style.display = 'none';
	document.getElementById("bodydome12").style.display = 'none';
	document.getElementById("bodydome13").style.display = 'block';
	document.getElementById("bodydome14").style.display = 'none';
	document.getElementById("bodydome15").style.display = 'none';
	document.getElementById("Discoloration6").style.color = '#666';
	document.getElementById("Discoloration7").style.color = '#666';
	document.getElementById("Discoloration8").style.color = '#666';
	document.getElementById("Discoloration9").style.color = '#1974D1';
	document.getElementById("Discoloration10").style.color = '#666';
	document.getElementById("Discoloration11").style.color = '#666';
}
function domeswitch10(){
	document.getElementById("bodydome10").style.display = 'none';
	document.getElementById("bodydome11").style.display = 'none';
	document.getElementById("bodydome12").style.display = 'none';
	document.getElementById("Discoloration6").style.color = '#666';
	document.getElementById("Discoloration7").style.color = '#666';
	document.getElementById("Discoloration8").style.color = '#666';
	document.getElementById("bodydome13").style.display = 'none';
	document.getElementById("bodydome14").style.display = 'block';
	document.getElementById("bodydome15").style.display = 'none';
	document.getElementById("Discoloration9").style.color = '#666';
	document.getElementById("Discoloration10").style.color = '#1974D1';
	document.getElementById("Discoloration11").style.color = '#666';
}
function domeswitch11(){
	document.getElementById("bodydome10").style.display = 'none';
	document.getElementById("bodydome11").style.display = 'none';
	document.getElementById("bodydome12").style.display = 'none';
	document.getElementById("Discoloration6").style.color = '#666';
	document.getElementById("Discoloration7").style.color = '#666';
	document.getElementById("Discoloration8").style.color = '#666';
	document.getElementById("bodydome13").style.display = 'none';
	document.getElementById("bodydome14").style.display = 'none';
	document.getElementById("bodydome15").style.display = 'block';
	document.getElementById("Discoloration9").style.color = '#666';
	document.getElementById("Discoloration10").style.color = '#666';
	document.getElementById("Discoloration11").style.color = '#1974D1';
}

function Bswitch1(){
	document.getElementById("body2dome").style.display = 'block';
	document.getElementById("body2dome1").style.display = 'none';
	document.getElementById("body2dome2").style.display = 'none';
	document.getElementById("body2dome3").style.display = 'none';
	document.getElementById("body2font1").style.color = '#4786D3';
	document.getElementById("body2font2").style.color = 'black';
	document.getElementById("body2font3").style.color = 'black';
	document.getElementById("body2font4").style.color = 'black';


}
function Bswitch2(){
	document.getElementById("body2dome").style.display = 'none';
	document.getElementById("body2dome1").style.display = 'block';
	document.getElementById("body2dome2").style.display = 'none';
	document.getElementById("body2dome3").style.display = 'none';
	document.getElementById("body2font1").style.color = 'black';
	document.getElementById("body2font2").style.color = '#4786D3';
	document.getElementById("body2font3").style.color = 'black';
	document.getElementById("body2font4").style.color = 'black';
}

function setBd3(a) {
	var obj = document.getElementById("li" + a);
	obj.setAttribute("style", "width:96px;line-height:40px;display:block;margin-left:-41px;height:43px;text-align:center;font-size:16px;color:white;background-color:#2577e3");
	obj.onmouseover = function () {
		obj.setAttribute("style", "border-left: 3px solid #FF9915;background-color: white; color: #158fff;")
	}
	obj.onmouseout = function() {
		obj.setAttribute("style", "width:96px;line-height:40px;display:block;margin-left:-41px;height:43px;text-align:center;font-size:16px;color:white;background-color:#2577e3");
	}
}

function setBd3s(a) {
	var obj = document.getElementById("li" + a);
	obj.setAttribute("style", "border-left:3px solid #FF9915; background-color:white; color:#158fff");
	obj.onmouseout = null;
}

function tl(a){
	if (a==1) {
		document.getElementById('tt').style.display='block';		
	}else if(a == 2){
		document.getElementById('tt1').style.display='block';
	}else if(a == 3){
		document.getElementById('tt2').style.display='block';
	}
}

function test(a) {
	document.getElementById('inp').value = a;
	document.getElementById('tt').style.display='none';
}

function disappear() {
	document.getElementById('tt').style.display='none';
	document.getElementById('tt1').style.display='none';
	document.getElementById('tt2').style.display='none';
}

function tt1(){
	document.getElementById('test3').style.display='block';
}
function vary(num){
	var v = document.getElementById('variety').value;
	if (num==1) {
		if (v==1) {
			document.getElementById('Less').style.disabled="disabled";
		}else{
			v = v-1;
		}
			document.getElementById('variety').value=v;
	}else{
		document.getElementById('plus').style.disabled="";
		v++;
		document.getElementById('variety').value=v;
	}
}
function vary1(num){
	var v = document.getElementById('variety1').value;
	if (num==1) {
		if (v==0) {
			document.getElementById('Less1').style.disabled="disabled";
		}else{
			v = v-1;
		}
			document.getElementById('variety1').value=v;
	}else{
		document.getElementById('plus1').style.disabled="";
		v++;
		document.getElementById('variety1').value=v;
	}
}
function test4(){
	document.getElementById('test3').style.display="none";
	document.getElementById('test5').value=document.getElementById('variety').value+"成人 "+document.getElementById('variety1').value+"儿童"
}
function test5(){
	document.getElementById('test3').style.display="none";
}
function mousemove(){
	var v=document.getElementById('guanggao').style.top=600+window.screenTop;
}
function japan(){
	document.getElementById('japan').style.display = "block"
	document.getElementById('within').style.display = "none"
	document.getElementById("jc")
	.setAttribute("style", "background-color: #3983E5;border: 1px solid #3983E5;border-radius: 4px;color: white;");
	document.getElementById("wi")
	.setAttribute("style", "background-color: white;border: none;border-radius: 4px;color: #4895EB;");
}
function within(){
	document.getElementById('japan').style.display = "none"
	document.getElementById('within').style.display = "block"
	document.getElementById("wi")
	.setAttribute("style", "background-color: #3983E5;border: 1px solid #3983E5;border-radius: 4px;color: white;");
	document.getElementById("jc")
	.setAttribute("style", "background-color: white;border: none;border-radius: 4px;color: #4895EB;");
}

var i = -1521;

function hua(){
	var timer = window.setInterval(huachu,1)
	function huachu(){
		i = i + 10;
		var style = "margin-top: 546px;width: 100%;height: 179px;background-color: #00000069;position:fixed;z-index: 999;margin-left:" + i + "px;"
		document.getElementById('hua1').setAttribute("style", style);
		if (i >= -1) {
			window.clearInterval(timer);
		}
	}
	document.getElementById('hua').style.display = "none";
}
// var p = 0
function huachu(){
	// var timer = window.setInterval(huachu,1000)
	// 	p = p - 10;
	// 	var style = "margin-top: 546px;width: 100%;height: 179px;background-color: #00000069;position:fixed;z-index: 99;margin-left:" + p + "px;"
	// 	document.getElementById('hua1').setAttribute("style", style);
	// 	if (timer = 125) {
	// 		window.clearInterval(timer);
	// 	}
	document.getElementById('hua').style.display = "block";
	document.getElementById('hua1').style.display = "none";
	document.getElementById("hua1")
	.setAttribute("style", "margin-top: 546px;width: 100%;height: 179px;background-color: #00000069;position:fixed;z-index: 99;margin-left:-1521px;");
}
function testty(a) {
	var start = document.getElementById('start' + a).innerHTML;
	var end = document.getElementById('end' + a).innerHTML;
	var price = document.getElementById('price' + a).innerHTML;
	var time = document.getElementById('time' + a).innerHTML;
	var jd = document.getElementById("jd77777").getAttribute("href");
	document.getElementById("jd77777").setAttribute("href", jd + "start"+a+"="+escape(start) +"&"+"end"+a+"="+escape(end) +"&" +"price"+a+"=" + price+ "&"+"time"+a+"="+escape(time) + "&" +"index=" + a+"&");

	//document.getElementById("tytyty").innerHTML = html + "<ul id='airdome2' class='air1dome2'> <li class='airdome'>"+ start + "-->" + end + "</li><li class='airdome'>"+ time +"</li><li class='airdome'>1</li></ul>";
}
