
var GameSceneCtrl = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var gameMainLayer = new GameMainLayer();
        var menuLayer = new MenuLayer();
        this.addChild(gameMainLayer);
        this.addChild(menuLayer);
    },
    update: function(dt){

    }
});

GameSceneCtrl.prototype.loadResources = function(resources,isShowAnimation,cb){
    //loader can either load with loading assets or not
    if(isShowAnimation === true){
        this.scheduleUpdate();
    }
    var self = this;
    cc.loader.load(
        resources,
        //callback from actual loading process
        function (result, count, loadedCount) {
            if(isShowAnimation === true){
                self.percentResLoaded = (loadedCount / count * 100) | 0;
                self.percentResLoaded = Math.min(self.percentResLoaded, 100);
            }
        },
        //custom callback after load completed
        function () {
            if(isShowAnimation === true){
                //delay the callback until after the loadingAnimation loads to 100 through update();
                self.percentResLoaded = 100;
                self.delayedCb = cb;
            }
            else{
                cb();
            }
        });
};
