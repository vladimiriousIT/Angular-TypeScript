let displayColors = function(message, ...colors){

    console.log(message);
   // console.log(colors);
   // console.log(arguments.length);

    for(let i in colors){
        console.log(colors[i]);
    }
}

let message = "list of colors";

let colorArray1 = ['Orange', 'Yellow', 'Indigo'];
displayColors(message, ...colorArray1);

// displayColors(message,'Red');
// displayColors(message, 'Red', 'Blue');
// displayColors(message, 'Red', 'Blue', 'Green');