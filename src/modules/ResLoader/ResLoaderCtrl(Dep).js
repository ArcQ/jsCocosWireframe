//LoadSceneCtrl serves as a replacement of the default preloader function (CCLoaderScene.js)
//Scenes are used as controllers because running scenes have access to methods that the controller needs, this contradicts with MVC slightly
var LoadSceneCtrl = cc.Scene.extend({
    percentBarLoaded:0,
    percentResLoaded:0,
    layer: null,
    LayerCls: null,
    loadingBar:null,
    delayedCb:null,
    onEnter: function () {
        this._super();
    },
    update: function(dt){
        this.setLoadingBarPercentage.call(this,dt);
    }
});

//After every load, store a defined key so you can check and make sure you don't have to load again
//Check via:
//
//  if(LoadSceneCtrl.indexOf(key)==-1){
//      loadSceneCtrl.loadSceneCtrl.loadResources.call(..);
//      LoadSceneCtrl.addKey(key);
//  }

LoadSceneCtrl.loadedKeysArr = [];

LoadSceneCtrl.addKey = function(key){
    this.loadedKeysArr.appendChild(key);
}

//loader is called twice, once to load inital assets for loading screen, then a second time to load all the rest of the elements while loading animation is displayed
LoadSceneCtrl.prototype.loadResources = function(resources,isShowAnimation,cb){
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

LoadSceneCtrl.prototype.setLoadingBarPercentage = function(dt) {

    if (this.percentBarLoaded < this.percentResLoaded){
        this.percentBarLoaded = this.percentBarLoaded +dt/2*100;
        this.loadingBar.setPercentage(this.percentBarLoaded);
    }

    if(this.percentBarLoaded >= 100){
        this.unscheduleUpdate();
        this.delayedCb();
    }
};









