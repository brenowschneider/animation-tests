
function Animation(context) {
    'use strict';
    this.context = context;
    this.sprites = [];
    this.running = false;

}

Animation.prototype = {
    
    newSprite: function (sprite) {
        'use strict';
        this.sprites.push(sprite);
    },
    run: function () {
        'use strict';
        this.running = true;
        this.nextFrame();
    },
    
    stop: function () {
        'use strict';
        this.running = false;
    },
    
    clearCanvas: function () {
        'use strict';
        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    },
    
    nextFrame: function () {
        'use strict';
        var i = 0;
        //Continue?
        if (!this.running) {
            return false;
        }
        
        this.clearCanvas();
        
        //Refresh Sprites states
        for (i in this.sprites) {
            this.sprites[i].refresh();
        }
        
        //Draw Sprites
        i = 0;
        for (i in this.sprites) {
            this.sprites[i].draw();
        }
        
        //Next Cycle
        var animation = this;
        requestAnimationFrame(function () {
            animation.nextFrame();
        });
    }
};