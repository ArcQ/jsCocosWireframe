var LogoLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;

        // Add logoSprite as splash screen
        var logoSprite = new cc.Sprite(res.Logo_png);
        logoSprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.3,
        });
        this.addChild(logoSprite, 0);
        return true;
    }
});