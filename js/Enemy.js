/**
 * Created by ACE on 2015/12/16.
 */
function Enemy(ctx,enemyExplodeAudio){
    this.ctx=ctx;
    this.image=new Image();
    this.image.src="images/Rock.png";
    this.x=Math.random()*500;
    this.y=30;

    this.width=66;
    this.height=70;

    this.exploded=false;
    this.explodeImg=new Image();
    this.explodeImg.src="images/explosionEnemy.png";
    this.explodeIndex=0;
    this.enemyExplodeAudio=enemyExplodeAudio;

    this.destoryed=false;
}

Enemy.prototype.draw=function() {
    if(!this.exploded){
        this.ctx.drawImage(this.image, this.x, this.y);
        this.y++;
        if(this.y>450){
            this.destoryed=true;
        }
    }else{
//        this.ctx.drawImage(this.explodeImg,this.x,this.y);
        this.ctx.drawImage(this.explodeImg,this.explodeIndex*44,0,44,49,this.x,this.y,44,49);
        this.explodeIndex++;
        if(this.explodeIndex>7){
            //destroy enemy
            this.destoryed=true;
        }
        this.enemyExplodeAudio.play();
    }
}

Enemy.prototype.getCenter=function(){
    return new Point(this.x+this.width/2,this.y+this.height/2);
}

Enemy.prototype.explode=function(){
    this.exploded=true;
}