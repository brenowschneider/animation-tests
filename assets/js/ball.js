function Ball(context) {
    'use strict';
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.radius = 10;
    this.color = 'black';
    this.xSpeed = 0;
    this.ySpeed = 0;
}

Ball.prototype = {
    refresh: function () {
        'use strict';
        var ctx = this.context;
        
        if (this.x < this.radius || this.x > ctx.canvas.width - this.radius) {
            this.xSpeed *= -1;
        }
        
        if (this.y < this.radius || this.y > ctx.canvas.width - this.radius) {
            this.ySpeed *= -1;
        }
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    },
    
    draw: function () {
        'use strict';
        
        var ctx = this.context;
        
        ctx.save();
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
        
    },
    
    collisionRectangles: function () {
        'use strict';
        return [
            {
                x: this.x - this.radius,
                y: this.y - this.radius,
                width: this.radius * 2,
                height: this.radius * 2
            }
        ];
    },
    
    collidedWith: function (sprite) {
        'use strict';
        if (this.x < sprite.x) { //left
            this.xSpeed = -Math.abs(this.xSpeed);
        } else { //right
            this.xSpeed = Math.abs(this.xSpeed);
        }
        
        if (this.y < sprite.y) { //above
            this.ySpeed = -Math.abs(this.ySpeed);
        } else { //below
            this.ySpeed = Math.abs(this.ySpeed);
        }
        
        //alert('collision!');
        
    }
};