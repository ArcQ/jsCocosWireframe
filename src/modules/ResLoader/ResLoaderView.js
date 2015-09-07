//LoadSceneCtrl serves as a replacement of the default preloader function (CCLoaderScene.js)
//Scenes are used as controllers because running scenes have access to methods that the controller needs, this contradicts with MVC slightly
var ResLoaderView = cc.Scene.extend({
    percentResLoaded:0,
    percentBarLoaded:0,
    loadingBar:null,
    delayedCb:null,
    onEnter: function () {
        this._super();
    },
    update: function(dt){
        this.setLoadingBarPercentage.call(this,dt);
    }
});

ResLoaderView.prototype.startUpdate = function(){
    this.scheduleUpdate();
}

ResLoaderView.prototype.setLoadingBarPercentage = function(dt) {
    if (this.percentBarLoaded < this.percentResLoaded){
        this.percentBarLoaded = this.percentBarLoaded +dt/2*100;
        this.loadingBar.setPercentage(this.percentBarLoaded);
    }

    if(this.percentBarLoaded >= 100){
        this.unscheduleUpdate();
        this.delayedCb();
    }
};

module.exports = ResLoaderView;









