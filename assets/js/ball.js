
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
        
    }
};