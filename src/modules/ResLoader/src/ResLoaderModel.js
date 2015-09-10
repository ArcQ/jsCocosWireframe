//LoadSceneCtrl serves as a replacement of the default preloader function (CCLoaderScene.js)
//Scenes are used as controllers because running scenes have access to methods that the controller needs, this contradicts with MVC slightly
var ResLoaderModel = cc.Scene.extend({
    percentResLoaded:0,
    delayedCb:null
});

ResLoaderModel.prototype.load = function(ctrl,resources){
    var self = this;
    cc.loader.load(
        resources,
        //callback from actual loading process
        function (result, count, loadedCount) {
            var percentLoaded = (loadedCount / count * 100) | 0;
            percentLoaded = Math.min(percentLoaded, 100);
            ctrl.resLoadUpdate(percentLoaded);
        },
        //tell ctrl resources are loaded
        function () {
            ctrl.finishLoad();
        }
    );
};

module.exports = ResLoaderModel;








