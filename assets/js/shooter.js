function Shooter(context, keyboard, animation) {
    'use strict';
    this.context = context;
    this.keyboard = keyboard;
    this.animation = animation;
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 20;
}

Shooter.prototype = {
    refresh: function () {
        'use strict';
        if (this.keyboard.pressed(LEFT_ARROW) && this.x > 0) {
            this.x -= 10;
        } else if (this.keyboard.pressed(RIGHT_ARROW) && (this.x + this.width) < this.context.canvas.width) {
            this.x += 10;
        }
        
    },
    
    draw: function () {
        'use strict';
        this.context.fillRect(this.x, this.y, this.width, this.height);
    },
    
    shoot: function () {
        'use strict';
        //ball.js
        var shot = new Ball(this.context);
        shot.x = this.x + 10;
        shot.y = this.y + 10;
        shot.radius = 2;
        shot.color = 'red';
        
        if (this.keyboard.pressed(LEFT_ARROW)) {
            shot.ySpeed -= 5;
        } else {
            shot.ySpeed = -5;
        }
        
        this.animation.newSprite(shot);
        
    }
};