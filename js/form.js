class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greet = createElement('h2');
    }
hide(){
    this.greet.hide();
    this.button.hide();
    this.input.hide();
}

display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(400,100);

    this.input.position(400,260);
this.button.position(400,200);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
     player.name = this.input.value();
    playerCount+=1;
    player.index = playerCount;
    player.update()
    player.updateCount(playerCount);
       this.greet.html("Hello"+ player.name)
    this.greet.position(130,160);

})

}

    
}