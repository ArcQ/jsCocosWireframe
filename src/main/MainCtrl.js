var MainCtrl = {
    loadSceneCtrl:null,
    mainSceneCtrl:null
};

MainCtrl.initControllers = function(){
    this.gameSceneCtrl = new GameSceneCtrl();
}

MainCtrl.start= function(){
    this.initControllers();
    var resLoader = new window.ResLoader();
    //loadResources is called twice here, once after the first one finishes
    //first one is to load the assets for the load animation, second one is for rest of assets while displaying load animation
    resLoader.loadResources.call(
        resLoader,
        0,
        load_resources,
        false,
        function(){
            var resLoaderTwo = new window.ResLoader();
            var resView = resLoaderTwo.ctrl.view;

            cc.director.runScene(resView);

            var logoLayer = new LogoLayer();
            resView.addChild(logoLayer);
            resView.loadingBar = logoLayer.loadingBar;


            resLoaderTwo.loadResources.call(
                resLoaderTwo,
                1,
                g_resources,
                true,
                function(){
                    MainCtrl.changeScene("Main");
                }
            );
        }
    );
};

MainCtrl.changeScene = function(id){
    switch(id){
        case "Main":
            cc.director.runScene(this.gameSceneCtrl);
            break;
        default:
            cc.director.runScene(new HelloWorldScene());
            break;
    }
};



