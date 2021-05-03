class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
        
    }
    getCount(){
        var gamecountrefrence = database.ref("playerCount");
        gamecountrefrence.on("value",function(data){
            playerCount = data.val();  
        })
    }
    updatecount(Count){
        database.ref("/").update({
            playerCount:Count
        })
    }
    update(){
        var playerindex = "players/player"+this.index
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getplayerinfo(){
        var inforef = database.ref("players")
        inforef.on("value",(data)=>{
            allplayers = data.val();
        })
    }
   
}
