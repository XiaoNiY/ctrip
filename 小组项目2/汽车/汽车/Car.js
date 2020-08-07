function dt(a) {
    if (a == 1) {
        document.getElementById("tt1").style.display = "initial"
        document.getElementById("tt2").style.display = "none"
        document.getElementById("tt3").style.display = "none"
    } else if (a == 2) {
        document.getElementById("tt2").style.display = "initial"
        document.getElementById("tt1").style.display = "none"
        document.getElementById("tt3").style.display = "none"
    } else if (a == 3) {
        document.getElementById("tt3").style.display = "initial"
        document.getElementById("tt2").style.display = "none"
        document.getElementById("tt1").style.display = "none"
    }

}

function tests1(g) {
    document.getElementById("fznb").value = g
    document.getElementById("tt1").style.display = "none"
}

function tests2(g) {
    document.getElementById("fznb1").value = g
    document.getElementById("tt2").style.display = "none"
}

function tests3(g) {
    document.getElementById("fznb2").value = g
    document.getElementById("tt3").style.display = "none"
}

function dd(a) {
    if (a == 2) {
        document.getElementById("S31").style.display = "initial"
        document.getElementById("S3").style.display = "none"
        document.getElementById("S2").style.backgroundColor = "#2F79DB"
        document.getElementById("S1").style.color = "#06C"
        document.getElementById("S2").style.color = "white"
        document.getElementById("S1").style.backgroundColor = "#ECF4FC"
        document.getElementById("S1").style.borderLeft = "1px solid #C3D4E5 "
        document.getElementById("S1").style.borderTop = "1px solid #C3D4E5 "
    }
    if (a == 1) {
        document.getElementById("S3").style.display = "initial"
        document.getElementById("S31").style.display = "none"
        document.getElementById("S1").style.backgroundColor = "#2F79DB"
        document.getElementById("S2").style.color = "#06C"
        document.getElementById("S1").style.color = "white"
        document.getElementById("S2").style.backgroundColor = "#ECF4FC"
    }
}