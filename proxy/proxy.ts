class Img{
    public src:string
    public imageNode:HTMLImageElement=new Image();
    constructor(container:HTMLElement){
        container.appendChild(this.imageNode)
    }
    setSrc(src:string){
        this.imageNode.src=src;
    }
}

class ProxyImg{
    public img:Img
    public loadingImg:HTMLImageElement
    constructor(img:Img){
        this.img=img;
        this.loadingImg=new Image();
        this.loadingImg.onload=function(){
            img.setSrc(this.src)
        }
    }
    serSrc(src){
        this.img.setSrc("./loading.jpg");
        this.loadingImg.src=src
    }
}

let proxyImg=new ProxyImg(new Img(document.body));
proxyImg.serSrc('https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/14547712_1751609588435421_4322896360224325632_n.jpg?ig_cache_key=MTM1NDg0NzYyMjMxNzM2NjIyNw%3D%3D.2')

