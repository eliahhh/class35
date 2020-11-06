class Form{
constructor(){

}
display(){

    var title = createElement('h1');
    title.html("CAR RACER GAME");
    title.position(130,0);
    var input = createInput("Enter Your Name");
    var button = createButton('play');
    input.position(190,160);
    button.position(250,200);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playerCount += 1;
        player.update(name);
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("hello "+name)
        greeting.position(130,160);
        
    })

}
}
