//keyboard codes
var LEFT_ARROW = 65; //37
var RIGHT_ARROW = 68; //39
var SPACE_BAR = 87; //32

/*
w = 87
a = 65
d = 68

*/

function Keyboard(element) {
    'use strict';
    this.element = element;
    
    //Pressed keys array
    this.pressedKeys = [];
    
    this.shots = [];
    
    this.shotFunctions = [];
    
    var keyboard = this;
    element.addEventListener('keydown', function (event) {
        keyboard.pressedKeys[event.keyCode] = true;
        
        //This method should be triggered on the first keydown only
        if (keyboard.shotFunctions[event.keyCode] && !keyboard.shots[event.keyCode]) {
            keyboard.shots[event.keyCode] = true;
            keyboard.shotFunctions[event.keyCode]();
        }
        
    });
    element.addEventListener('keyup', function (event) {
        keyboard.pressedKeys[event.keyCode] = false;
        keyboard.shots[event.keyCode] = false;
    });
    
    
    
    
}

Keyboard.prototype = {
    pressed: function (key) {
        'use strict';
        return this.pressedKeys[key];
    },
    
    shot: function (key, callback) {
        'use strict';
        this.shotFunctions[key] = callback;
    }
};