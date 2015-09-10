var Ctrl = require('./Ctrl');

var View = cc.Layer.extend({
    ctrl:null,
    ctor:function (ctrl) {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.ctrl = ctrl;
        this.setMenuItems();

        var size = cc.winSize;
        var CENTER_Y = size.height/2;
        var CENTER_X = size.width/2;
        var MARGIN = 40;

        this.menuToggleBtn = this.setAttr(this.menuToggleBtn,1/15,size.width-MARGIN,size.height-MARGIN);
        this.menuItems.graphBtn = this.setAttr(this.menuItems.graphBtn,1/15,CENTER_X,size.height-MARGIN);
        this.menuItems.refreshBtn = this.setAttr(this.menuItems.refreshBtn,1/15,CENTER_X,CENTER_Y);
        this.menuItems.soundBtn = this.setAttr(this.menuItems.soundBtn,1/15,CENTER_X,0+MARGIN);
        
        var menu = new cc.Menu(this.menuToggleBtn,this.menuItems.graphBtn,this.menuItems.refreshBtn,this.menuItems.soundBtn);
        menu.x = 0;
        menu.y = 0;
        this.toggleSecondMenu(false);
        this.addChild(menu, 1);
        return true;
    },
    menuItems:null,
    startButton:null

});

View.prototype.setMenuItems = function(){
    this.menuToggleBtn = new cc.MenuItemImage(
                            iconRes.pauseBtn_png,
                            iconRes.pauseBtnH_png,
                            function () {
                                this.ctrl.menuToggleClicked();
                            }, 
                            this);
    this.menuItems = {
        graphBtn : new cc.MenuItemImage(
                            iconRes.graphBtn_png,
                            iconRes.graphBtnH_png,
                            function () {
                                cc.log("Menu is clicked!");
                            },
                            this),
        refreshBtn : new cc.MenuItemImage(
                            iconRes.refreshBtn_png,
                            iconRes.refreshBtnH_png,
                            function () {
                                cc.log("Menu is clicked!");
                            }, 
                            this),
        soundBtn : new cc.MenuItemImage(
                            iconRes.soundBtn_png,
                            iconRes.soundBtnH_png,
                            function () {
                                cc.log("Menu is clicked!");
                            }, 
                            this)
    };
};

View.prototype.toggleSecondMenu = function(isShowMenu){

    for (var btn in this.menuItems) {
      if (this.menuItems.hasOwnProperty(btn)) {
        console.log(btn);
        this.menuItems[btn].visible=isShowMenu;
      }
    }
};

View.prototype.setAttr = function(item,scale,xPos,yPos){
    var size = cc.winSize;
    item.attr({
                scale: (size.height*scale)/item.getContentSize().height,
                x: xPos,
                y: yPos,
                anchorX: 0.5,
                anchorY: 0.5
            });
    return item;
};


module.exports = View;


