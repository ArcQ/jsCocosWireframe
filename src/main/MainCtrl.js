var MainCtrl = {
    GameSceneOne:null
};

MainCtrl.start= function(){
    var resLoader = new window.ResLoader();
    //loadResources is called twice here, once after the first one finishes
    //first one is to load the assets for the load animation, second one is for rest of assets while displaying load animation
    resLoader.loadResources.call(
        resLoader,
        "Init",
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
                "Main",
                g_resources,
                true,
                function(){
                    MainCtrl.changeScene("Main");
                }
            );
        }
    );
//    MainCtrl.GameSceneOne = new window.GameSceneOne();
//    cc.log(MainCtrl.GameSceneOne);
//    MainCtrl.GameSceneOne.start();
//    scene = MainCtrl.GameSceneOne.getScene();
//    cc.director.runScene(scene);
};

MainCtrl.changeScene = function(id){
    var scene = null;
    switch(id){
        case "Main":

            if(MainCtrl.GameSceneOne === null){
                if(window.ResLoader.isKeyAdded("Main") === true){
                    MainCtrl.GameSceneOne = new window.GameSceneOne();
                    MainCtrl.GameSceneOne.start();
                    scene = MainCtrl.GameSceneOne.getScene();
                }
                else{
                    cc.log("Load resources needed for scene before trying to run it");
                }
            }

            break;
        default:
            scene = new HelloWorldScene();
            break;
    }
    cc.director.runScene(scene);

};



