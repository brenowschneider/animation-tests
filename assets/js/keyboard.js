//keyboard codes
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

function Keyboard(element) {
    'use strict';
    this.element = element;
    
    //Pressed keys array
    this.pressedKeys = [];
    
    this.shots = [];
    
    this.shotFunction = [];
    
    var keyboard = this;
    element.addEventListener('keydown', function(event) {
        keyboard.pressedKeys[event.keyCode] = true;
    });
    element.addEventListener('keyup', function(event) {
        keyboard.pressedKeys[event.keyCode] = false;
    });
    
}

Keyboard.prototype = {
    pressed: function(key) {
        return this.pressed[key];
    }
}
