window.onload = function() {
    function run() {
        window.setInterval(change, 3000);
    }
    var i = 1;

    function change() {
        i += 1;
        if (i > 2) {
            i = 1;
        }
        document.getElementById('begin').src = "轮播/dome" + i + ".jpg";
    }
    run();
}