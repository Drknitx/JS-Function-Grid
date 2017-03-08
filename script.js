//Write your function calls below this line

setColor(9,3,"blue");
for (var i=0; i<10; i=i+1 ){
    if(i<5){
        setColor(i,i,"pink");
    }else{
        setColor(i,i,"purple");
    }
}

$("h2").click(function(){
    $("td").css("transition","200ms");
    // $("body").css("background","rgb(255,255,128)");
    for (var i=0; i<50; i++){
        var randomRow= randomInt(0,10);
        var randomCol= randomInt(0,10);
        console.log(randomRow);
        var randomColor= "rgb("+ randomInt(0,255)+","+randomInt(0,255)+","+randomInt(0,255)+")";
        setColor(randomRow,randomCol,randomColor);
    }
});

//chen wrote this:
function randomInt(a,b){
    return Math.floor(Math.random() * b + a);
}