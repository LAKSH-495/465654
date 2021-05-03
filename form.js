class Form{
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("name")
        this.button = createButton("START")
        this.greeting = createElement("h4")
             
    }
    hide1(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    } 
    display(){
       
        this.title.html("CAR RACING GAME")
        this.title.position(500,20);
        this.input.position(500,100)
        this.button.position(100,150);

        this.button.mousePressed(()=>{
            //this.input.hide();
            //this.button.hide();
            player1.name = this.input.value();
            playerCount++
            player1.index = playerCount
            player1.update();
            player1.updatecount(playerCount);
            this.greeting.html("HI  "+player1.name)
            this.greeting.position(500,400);
        });
    }
}