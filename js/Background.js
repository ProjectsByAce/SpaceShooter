/**
 * Created by ACE on 2015/12/14.
 */
function Background(ctx){
    this.ctx=ctx;
    this.img=new Image();
    this.img.src="images/Stars.png";
    this.y=0;

}

Background.prototype.draw=function(){
    this.ctx.drawImage(this.img,0,this.y);
    this.ctx.drawImage(this.img,0,this.y-450);
    this.y++;
    //循环滚动
    if(this.y>450){
        this.y=0;
    }
}