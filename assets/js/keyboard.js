//keyboard codes
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var SPACE_BAR = 32;

function Keyboard(element) {
    'use strict';
    this.element = element;
    
    //Pressed keys array
    this.pressedKeys = [];
    
    this.shots = [];
    
    this.shotFunction = [];
    
    var keyboard = this;
    element.addEventListener('keydown', function (event) {
        keyboard.pressedKeys[event.keyCode] = true;
        
        //This method should be triggered on the first keydown only
        if (keyboard.shotFunction[event.keyCode] && !keyboard.shots[event.keyCode]) {
            keyboard.shots[event.keyCode] = true;
            keyboard.shotFunction[event.keyCode]();
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
        return this.pressed[key];
    },
    
    shoot: function (key, callback) {
        'use strict';
        this.shotFunction[key] = callback;
    }
};