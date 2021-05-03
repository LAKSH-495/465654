class Game{
    constructor(){
        
    }
    getState(){
        var gameStaterefrence = database.ref("gamestate");
        gameStaterefrence.on("value",function(data){
            gameState = data.val();  
        })
    }
    update(State){
        database.ref("/").update({
            gameState:State
        })
    }
    async start(){
        if(gameState === 0){
            player1 = new Player()
            var countref = await database.ref("playerCount").once("value")
            if (countref.exists()){
                playerCount = countref.val()
                player1.getCount();
            }
            form1 = new Form()
            form1.display(); 
        }
    }
    play(){
        fill("red")
        form1.hide1();
        Player.getplayerinfo();
        if(allplayers!==undefined){
            var posY = 95
            for(var plr in allplayers){
                posY = posY+50;
                text(allplayer[plr].name+":"+allplayers[plr].distance,500,posY)
            }                          
        }
        if(keyDown(UP_ARROW)&&player1.index!==null){
            player1.distance+=100;
            player1.update()
       }
    }
}
