/**
 * Created by ACE on 2015/12/14.
 */
function Director(){
    this.gameCtx=null;//canvas rendering2d object
    this.back=null;//Background object
    this.player=null;//Player object
    this.enemies=[];//Enemy list object
    this.bullets=[];//Bullet list object
    this.backAudio=null;//Back Audio object
    this.fireAudio=null;//Fire Audio object
    this.enemyExplodeAudio=null;//Enemy Explode Audio
    this.playerExplodeAudio=null;//Player Explode Audio

    this.gameIntervalId=null;
    this.score=0;
}

Director.prototype.play=function(){
//    alert("Play Game!");
    this.backAudio.play();
    var fps=60;
    var temp=this;
    //window.setInterval
    this.gameIntervalId=setInterval(function(){
        temp.gameLoop();
    },1000/fps);
}
Director.prototype.pause=function(){
    clearInterval(this.gameIntervalId);
}
//GameLoop to control game
Director.prototype.gameLoop=function(){
    //1.clear scene
    this.gameCtx.clearRect(0,0,600,450);
    //2.draw background
    this.back.draw();
    //3.draw player
    if(!this.player.destoryed){
        this.player.draw();
    }
    //4.draw enemy
    var e = Math.random()*1000;
    var direc2= new Director();
    direc2.gameCtx=document.getElementById("game_canvas").getContext("2d")
    //  direc2.gameCtx.clearRect(0,0,600,450);
    direc2.enemyExplodeAudio=document.getElementById("enemyExplodeAudio")
    //   console.log(e)
    if(e>996){
        this.enemies.push(new Enemy(direc2.gameCtx,direc2.enemyExplodeAudio))
    }
    if(e<3){
        this.enemies.push(new Enemy2(direc2.gameCtx,direc2.enemyExplodeAudio))
    }
    var newEnemies=this.enemies.filter(function(elem){
        if(!elem.destoryed){
            return true;
        }
    });
    this.enemies=newEnemies;
    for(var i=0;i<this.enemies.length;i++){
             this.enemies[i].draw();
          }
//    for(var i=0;i<this.enemies.length;i++){
//        var day=new Date();
//        var s=[];
//        var a=day.getSeconds();
//        for(var j=0;j>=0;j++){
//            s[j]=day.getSeconds();
//            if(Math.abs(s[j]-a)>=4){
//                this.enemies[i].draw();
//                a=s[j];
//            }
//        }
//    }
    //5.draw bullets
//    var newBullets=this.bullets.filter(function(elem){
//        if(!elem.destoryed){
//            return true;
//        }
//    });
//    this.bullets=newBullets;
    for(var i=0;i<this.bullets.length;i++){
        this.bullets[i].draw();
    }
    //6.碰撞检测
    this.checkCollision();
    this.checkCollision1();
    //7.draw score
    this.gameCtx.fillText("Score:"+this.score,400,50);
}

Director.prototype.checkCollision=function(){
    for(var i=0;i<this.enemies.length;i++){
        if(!this.enemies[i].exploded) {
            for(var j=0;j<this.bullets.length;j++){
                if (isCollided(this.enemies[i], this.bullets[j])) {
                    console.log("ok,collided!");
                    this.enemies[i].explode();
                    this.bullets[j].explode();
                    this.score+=100;
                }
            }
        }
    }
}

Director.prototype.checkCollision1=function(){
    for(var i=0;i<this.enemies.length;i++){
        if(isCollided(this.enemies[i],this.player)){
            console.log("ok,collided!");
            this.player.explode();
            this.gameCtx.fillText("Game Over!",250,200);
        }
    }
}