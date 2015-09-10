var Ctrl = require('./Ctrl');

var Model = function(){
	this.isMenuShow = false;
};

Model.prototype.menuToggleClicked = function(){
	this.isMenuShow = !this.isMenuShow;
	return this.isMenuShow;
};

module.exports = Model;
