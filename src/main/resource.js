var loadRes = {
    CircleLoadingBar_png : "res/Logo/CircleLoadingBar.png",
    Logo_png : "res/Logo/Logo.png"};

var load_resources = [];
for (var i in loadRes) {
    load_resources.push(loadRes[i]);

}

var res = {
    HelloWorld_png: "res/HelloWorld.png",
    CloseNormal_png: "res/CloseNormal.png",
    CloseSelected_png: "res/CloseSelected.png",
    testOne_png:"res/5FVJ2PSHJS.jpg",
    testTwo_png:"res/96LJZ9JPB6.jpg",
    testThree_png:"res/EKVFZ0A22C.jpg",
    background_png:"res/background.jpg"

};

var iconRes = {
    graphBtn_png:"res/Icons/graphBtn.png",
    graphBtnH_png:"res/Icons/graphBtnH.png",
    pauseBtn_png:"res/Icons/pauseBtn.png",
    pauseBtnH_png:"res/Icons/pauseBtnH.png",
    refreshBtn_png:"res/Icons/refreshBtn.png",
    refreshBtnH_png:"res/Icons/refreshBtnH.png",
    soundBtn_png:"res/Icons/soundBtn.png",
    soundBtnH_png:"res/Icons/soundBtnH.png"
}

var g_resources = [];

for (var i in res) {
    g_resources.push(res[i]);
}

for (var i in iconRes) {
    g_resources.push(iconRes[i]);
}