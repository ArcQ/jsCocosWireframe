var MenuItemModel = {

};

MenuItemModel.MainMenu = {
    pauseBtn : new cc.MenuItemToggle(new cc.Sprite(res.pauseBtn_png),new cc.Sprite(res.pauseBtnH_png)),
    graphBtn : new cc.MenuItemSprite(new cc.Sprite(res.graphBtn_png),new cc.Sprite(res.graphBtnH_png),null,null),
    refreshBtn : new cc.MenuItemSprite(new cc.Sprite(res.refreshBtn_png),new cc.Sprite(res.refreshBtnH_png),null,null),
    soundBtn : new cc.MenuItemSprite(new cc.Sprite(res.soundBtn_png),new cc.Sprite(res.soundBtnH_png),null,null),
    menuItems:[this.graphBtn, this.refreshBtn, this.soundBtn],
};