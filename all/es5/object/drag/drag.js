function Drag(id) {
    var self = this;
    this.disX = 0;
    this.disY = 0;
    this.oDiv = document.getElementById(id);
    this.oDiv.onmousedown = function (event) {
        self.fnDown(event);
    };
}


Drag.prototype.fnDown = function (event) {
    var self = this;
    this.disX = event.clientX - this.oDiv.offsetLeft; //鼠标光标离div左边的距离
    this.disY = event.clientY - this.oDiv.offsetTop;
    console.log("鼠标光标离div左边的距离：" + event.clientX + "-" + this.oDiv.offsetLeft + "=" + this.disX);

    document.onmousemove = function (event) {
        self.fnMove(event);
    };

    document.onmouseup = function () {
        self.fnUp();
    };
};

Drag.prototype.fnMove = function (event) {
    this.oDiv.style.left = event.clientX - this.disX + 'px'; //div离body左边的距离
    this.oDiv.style.top = event.clientY - this.disY + 'px';
    console.log("div离body左边的距离：" + event.clientX + "-" + this.disX + "=" + (event.clientX - this.disX));
};

Drag.prototype.fnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
};