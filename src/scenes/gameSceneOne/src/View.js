var Ctrl = require('./Ctrl');

//GameSceneOne View
var View = cc.Scene.extend({
    onEnter: function () {
        this._super();
    },
    update: function(dt){
    }
});

View.prototype.startUpdate = function(){
    this.scheduleUpdate();
};

View.prototype.addLayer = function(layer){
    this.addChild(layer);
};

module.exports = View;


