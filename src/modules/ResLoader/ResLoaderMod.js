(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//LoadSceneCtrl serves as a replacement of the default preloader function (CCLoaderScene.js)
//Scenes are used as controllers because running scenes have access to methods that the controller needs, this contradicts with MVC slightly
var ResLoaderCtrl = require('./ResLoaderCtrl');

window.ResLoader = function(){
    this.ctrl = new ResLoaderCtrl();
};

//After every load, store a defined key so you can check and make sure you don't have to load again
//Check via:
//
//  if(LoadSceneCtrl.indexOf(key)==-1){
//      loadSceneCtrl.loadSceneCtrl.loadResources.call(..);
//      LoadSceneCtrl.addKey(key);
//  }

ResLoader.loadedKeysArr = [];

ResLoader.addKey = function(key){
    ResLoader.loadedKeysArr[ResLoader.loadedKeysArr.length] = key;
};

ResLoader.isKeyAdded = function(key){
    for( var i = 0; i < ResLoader.loadedKeysArr.length; i++ ) {
        if (key == ResLoader.loadedKeysArr[i]){
            return true;
        }
    }
    return false;
};

ResLoader.prototype.loadResources = function(key,resources,isShowAnimation,cb){
    if(!ResLoader.isKeyAdded(key)){

        ResLoader.addKey(key);
        this.ctrl.loadResources.call(this.ctrl,resources,isShowAnimation,cb);
        
    }
};

module.exports = ResLoader;








},{"./ResLoaderCtrl":2}],2:[function(require,module,exports){
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

//loader is called twice, once to load inital assets for loading screen, then a second time to load all the rest of the elements while loading animation is displayed
ResLoaderCtrl.prototype.loadResources = function(resources,isShowAnimation,cb){
    //loader can either load with loading assets or not
    this.isShowAnimation = isShowAnimation;
    if(this.isShowAnimation === true){
        this.view.startUpdate.call(this.view);
        this.view.delayedCb = cb;
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








},{"./ResLoaderModel":3,"./ResLoaderView":4}],3:[function(require,module,exports){
//LoadSceneCtrl serves as a replacement of the default preloader function (CCLoaderScene.js)
//Scenes are used as controllers because running scenes have access to methods that the controller needs, this contradicts with MVC slightly
var ResLoaderModel = cc.Scene.extend({
    percentResLoaded:0,
    delayedCb:null
});

//loader is called twice, once to load inital assets for loading screen, then a second time to load all the rest of the elements while loading animation is displayed
ResLoaderModel.prototype.load = function(ctrl,resources){
    //loader can either load with loading assets or not
    var self = this;
    cc.loader.load(
        resources,
        //callback from actual loading process
        function (result, count, loadedCount) {
            var percentLoaded = (loadedCount / count * 100) | 0;
            percentLoaded = Math.min(percentLoaded, 100);
            ctrl.resLoadUpdate(percentLoaded);
        },
        //custom callback after load completed
        function () {
            ctrl.finishLoad();
        }
    );
};

module.exports = ResLoaderModel;









},{}],4:[function(require,module,exports){
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










},{}]},{},[1]);
