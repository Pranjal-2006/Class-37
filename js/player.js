class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }
    getCount(){
        var playercount_ref = database.ref('playerCount');
        playercount_ref.on("value",function(data){
            playerCount = data.val();
        })

    }

updateCount(count){
    database.ref('/').update({playerCount:count})
}
update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({name:this.name,
    distance:this.distance});
}
static getplayerinfo(){
    var pi_ref = database.ref('players');
    pi_ref.on("value",(data)=>{
        allPlayers = data.val();
      })
}
}
