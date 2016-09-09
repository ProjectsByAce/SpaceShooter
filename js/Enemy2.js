/**
 * Created by ayanami rei on 2015/12/26.
 */
function Enemy2(ctx,explodeAudio)
{
    this.ctx=ctx;
    this.img=new Image();
    this.img.src="images/Rock.png";
    this.x=Math.random()*500;
    this.y=0;
    this.width=66;
    this.height=70;
    this.exploded=false;
    this.explodeImg=new Image();
    this.explodeImg.src="images/explosionEnemy.png"
    this.explodeIndex=0;
    this.explodeAudio=explodeAudio;
    this.destroyed=false;
}

var angle = 0;
Enemy2.prototype.draw=function()
{


//    if(keyStatus.upStatus)
//    {
//        this.y1-=5;
//    }
//    if(keyStatus.downStatus)
//    {
//        this.y1+=5;
//    }
//    if(keyStatus.leftStatus)
//    {
//        this.x1-=5;
//    }
//    if(keyStatus.rightStatus)
//    {
//        this.x1+=5;
//    }
    if(!this.exploded)
    {
        this.ctx.save();
        this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        this.ctx.rotate(angle * Math.PI / 180);
//        this.ctx.drawImage(this.img, -this.width / 2, -this.height / 2);
        this.ctx.drawImage(this.img, -this.width / 2, -this.height / 2);
        if(-this.width>600){
            -this.width--;
        }
        if(-this.width<0){
            -this.width++
        }
//        if( -this.height<){
//            -this.height++;
//        }
//        if( -this.height>){
//            -this.height--;
//        }
        this.ctx.restore();
        angle += 1;
       // this.ctx.translate(this.x+this.width/2,this.y+this.height/2)
        //this.ctx.rotate(5*Math.PI/180)
//        this.ctx.drawImage(this.img,this.x,this.y);
//        if((this.x-this.x1)>0){
//            this.x-=1;
//        }
//        if((this.x-this.x1)<0){
//            this.x+=1;
//        }
//        if((this.y-this.y1)>0){
//            this.y-=1
//        }
//        if((this.y-this.y1)<0){
//            this.y+=1
//        }
        if(this.y>450){
            this.destroyed=true;
        }

    }
    else{

        this.ctx.drawImage(this.explodeImg,this.explodeIndex*44,0,44,49,this.x,this.y,44,49);
        this.explodeIndex++;
        if(this.explodeIndex>7)
        {
            //销毁敌人
            this.destroyed=true;
        }

    }

}

Enemy2.prototype.getCenter=function()
{
    return new Point(this.x+this.width/2,this.y+this.height/2);
}
Enemy2.prototype.explode=function()
{
    this.explodeAudio.play();
    this.exploded=true;
}