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








