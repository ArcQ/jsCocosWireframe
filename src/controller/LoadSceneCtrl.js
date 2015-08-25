
var LoadSceneCtrl = cc.Scene.extend({
    logoLayer:null,
    onEnter:function () {
        this._super();
        this.logoLayer = new LogoLayer();
        console.log(typeof(this.logoLayer.loadingBar));
        console.log("started");
        this.addChild(this.logoLayer);
    },
    init:function(cb){
        console.log("init");
        var self = this;
        cc.loader.load(
            load_resources,
            //actual function that accomplishes the loading process
            function (result, count, loadedCount) {
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                console.log(percent);
            },
            //once finished loading, the callback defined in mainController will be called
            function () {
                console.log('this:');
                console.log(self);
                cb(self);
            });
    },
    load:function(cb){
        this.init(function(self){
            cc.director.runScene(self);
            //load resources
            cc.loader.load(
                g_resources,
                //actual function that accomplishes the loading process
                function (result, count, loadedCount) {
                    var percent = (loadedCount / count * 100) | 0;
                    percent = Math.min(percent, 100);
                    console.log(percent);
                    self.logoLayer.loadingBar.setPercentage(percent);
                },
                //once finished loading, the callback defined in mainController will be called
                function () {

                    self.scheduleOnce(function(){
                        cb();
                    },10);

                });

        });

    }
});





