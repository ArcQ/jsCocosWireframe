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







