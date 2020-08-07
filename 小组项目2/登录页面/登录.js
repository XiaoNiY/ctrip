function login() {
	var id = document.getElementById('name').value;
	var password = document.getElementById('pwd').value;
	if (id == "牛耳软件学院" && password == 168168) {
		window.location.href="../首页.html";
	}else if(id=="牛耳软件学院" && password != 168168){
		alert("密码输入错误");
	}
}
function view(){
	var a=document.getElementById('pwd').type
	if(a=="text"){
		document.getElementById('pwd').type="password"
	}else{
		document.getElementById('pwd').type="text"
	}
}