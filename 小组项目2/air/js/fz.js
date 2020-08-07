window.onload=function(){
    var i = 1;
    function run(){
        window.setInterval(change,4000);
    }
    function change(){
        i+=1;
        if (i>3) {
            i=1;
        }
        document.getElementById('tu').src="nm/dome"+i+".jpg";
        document.getElementById('dian'+i).setAttribute("style","float: left;width: 28px;height: 11px;background-color: white;border-radius: 50px;margin-left: 10px;");    
         if (i==1) {
            document.getElementById('dian3').setAttribute("style","float: left;width: 11px;height: 11px;background-color:#ebebebc9;border-radius: 100%;margin-left: 10px;");
        }else{
             document.getElementById('dian'+(i-1)).setAttribute("style","float: left;width: 11px;height: 11px;background-color:#ebebebc9;border-radius: 100%;margin-left: 10px;");
        }
    }
    // function ji(){
    //     if (i==1) {
    //         document.getElementById('tu').style.display="none"
    //         document.getElementById('tu1').style.display="block"
    //         document.getElementById('tu2').style.display="none"
    //     }else if(i==2){
    //         document.getElementById('tu').style.display="none"
    //         document.getElementById('tu1').style.display="none"
    //         document.getElementById('tu2').style.display="block"
    //     }else if (i==3) {
    //         document.getElementById('tu').style.display="block"
    //         document.getElementById('tu1').style.display="none"
    //         document.getElementById('tu2').style.display="none"
    //     }
    // }
    run();
}
function af(a) {
    if (a == 1) {
        document.getElementById("A1").style.height = "291px"
        document.getElementById("AA6").style.display = "block"
        document.getElementById("AA8").style.display = "none"
        document.getElementById("AA9").style.display = "none"
    }
    if (a == 2) {
        document.getElementById("A1").style.height = "291px"
        document.getElementById("AA6").style.display = "none"
        document.getElementById("AA8").style.display = "block"
        document.getElementById("AA9").style.display = "none"
    }
    if (a == 3) {
        document.getElementById("A1").style.height = "430px"
        document.getElementById("AA6").style.display = "none"
        document.getElementById("AA8").style.display = "none"
        document.getElementById("AA9").style.display = "block"
    }
}

function hk(c) {
    for (var i = 1; i <= 10; i++) {
        if (c == i) {
            document.getElementById("hk" + i).style.border = "1px solid #0086F6";
            document.getElementById("hk" + i).style.backgroundColor = "#F2F8FE"
            document.getElementById("hk" + i).style.color = "#0086F6"
            document.getElementById("hhk" + i).style.display = "initial"
        } else {
            document.getElementById("hk" + i).style.border = "1px solid  #DDD"
            document.getElementById("hk" + i).style.backgroundColor = "white"
            document.getElementById("hk" + i).style.color = "black"
            document.getElementById("hhk" + i).style.display = "none"
        }
    }
}

function dt(d) {
    for (var i = 1; i <= 20; i++) {
        if (i == d) {
            document.getElementById("tt" + i).style.display = "initial"
        } else {
            document.getElementById("tt" + i).style.display = "none"

        }
    }
}

function ddt(f) {
    for (var i = 1; i <= 20; i++) {
        document.getElementById("tt" + i).style.display = "none"
    }
}

function test(e) {
    document.getElementById("fznb1").value = e
    document.getElementById("tt1").style.display = "none"
}

function tests(g) {
    document.getElementById("fznb2").value = g
    document.getElementById("tt2").style.display = "none"
}

function tests1(g) {
    document.getElementById("fznb3").value = g
    document.getElementById("tt3").style.display = "none"
}

function tests2(g) {
    document.getElementById("fznb4").value = g
    document.getElementById("tt4").style.display = "none"
}

function cx(j) {
    for (var i = 1; i <= 20; i++) {
        if (i == j) {
            document.getElementById("SSSS" + i).style.display = "initial"
            document.getElementById("ccx" + i).style.color = "#0086F6"
            document.getElementById("ccx" + i).style.fontWeight = "800"
        } else {
            document.getElementById("SSSS" + i).style.display = "none"
            document.getElementById("ccx" + i).style.color = "#333333"
            document.getElementById("ccx" + i).style.fontWeight = "500"
        }
    }
}
