var Img = (function () {
    function Img(container) {
        this.imageNode = new Image();
        container.appendChild(this.imageNode);
    }
    Img.prototype.setSrc = function (src) {
        this.imageNode.src = src;
    };
    return Img;
}());
var ProxyImg = (function () {
    function ProxyImg(img) {
        this.img = img;
        this.loadingImg = new Image();
        this.loadingImg.onload = function () {
            img.setSrc(this.src);
        };
    }
    ProxyImg.prototype.serSrc = function (src) {
        this.img.setSrc("./loading.jpg");
        this.loadingImg.src = src;
    };
    return ProxyImg;
}());
var proxyImg = new ProxyImg(new Img(document.body));
proxyImg.serSrc('https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/14547712_1751609588435421_4322896360224325632_n.jpg?ig_cache_key=MTM1NDg0NzYyMjMxNzM2NjIyNw%3D%3D.2');
