
var Ctrl = require('./Ctrl');

window.GameSceneOne = function(){ 
    this.ctrl = null;
};

GameSceneOne.prototype.start = function(){
	if ((this.ctrl === null)||(this.ctrl === undefined)){
			this.ctrl = new Ctrl();
	}
	this.ctrl.start();
};

GameSceneOne.prototype.getScene = function(){

	return this.ctrl.view;
}

module.exports = GameSceneOne;







