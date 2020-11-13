let displayColorss = function(message, ...colors){

    console.log(message);
    console.log(colors);
    console.log(arguments.length);

    for(let i in colors){
        console.log(colors[i]);
    }
}

let messages = "list of colors";

displayColorss(messages,'Red');
displayColorss(messages, 'Red', 'Blue');
displayColorss(messages, 'Red', 'Blue', 'Green');