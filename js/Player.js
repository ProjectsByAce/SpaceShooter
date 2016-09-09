/**
 * Created by ACE on 2015/12/16.
 */
function Player(ctx,buls,fireAudio,playerExplodeAudio){
    this.ctx=ctx;
    this.img=new Image();
    this.img.src="images/Player.png";
    this.x=250;
    this.y=350;
    this.width=100;
    this.height=100;

    this.buls=buls;
    this.fireAudio=fireAudio;
    this.exploded=false;
    this.destoryed=false;

    this.explodeImg=new Image();
    this.explodeImg.src="images/explosionPlayer.png";
    this.explodeIndex=0;

    this.playerExplodeAudio=playerExplodeAudio;
}

Player.prototype.draw=function(){
    if(keyStatus.upStatus){
        this.y-=5;
    }
    if(keyStatus.downStatus){
        this.y+=5;
    }
    if(keyStatus.leftStatus){
        this.x-=5;
    }
    if(keyStatus.rightStatus){
        this.x+=5;
    }
    if(keyStatus.spaceStatus){
        this.fire();
        keyStatus.spaceStatus=false;
        this.fireAudio.play();
    }
    if(this.y<=0){
        this.y=0;
    }
    if(this.y>=350){
        this.y=350;
    }
    if(this.x<=0){
        this.x=0;
    }
    if(this.x>=500){
        this.x=500;
    }
    if(!this.exploded){
        this.ctx.drawImage(this.img,this.x,this.y);
    }else{
        this.ctx.drawImage(this.explodeImg,this.explodeIndex*42,0,42,43,this.x,this.y,42,43);
        this.explodeIndex++;
        if(this.explodeIndex>5){
            //destroy player
            this.destoryed=true;
        }
        this.playerExplodeAudio.play();
    }

}

Player.prototype.fire=function(){
    var bul=new Bullet(this.ctx,this.x+44,this.y+24,this.buls);
    this.buls.push(bul);

}

Player.prototype.getCenter=function(){
    return new Point(this.x+this.width/2,this.y+this.height/2);
}

Player.prototype.explode=function(){
    this.exploded=true;
}