var Ctrl = require('./Ctrl');

var MenuOne = function(){
    this.ctrl= new Ctrl();
};

MenuOne.prototype.getLayer = function(){
    return this.ctrl.view;
};

MenuOne.prototype.start = function(){
    this.ctrl.start();
};

module.exports = MenuOne;
