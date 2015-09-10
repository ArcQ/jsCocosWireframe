//LoadSceneCtrl serves as a replacement of the default preloader function (CCLoaderScene.js)
//Scenes are used as controllers because running scenes have access to methods that the controller needs, this contradicts with MVC slightly
var ResLoaderModel = require('./ResLoaderModel');
var ResLoaderView = require('./ResLoaderView');

var ResLoaderCtrl = function(){
    this.view = new ResLoaderView();
    this.model = new ResLoaderModel();
    this.delayedCb = null;
    this.isShowAnimation = null;
};

ResLoaderCtrl.prototype.loadResources = function(resources,isShowAnimation,cb){
    //native machines don't need preload function, show layer for a few seconds instead
    this.isShowAnimation = isShowAnimation;
    //if it's native, we don't need to load, just callback
    if(cc.sys.isNative){
        cb();
        return;
    }
    if(this.isShowAnimation === true){
        this.view.delayedCb = cb;
        this.view.startUpdate.call(this.view);
    }
    else{
        this.delayedCb = cb;
    }
    var self = this;
    this.model.load(this,resources,cb);
};

ResLoaderCtrl.prototype.resLoadUpdate = function(percentLoaded){
    this.view.percentResLoaded = percentLoaded;
};

ResLoaderCtrl.prototype.finishLoad= function(){
    if(this.isShowAnimation === true){
        //delay the callback until after the loadingAnimation loads to 100 through update();
        this.view.percentResLoaded = 100;
    }
    else{
        this.delayedCb();
    }
}

module.exports = ResLoaderCtrl;







