function Collider() {
    'use strict';
    this.sprites = [];
    
}

Collider.prototype = {
    newSprite: function (sprite) {
        'use strict';
        this.sprites.push(sprite);
    },
    
    run: function () {
        "use strict";
        var i, j;
                
        for (i = 0; i < this.sprites.length; i++) {
            for (j = 0; j < this.sprites.length; j++) {
                //A sprite can not collide with itself
                if (i !== j) {
                    this.testCollision(this.sprites[i], this.sprites[j]);
                }
            }
        }
    },
    
    testCollision: function (sprite1, sprite2) {
        'use strict';
        var i, j;
        var rets1 = sprite1.collisionRectangles();
        var rets2 = sprite2.collisionRectangles();
        
collisions:
        for (i = 0; i < rets1.length; i++) {
            for (j = 0; j < rets1.length; j++) {
                
                if (this.rectanglesCollision(rets1[i], rets2[j])) {
                    sprite1.collidedWith(sprite2);
                    sprite2.collidedWith(sprite1);
                
                    break collisions;
                }
            }
        }
        
    },
    
    rectanglesCollision: function (ret1, ret2) {
        "use strict";
        
        return (ret1.x + ret1.width) > ret2.x && 
            ret1.x < (ret2.x + ret2.width) &&
            (ret1.y + ret1.height) > ret2.y &&
            ret1.y < (ret2.y + ret2.height);
    }
};