var PlayLayerOne = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var size = cc.winSize;
        var helloLabel = new cc.LabelTTF("CocosGame Wireframe", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = 0;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = cc.Sprite.create(res.background_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: size.height/this.sprite.getContentSize().height
        });
        this.addChild(this.sprite, 0);
        helloLabel.runAction(
            cc.spawn(
                cc.moveBy(2.5, cc.p(0, size.height - 40)),
                cc.tintTo(2.5,255,125,0)
            )
        );
        return true;
    }
});

module.exports = PlayLayerOne;
