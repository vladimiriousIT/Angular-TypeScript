"use strict";
var displayColorss = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var messages = "list of colors";
displayColorss(messages, 'Red');
displayColorss(messages, 'Red', 'Blue');
displayColorss(messages, 'Red', 'Blue', 'Green');
//# sourceMappingURL=tutorial13.js.map