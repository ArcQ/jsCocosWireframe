var LogoLayer = cc.Layer.extend({
    loadingBar:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;

        var logoSprite = new cc.Sprite(loadRes.Logo_png);
        logoSprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.2,
        });



        this.loadingBar = new cc.ProgressTimer(cc.Sprite.create(loadRes.CircleLoadingBar_png));
        this.loadingBar.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.35
        });
        this.loadingBar.setPercentage(0);

        this.addChild(logoSprite, 0);
        this.addChild(this.loadingBar, 1);

        return true;
    }
});