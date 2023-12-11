window.onload = function () {
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3");
    var image4 = document.getElementById("image4");
    var maxWidth = "300px";
    var maxHeight = "400px";
    var minWidth = "200px";
    var minHeight = "300px";
    image1.onmouseover = function () {
        this.style.width = maxWidth;
        this.style.height = maxHeight;
    };
    image2.onmouseover = function () {
        this.style.width = maxWidth;
        this.style.height = maxHeight;
    };
    image3.onmouseover = function () {
        this.style.width = maxWidth;
        this.style.height = maxHeight;
    };
    image4.onmouseover = function () {
        this.style.width = maxWidth;
        this.style.height = maxHeight;
    };

    image1.onmouseout = function () {
        this.style.width = minWidth;
        this.style.height = minHeight;
    };
    image2.onmouseout = function () {
        this.style.width = minWidth;
        this.style.height = minHeight;
    };
    image3.onmouseout = function () {
        this.style.width = minWidth;
        this.style.height = minHeight;
    };
    image4.onmouseout = function () {
        this.style.width = minWidth;
        this.style.height = minHeight;
    };
};