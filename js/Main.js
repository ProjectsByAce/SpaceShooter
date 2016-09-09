/**
 * Created by ACE on 2015/12/14.
 */
//页面载入完成后自动实现
$(function(){

    $(document).keydown(function(e){
//        alert(e.which);
        switch(e.which){
            case keyCode.keyDown:
                keyStatus.downStatus=true;
                break;
            case keyCode.keyUp:
                keyStatus.upStatus=true;
                break;
            case keyCode.keyLeft:
                keyStatus.leftStatus=true;
                break;
            case keyCode.keyRight:
                keyStatus.rightStatus=true;
                break;
            case keyCode.keySpace:
                keyStatus.spaceStatus=true;
                break
        }
    }).keyup(function(e){
        switch(e.which){
            case keyCode.keyDown:
                keyStatus.downStatus=false;
                break;
            case keyCode.keyUp:
                keyStatus.upStatus=false;
                break;
            case keyCode.keyLeft:
                keyStatus.leftStatus=false;
                break;
            case keyCode.keyRight:
                keyStatus.rightStatus=false;
                break;
            case keyCode.keySpace:
                keyStatus.spaceStatus=false;
                break;

        }
    });

    var direc=new Director();
    direc.gameCtx=document.getElementById("game_canvas").getContext("2d");
    direc.gameCtx.font="30px 宋体";
    direc.gameCtx.fillStyle="#fff";
//    alert(direc.gameCtx);
    direc.back=new Background(direc.gameCtx);
    direc.backAudio=document.getElementById("backAudio");
    direc.fireAudio=document.getElementById("shootAudio");
    direc.enemyExplodeAudio=document.getElementById("enemyExplodeAudio");
    direc.playerExplodeAudio=document.getElementById("playerExplodeAudio");
    direc.player=new Player(direc.gameCtx,direc.bullets,direc.fireAudio,direc.playerExplodeAudio);
    direc.enemies.push(new Enemy(direc.gameCtx,direc.enemyExplodeAudio));
//    direc.backAudio=$("#backAudio")[0];
    direc.play();
})